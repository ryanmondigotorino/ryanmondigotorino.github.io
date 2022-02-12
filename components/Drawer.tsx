import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { toggleDrawer } from "redux/appSlice";
import Input from "components/Input";
import Button from "components/Button";
import Social from "components/Utilities/Social";
import { Direction, Text } from "styles/styled-components/global";
import {
  Wrapper,
  Button as ButtonApp,
} from "styles/styled-components/components/app.styled";
import { ReactComponent as IconClose } from "styles/assets/icon-close.svg";
import clsx from "clsx";

const Drawer: React.FC = () => {
  const dispatch = useDispatch();

  const { drawer } = useSelector((state: RootState) => state.systemApp);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        dispatch(toggleDrawer({ isVisible: false, action: "close" }));
      }
    };

    if (drawer?.isVisible) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drawer?.isVisible, dispatch]);

  return (
    <Wrapper.Drawer
      className={clsx(
        { "d-none": !drawer?.action },
        { "in-active": drawer?.action && !drawer.isVisible },
        { active: drawer?.action && drawer.isVisible }
      )}
    >
      <div className="drawer-container">
        <Direction.Row className="justify-content-end">
          <ButtonApp.Close
            type="button"
            onClick={() =>
              dispatch(toggleDrawer({ isVisible: false, action: "close" }))
            }
          >
            <IconClose className="icon icon-close" />
          </ButtonApp.Close>
        </Direction.Row>
        <Text.Title className="mb-20">Get in Touch</Text.Title>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            onSubmit(e as unknown as React.FormEvent<HTMLInputElement>)
          }
        >
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="email" placeholder="Email" />
          <Input type="textArea" name="messsage" placeholder="Message" />
          <Direction.Row className="justify-content-start">
            <Button type="submit">Submit</Button>
          </Direction.Row>
        </form>
        <Wrapper.Social>
          <Direction.Col>
            <Text.Title className="mb-20">Socials</Text.Title>
            <Social />
          </Direction.Col>
        </Wrapper.Social>
      </div>
    </Wrapper.Drawer>
  );
};

export default Drawer;

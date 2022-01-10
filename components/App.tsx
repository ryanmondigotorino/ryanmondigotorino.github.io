import type { NextPage } from 'next';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { toggleDrawer } from 'redux/appSlice';
import Input from 'components/Input';
import Button from 'components/Button';

import { Wrapper, Button as ButtonApp } from 'styles/styled-components/components/app.styled';
import { Direction, Text } from 'styles/styled-components/global';

import { ReactComponent as IconMessage } from 'styles/assets/icon-message.svg';
import { ReactComponent as IconClose } from 'styles/assets/icon-close.svg';

const App: NextPage = ({ children }) => {
  const dispatch = useDispatch();
  const { drawer } = useSelector((state: RootState) => state.systemApp);

  return (
    <Wrapper.Container>
      <Wrapper.Main className={clsx({ 'active-drawer': drawer?.isVisible })}>
        {children}
      </Wrapper.Main>
      <ButtonApp.Message type="button" onClick={() => dispatch(toggleDrawer({ isVisible: true }))} >
        <IconMessage className="icon icon-message" />
      </ButtonApp.Message>
      <Wrapper.Drawer className={clsx(`${clsx({ 'in-active': !drawer?.isVisible })}`, { active: drawer?.isVisible })}>
        <Direction.Row className="flex-end">
          <ButtonApp.Close type="button" onClick={() => dispatch(toggleDrawer({ isVisible: false }))}>
            <IconClose className="icon icon-close" />
          </ButtonApp.Close>
        </Direction.Row>
        <Text.Title>Get in Touch</Text.Title>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="text" name="email" placeholder="Email" />
        <Input type="textArea" name="messsage" placeholder="Message" />
        <Direction.Row className="flex-end">
          <Button type="button">Submit</Button>
        </Direction.Row>
      </Wrapper.Drawer>
    </Wrapper.Container>
  );
};

export default App;

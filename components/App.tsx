import React from "react";
import clsx from "clsx";
import smoothscroll from "smoothscroll-polyfill";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Social from "components/Utilities/Social";
import {
  Wrapper,
  Button as ButtonApp,
  Header,
  Navigation,
} from "styles/styled-components/components/app.styled";
import { ReactComponent as IconMessage } from "styles/assets/icon-message.svg";
import { Direction, Text } from "styles/styled-components/global";
import { redirect, SECTIONS } from "utils";
import Link from "next/link";

const App: React.FC = ({ children }) => {
  const { drawer } = useSelector((state: RootState) => state.systemApp);
  const [activeSection, setActiveSection] = React.useState<string>("hero");

  const sectionObserver = React.useCallback(() => {
    const options = {
      root: document.querySelector("body"),
      rootMargin: "0px",
      threshold: 0.5,
    };
    SECTIONS.forEach((ids) => {
      const targetElement = document.getElementById(ids);
      if (targetElement) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(targetElement.id);
            }
          });
        }, options);
        observer.observe(targetElement);
      }
    });
  }, []);

  React.useEffect(() => {
    smoothscroll.polyfill();
    sectionObserver();
    window.scrollTo(0, 0);
  }, [sectionObserver]);

  return (
    <Wrapper.Container>
      <Wrapper.Main className={clsx({ "active-drawer": drawer?.isVisible })}>
        <Header.Wrapper id="header">
          <Direction.Row className="container justify-content-between align-items-center">
            <Header.Content className="social">
              <Social />
            </Header.Content>
            <Header.Content className="justify-content-end get-in-touch">
              <Link passHref href="mailto:ryanmondigotorino@gmail.com">
                <Direction.Row className="clickable">
                  <IconMessage className="icon icon-message mr-10" />
                  <Text.SubTitle>Get in Touch</Text.SubTitle>
                </Direction.Row>
              </Link>
            </Header.Content>
          </Direction.Row>
        </Header.Wrapper>
        {children}
      </Wrapper.Main>
      <Navigation.Wrapper>
        {SECTIONS.map((val) => (
          <Navigation.Button
            key={val}
            type="button"
            className={clsx({ active: activeSection === val })}
            onClick={() => {
              redirect(val === "hero" ? "header" : val);
              setActiveSection(val);
            }}
          />
        ))}
      </Navigation.Wrapper>
      <Link passHref href="mailto:ryanmondigotorino@gmail.com">
        <ButtonApp.Message type="button">
          <IconMessage className="icon icon-message" />
        </ButtonApp.Message>
      </Link>
    </Wrapper.Container>
  );
};

export default App;

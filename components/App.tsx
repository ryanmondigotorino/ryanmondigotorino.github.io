import React from 'react';
import type { NextPage } from 'next';
import clsx from 'clsx';
import smoothscroll from 'smoothscroll-polyfill';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { toggleDrawer } from 'redux/appSlice';
import Drawer from 'components/Drawer';
import Social from 'components/Utilities/Social';
import { Wrapper, Button as ButtonApp, Header, Navigation } from 'styles/styled-components/components/app.styled';
import { ReactComponent as IconMessage } from 'styles/assets/icon-message.svg';
import { Direction, Text } from 'styles/styled-components/global';
import { redirect } from 'utils';

const SECTIONS_ID = ['hero', 'experience', 'skills', 'projects', 'about'];

const App: NextPage = ({ children }) => {
  const dispatch = useDispatch();
  const { drawer } = useSelector((state: RootState) => state.systemApp);
  const [activeSection, setActiveSection] = React.useState<string>('hero');

  const sectionObserver = React.useCallback(() => {
    const options = {
      root: document.querySelector('body'),
      rootMargin: '0px',
      threshold: 0.5,
    };
    SECTIONS_ID.forEach((ids) => {
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
      <Wrapper.Main className={clsx({ 'active-drawer': drawer?.isVisible })}>
        <Header.Wrapper id="header">
          <Direction.Row className="container justify-content-between align-items-center">
            <Header.Content>
              <Social />
            </Header.Content>
            <Header.Content className="justify-content-end">
              <Direction.Row className="clickable" onClick={() => dispatch(toggleDrawer({ isVisible: true,  action: 'open' }))} >
                <IconMessage className="icon icon-message mr-10" />
                <Text.SubTitle>Get in Touch</Text.SubTitle>
              </Direction.Row>
            </Header.Content>
          </Direction.Row>
        </Header.Wrapper>
        {children}
      </Wrapper.Main>
      <Navigation.Wrapper>
        {SECTIONS_ID.map((val) => (
          <Navigation.Button
            key={val}
            type="button"
            className={clsx({ active: activeSection === val })}
            onClick={() => {
              redirect(val === 'hero' ? 'header' : val);
              setActiveSection(val);
            }}
          />
        ))}
      </Navigation.Wrapper>
      <ButtonApp.Message type="button" onClick={() => dispatch(toggleDrawer({ isVisible: true,  action: 'open' }))} >
        <IconMessage className="icon icon-message" />
      </ButtonApp.Message>
      <Drawer />
    </Wrapper.Container>
  );
};

export default App;

import type { NextPage } from 'next';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { toggleDrawer } from 'redux/appSlice';
import Drawer from 'components/Drawer';
import Social from 'components/Utilities/Social';
import { Wrapper, Button as ButtonApp, Header } from 'styles/styled-components/components/app.styled';
import { ReactComponent as IconMessage } from 'styles/assets/icon-message.svg';
import { Direction, Text } from 'styles/styled-components/global';

const App: NextPage = ({ children }) => {
  const dispatch = useDispatch();
  const { drawer } = useSelector((state: RootState) => state.systemApp);

  return (
    <Wrapper.Container>
      <Wrapper.Main className={clsx({ 'active-drawer': drawer?.isVisible })}>
        <Header.Wrapper>
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
      <ButtonApp.Message type="button" onClick={() => dispatch(toggleDrawer({ isVisible: true,  action: 'open' }))} >
        <IconMessage className="icon icon-message" />
      </ButtonApp.Message>
      <Drawer />
    </Wrapper.Container>
  );
};

export default App;

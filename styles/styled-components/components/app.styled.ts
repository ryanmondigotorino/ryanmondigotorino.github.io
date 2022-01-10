import styled from 'styled-components';
import colors from 'styles/colors';
import * as AN from '../animations';

const ContainerWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const MainWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${colors.gray[700]} transparent;
  scrollbar-width: thin;
  &.active-drawer {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
    &-track {
      background-color: transparent;
    }
    &-thumb {
      background-color: ${colors.gray[700]};
      border-radius: 5px;
    }
  }
`;

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 41%;
  background: transparent radial-gradient(closest-side at 91% 46%, #2D2D2D8C 0%, #1F1F1F 100%) 0% 0% no-repeat padding-box;
  height: 100%;
  box-shadow: 0px 3px 6px #0707073B;
  padding: 90px;
  display: flex;
  flex-direction: column;
  &.active {
    animation: ${AN.appearRight.In} 300ms ease-out forwards;
  }
  &.in-active {
    animation: ${AN.appearRight.Out} 300ms ease-out forwards;
  }
`;

export const Wrapper = {
  Container: ContainerWrapper,
  Main: MainWrapper,
  Drawer: DrawerWrapper,
};

const MessageButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 51px;
  right: 137px;
  background-color: ${colors.secondary};
  width: 85px;
  height: 85px;
  border-radius: 17px;
  border: none;
  cursor: pointer;
  outline: none;
  outline-color: transparent;
  box-shadow: 0px 3px 6px #0707073B;
  transition: 300ms;
  justify-content: center;
  align-items: center;
  .icon-message {
    font-size: 43px;
    color: ${colors.white};
  }
  &:hover {
    box-shadow: unset;
  }
  &:focus {
    outline: none;
    outline-color: transparent;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  width: auto;
  height: auto;
  outline: none;
  outline-color: transparent;
  cursor: pointer;
  transition: 300ms;
  &:focus {
    outline: none;
    outline-color: transparent;
  }
  &:hover {
    opacity: 0.7;
  }
`;

export const Button = {
  Message: MessageButton,
  Close: CloseButton,
};

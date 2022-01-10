import { keyframes } from "styled-components";
export const appearInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(1);
    opacity: 1;
  }
`;

const inFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(1);
    opacity: 1;
  }
`;

const outToRight = keyframes`
  from {
    transform: translateX(1);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const appearRight = {
  In: inFromRight,
  Out: outToRight
};


export const appearInFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(1);
    opacity: 1;
  }
`;

export const onAppear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const onHide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
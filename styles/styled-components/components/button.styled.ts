import styled from 'styled-components';
import colors from 'styles/colors';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  width: auto;
  height: 51px;
  padding: 16px 35px;
  align-items: center;
  color: ${colors.white};
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid ${colors.white};
  outline: none;
  outline-color: transparent;
  transition: 300ms;
  border-radius: 30px;
  cursor: pointer;
  &:focus {
    outline: none;
    outline-color: transparent;
  }
  &:hover {
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;
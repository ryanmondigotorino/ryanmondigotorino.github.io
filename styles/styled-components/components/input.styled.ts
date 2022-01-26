import styled from 'styled-components';
import colors from 'styles/colors';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  &.textArea {
    height: 130px;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 31px;
  background-color: ${colors.inputBg};
  padding: 15px 30px;
  width: 100%;
  height: auto;
  color: ${colors.white};
  outline: none;
  font-weight: 300;
  font-size: 16px;
  ::-webkit-input-placeholder {
    color: ${colors.inputPlaceholder};
  }
  ::-moz-placeholder {
    color: ${colors.inputPlaceholder};
  }
  :-ms-input-placeholder {
    color: ${colors.inputPlaceholder};
  }
  :-moz-placeholder {
    color: ${colors.inputPlaceholder};
  }
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 31px;
  background-color: ${colors.inputBg};
  padding: 15px 30px;
  width: 100%;
  height: auto;
  color: ${colors.white};
  outline: none;
  font-weight: 300;
  font-size: 16px;
  resize: none;
  ::-webkit-input-placeholder {
    color: ${colors.inputPlaceholder};
  }
  ::-moz-placeholder {
    color: ${colors.inputPlaceholder};
  }
  :-ms-input-placeholder {
    color: ${colors.inputPlaceholder};
  }
  :-moz-placeholder {
    color: ${colors.inputPlaceholder};
  }
`;

export const Field = {
  Input,
  TextArea,
}
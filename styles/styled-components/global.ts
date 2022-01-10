import styled from 'styled-components';
import colors from 'styles/colors';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  &.flex-end {
    justify-content: flex-end;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Direction = {
  Row,
  Col,
};

const TextTitle = styled.h1`
  padding: 0;
  font-size: 36px;
  color: ${colors.white};
  font-family: 'Prompt';
  font-weight: 600;
  letter-spacing: 1.08px;
  line-height: 43px;
  margin: 0 0 57px 0;
`;

export const Text = {
  Title: TextTitle,
};

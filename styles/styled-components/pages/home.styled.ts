import styled from 'styled-components';
import colors from 'styles/colors';

export const Wrapper = styled.main`
  width: 100%;
`;

const SectionContainer = styled.section`
  width: 100%;
  height: calc(100% - 140px);
  padding: 70px 0;
  &.hero {
    padding: 0;
    height: calc(100vh - 70px);
  }
  &.navigation-experience {
    button {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

export const Section = {
  Container: SectionContainer,
};

const NavigationSkills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
  margin-top: 70px;
`;

export const Navigation = {
  Skills: NavigationSkills,
}

const GridContainer = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 50px 0 0 0;
  list-style: none;
  width: 100%;
  height: auto;
  padding: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const GridCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: transparent;
  transition: transform 300ms ease-out 300ms;

  &:hover {
    transform: translate(0, -5px);
    z-index: 1;
    cursor: pointer;
    &::after {
      opacity: 1;
    }
  }
  &::after {
    border-radius: 0.9375em;
    background: ${colors.secondary};
    box-shadow: 0px 6px 9px #0000004b;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity 300ms ease-out 300ms;
    width: 100%;
    z-index: -1;
  }
`;

const GridCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 55px;
  width: 100%;
`;

const GridCardList = styled.ul`
  margin: 35px 0 0 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    font-size: 17px;
    color: ${colors.white};
    letter-spacing: 0.83px;
    font-family: 'Karla';
    &::before {
      content: '•';
      color: ${colors.white};
      font-weight: bold;
      display: inline-block; 
      width: 1em;
      margin-left: -1em;
      font-size: 35px;
    }
  }
`;

export const Grid = {
  Container: GridContainer,
  Card: GridCard,
  CardContent: GridCardContent,
  CardList: GridCardList,
}
import styled from 'styled-components';
import colors from 'styles/colors';

export const Wrapper = styled.main`
  width: 100%;
`;

const SectionContainer = styled.section`
  width: 100%;
  height: 600px;
  padding: 70px 0;
  &.hero {
    padding: 0;
    height: 100vh;
  }
  &.skills {
    background: linear-gradient(to right, ${colors.sectionBg} 50%, ${colors.primary} 50%);
  }
  &.about {
    background: ${colors.aboutBg};
  }
  &.w-navigation {
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
  &.projects {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    a {
      transition: transform 300ms ease-out 300ms;
      &:hover {
        opacity: 1;
        transform: translate(0, -5px);
        z-index: 1;
        cursor: pointer;
        &::after {
          opacity: 1;
        }
      }
      &::after {
        border-radius: 20px;
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
    }
  }
`;

const GridCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: transparent;
  &.work-exp {
    border-radius: 16px;
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
  }
`;

const GridCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 55px 0 0;
  &.work-exp {
    padding: 50px 55px;
  }
  &.skills-icons {
    padding: 0;
    flex-direction: row;
    justify-content: space-evenly;
    a {
      &:first-child {
        margin-bottom: 40px;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const GridCardList = styled.ul`
  margin: 35px 0 0 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  &.default {
    margin: 0;
    padding: 0;
    justify-content: space-between;
  }
  li {
    font-size: 17px;
    color: ${colors.white};
    letter-spacing: 0.83px;
    font-family: 'Karla';
    &.work-exp::before {
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

const GridCardIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.sectionBg};
  border-radius: 20px;
  width: 150px;
  height: 180px;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    .icon {
      &-graphql {
        color: ${colors.iconGraphQl};
      }
      &-laravel {
        color: ${colors.iconLaravel};
      }
      &-react {
        color: ${colors.iconReact};
      }
      &-prisma {
        color: ${colors.iconPrisma};
      }
      &-nodejs {
        color: ${colors.iconNodeJs};
      }
      &-vue path {
        fill: ${colors.iconVueFirst};
        &:last-child {
          fill: ${colors.iconVueLast};
        }
      }
    }
    .skill-title {
      color: ${colors.white};
    }
  }
`;

export const Grid = {
  Container: GridContainer,
  Card: GridCard,
  CardContent: GridCardContent,
  CardList: GridCardList,
  CardIcon: GridCardIcon,
}

type BarProps = { width: string };

export const Bar = styled.div<BarProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: 15px;
  border: 1px solid ${colors.barBg};
  margin-top: 15px;
  .fill {
    background: ${colors.barBg};
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ width }) => width};
    height: inherit;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 20px;
`;

export const Project = {
  Image: ProjectImage,
};
import styled from "styled-components";
import { device, media } from "styles/devices";
import colors from "styles/colors";

export const Wrapper = styled.main`
  width: 100%;
`;

const SectionContainer = styled.section`
  width: 100%;
  height: 650px;
  padding: 70px 0;
  &.hero {
    padding: 0;
    height: 100vh;
  }
  &.skills {
    background: linear-gradient(
      to right,
      ${colors.sectionBg} 50%,
      ${colors.primary} 50%
    );
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
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      &.skills {
        background: none;
        padding: 0;
        height: 710px;
      }
      &.projects {
        height: 490px;
      }
      &.about {
        padding: 0 15px;
        width: calc(100% - 30px);
        height: 1150px;
      }
    }
  }
  @media ${device.mobileLg} {
    &.work-exp {
      padding: 70px 15px;
      width: calc(100% - 30px);
      height: 700px;
    }
    &.skills {
      background: none;
      padding: 0;
      height: 710px;
    }
    &.projects {
      padding: 70px 15px;
      width: calc(100% - 30px);
      height: 540px;
    }
    &.about {
      padding: 0 15px;
      width: calc(100% - 30px);
      height: 1150px;
    }
  }
`;

const ProjectDetaiilsSection = styled.div`
  bottom: 50px;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-end;
  align-items: start;
  z-index: 2;
  padding: 50px 30px;
  opacity: 0;
  transition: 1s;
`;

export const Section = {
  Container: SectionContainer,
  ProjectDetails: ProjectDetaiilsSection,
};

const NavigationSkills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
  margin-top: 70px;
  @media ${device.mobileLg} {
    flex-direction: column;
    align-items: center;
    height: 170px;
    p.hero:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const Navigation = {
  Skills: NavigationSkills,
};

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
      position: relative;
      transition: transform 300ms ease-out 300ms;
      &:hover {
        opacity: 1;
        transform: translate(0, -5px);
        z-index: 1;
        cursor: pointer;
        .project-details {
          opacity: 1;
        }
        &::after {
          opacity: 1;
        }
      }
      &::after {
        border-radius: 20px;
        content: "";
        height: calc(100% - 49px);
        left: 0;
        opacity: 0;
        pointer-events: none;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.9)
        );
        position: absolute;
        top: 0;
        transition: opacity 300ms ease-out 300ms;
        width: 100%;
        z-index: 1;
      }
    }
  }
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      &.single-slide {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        margin: 0;
        &__projects {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    }
  }
  @media ${device.mobileLg} {
    &.single-slide {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      margin: 0;
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
      content: "";
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
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      &.work-exp {
        &:hover {
          pointer-events: none;
        }
        &::after {
          opacity: 1;
        }
      }
      &.skills {
        background: ${colors.sectionBg};
        padding: 50px 0;
      }
    }
  }
  @media ${device.mobileLg} {
    &.work-exp {
      &:hover {
        pointer-events: none;
      }
      &::after {
        opacity: 1;
      }
    }
    &.skills {
      background: ${colors.sectionBg};
      padding: 30px 0;
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
    text-align: start;
    justify-content: start;
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
  &.about {
    padding: 0;
  }
  @media ${media.strict.tablet} {
    a {
      margin-bottom: 40px;
    }
    &.bar-skills {
      padding: 0;
      align-items: center;
    }
  }
  @media ${device.mobileLg} {
    &.skills-icons {
      justify-content: unset;
      width: auto;
      a {
        margin-bottom: 40px;
      }
    }
    &.bar-skills {
      padding: 0;
      align-items: center;
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
    font-family: "Karla";
    &.work-exp::before {
      content: "•";
      color: ${colors.white};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      font-size: 35px;
    }
  }
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      width: 100%;
      max-width: 500px;
    }
  }
  @media ${device.mobileLg} {
    width: 100%;
    max-width: 300px;
    padding-left: 30px;
    &.default {
      justify-content: space-evenly;
    }
    li {
      font-size: 14px;
      &.work-exp::before {
        font-size: 30px;
      }
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
    transform: translate(0, -5px);
    z-index: 1;
    &::after {
      opacity: 1;
    }
    .skill-title {
      color: ${colors.white};
    }
  }
  &::after {
    border-radius: 0.9375em;
    content: "";
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
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
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
      &:hover {
        pointer-events: none;
      }
    }
  }
  @media ${device.mobileLg} {
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
    &:hover {
      pointer-events: none;
    }
  }
`;

export const Grid = {
  Container: GridContainer,
  Card: GridCard,
  CardContent: GridCardContent,
  CardList: GridCardList,
  CardIcon: GridCardIcon,
};

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

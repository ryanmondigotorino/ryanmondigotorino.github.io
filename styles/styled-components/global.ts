import styled from "styled-components";
import colors from "styles/colors";
import { NavigationAnimation } from "styles/styled-components/animations";

const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  font-size: 24px;
  color: ${colors.white};
  font-family: "Prompt";
  font-weight: 400;
  letter-spacing: 1.08px;
  &.hero {
    font-size: 72px;
    text-transform: uppercase;
    letter-spacing: 2.4px;
  }
  &.heading {
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 2.4px;
  }
  &.skill-title {
    font-size: 16px;
    letter-spacing: 0;
    color: ${colors.iconBaseColor};
    transition: 300ms;
  }
`;

const TextSubTitle = styled.p`
  height: 20px;
  color: ${colors.gray[500]};
  font-weight: 400;
  font-size: 17px;
  line-height: 16px;
  &.hero {
    text-transform: uppercase;
    letter-spacing: 1.2px;
    &:nth-child(1) {
      animation: ${NavigationAnimation} 1.7s ease-in;
    }
    &:nth-child(2) {
      animation: ${NavigationAnimation} 1.8s ease-in;
    }
    &:nth-child(3) {
      animation: ${NavigationAnimation} 1.9s ease-in;
    }
    &:nth-child(4) {
      animation: ${NavigationAnimation} 2s ease-in;
    }
  }
  &.label {
    font-size: 24px;
  }
  &.ground {
    text-transform: uppercase;
    letter-spacing: 1.3px;
  }
  &.light {
    color: ${colors.white};
    a {
      color: ${colors.white};
    }
  }
  &.dark {
    color: ${colors.grayTeal[500]};
  }
  &.about-description {
    line-height: 30px;
    letter-spacing: 0.5px;
    height: max-content;
    text-align: justify;
  }
`;

export const Text = {
  Title: TextTitle,
  SubTitle: TextSubTitle,
};

const ImageProfile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 99999px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 20px;
`;

const AboutImage = styled.img`
  width: 450px;
  height: 550px;
  border-radius: 20px;
`;

export const Image = {
  Profile: ImageProfile,
  Project: ProjectImage,
  About: AboutImage,
};

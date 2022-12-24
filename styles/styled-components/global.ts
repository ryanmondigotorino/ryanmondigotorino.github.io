import styled from "styled-components";
import colors from "styles/colors";
import { device, media } from "styles/devices";
import {
  NavigationAnimation,
  caretAnimation,
} from "styles/styled-components/animations";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      &.convertible {
        flex-direction: column;
      }
    }
  }
  @media ${device.mobileLg} {
    &.convertible {
      flex-direction: column;
    }
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
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      &.heading {
        margin-bottom: 50px;
      }
    }
  }
  @media ${device.mobileLg} {
    font-size: 18px;
    &.hero {
      font-size: 36px;
    }
    &.heading {
      font-size: 24px;
      margin-bottom: 50px;
    }
  }
  @media ${device.mobileXs} {
    &.hero {
      font-size: 30px;
    }
  }
`;

const TextSubTitle = styled.p`
  height: max-content;
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
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      &.about-description {
        text-align: start;
      }
    }
  }
  @media ${device.mobileLg} {
    font-size: 14px;
    &.label {
      font-size: 18px;
      line-height: 30px;
    }
    &.about-description {
      text-align: start;
    }
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

interface AboutProps {
  image: string;
}

const AboutImage = styled.div<AboutProps>`
  width: 450px;
  height: 550px;
  border-radius: 20px;
  background-image: url(${({ image }) => image || ""});
  background-position: center;
  background-size: cover;
  @media ${media.strict.tablet} {
    @media ${media.portrait} {
      margin-bottom: 50px;
    }
  }
  @media ${device.mobileLg} {
    width: 300px;
    height: 350px;
    margin-bottom: 50px;
  }
`;

export const Image = {
  Profile: ImageProfile,
  Project: ProjectImage,
  About: AboutImage,
};

export const Caret = styled.span`
  animation: ${caretAnimation} 800ms ease-out infinite;
`;

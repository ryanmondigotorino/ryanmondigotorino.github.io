/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-plusplus */
import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Projects from "components/Sections/Projects";
import Skills from "components/Sections/Skills";
import Footer from "components/Sections/Footer";
import WorkExperience from "components/Sections/WorkExperience";
import {
  Wrapper,
  Section,
  Navigation,
  Grid,
} from "styles/styled-components/pages/home.styled";
import MovingText from "components/MovingText";
import { media } from "styles/devices";
import { Direction, Text, Image } from "styles/styled-components/global";
import { redirect, SECTIONS, useMedia } from "utils";
import clsx from "clsx";

import { getAnimatorVariant } from "utils/animatorVariants";
import type { Variants } from "framer-motion";
import Animator from "components/Animator";

const Home: NextPage = () => {
  const isPhone = useMedia(media.strict.phone);
  const isTablet = useMedia(media.strict.tablet);
  const isPortrait = useMedia(media.portrait);

  return (
    <Wrapper>
      <Section.Container id="hero" className="hero container">
        <Direction.Row className="w-100 h-100 justify-content-center align-items-center">
          <Direction.Col className="align-items-center w-660">
            <Image.Profile src="/static/thors.jpeg" className="mb-50" />
            <Text.SubTitle className="hero">Software Engineer</Text.SubTitle>
            <MovingText />
            <Navigation.Skills className="w-100">
              {SECTIONS?.filter((val) => val !== "hero").map((section) => (
                <Text.SubTitle
                  key={section}
                  className="clickable hero"
                  onClick={() => redirect(section)}
                >
                  {section}
                </Text.SubTitle>
              ))}
            </Navigation.Skills>
          </Direction.Col>
        </Direction.Row>
      </Section.Container>
      <Animator variants={getAnimatorVariant(1) as Variants}>
        <WorkExperience />
      </Animator>
      <Skills />
      <Animator variants={getAnimatorVariant(1) as Variants}>
        <Projects />
      </Animator>
      <Animator variants={getAnimatorVariant(1) as Variants}>
        <Section.Container id="about" className="about">
          <Direction.Col className="container h-100 p-0">
            <Direction.Col className="h-100 justify-content-center">
              <Direction.Row className="convertible">
                <Direction.Row
                  className={clsx("justify-content-center", {
                    "d-none": !isPhone && !(isTablet && isPortrait),
                  })}
                >
                  <Text.Title className="heading">About</Text.Title>
                </Direction.Row>
                <Direction.Row className="flex-1">
                  <Grid.CardContent className="about justify-content-center align-items-center">
                    <Image.About image="/static/thors-talk.jpg" />
                  </Grid.CardContent>
                </Direction.Row>
                <Direction.Row className="flex-1">
                  <Grid.CardContent className="about justify-content-center">
                    <Text.Title
                      className={clsx("heading mb-30", {
                        "d-none": isPhone || (isTablet && isPortrait),
                      })}
                    >
                      About
                    </Text.Title>
                    <Text.SubTitle className="light about-description h-max-content">
                      Hello! I&apos;m Ryan M. Torino. I graduated from FEU
                      Institute of Technology, last August 2019. I&apos;m now
                      working full-time software engineer at August 99 Inc under
                      the Oqulo division.
                    </Text.SubTitle>
                    <Text.SubTitle className="light about-description h-max-content mt-20">
                      A brief summary of my character. I'm an outgoing
                      individual. I enjoy socializing with my classmates,
                      colleagues, and friends. In my spare time, I enjoy playing
                      musical instruments and honing my web programming
                      abilities by creating personal projects with frameworks
                      such as Laravel and Next.Js.
                    </Text.SubTitle>
                    <Text.SubTitle className="light about-description h-max-content mt-20">
                      If you were interested to get in touch with me, you are
                      free to email me at{" "}
                      <Link passHref href="mailto:ryanmondigotorino@gmail.com">
                        <a href="replace" className="text-underline">
                          ryanmondigotorino@gmail.com
                        </a>
                      </Link>
                      . I Hope we can get along and have a good day 😊
                    </Text.SubTitle>
                  </Grid.CardContent>
                </Direction.Row>
              </Direction.Row>
            </Direction.Col>
          </Direction.Col>
        </Section.Container>
      </Animator>
      <Footer />
    </Wrapper>
  );
};

export default Home;

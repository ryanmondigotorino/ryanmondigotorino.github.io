/* eslint-disable no-plusplus */
import React from "react";
import Head from "next/head";
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
import { media } from "styles/devices";
import { Direction, Text, Image } from "styles/styled-components/global";
import { redirect, SECTIONS, useMedia } from "utils";
import clsx from "clsx";

const { APP_NAME } = process.env;
const { APP_URL } = process.env;
const { DEVELOPER_NAME } = process.env;
const { APP_DESCRIPTION } = process.env;

let ITERATOR = 0;
const TYPE_SPEED = 100;

const Home: NextPage = () => {
  const isPhone = useMedia(media.strict.phone);
  const isTablet = useMedia(media.strict.tablet);
  const isPortrait = useMedia(media.portrait);
  const [isNotSsr, setIsNotSsr] = React.useState(false);

  const typeWriter = React.useCallback(() => {
    const textSubtitle = document.getElementById(
      "hero-text"
    ) as HTMLHeadElement;
    if (
      DEVELOPER_NAME &&
      textSubtitle.innerHTML.length < DEVELOPER_NAME.length
    ) {
      if (ITERATOR < DEVELOPER_NAME.length) {
        textSubtitle.innerHTML += DEVELOPER_NAME.charAt(ITERATOR);
        ITERATOR++;
        setTimeout(typeWriter, TYPE_SPEED);
      }
    }
  }, []);

  React.useEffect(() => {
    typeWriter();
  }, [typeWriter]);

  React.useEffect(() => setIsNotSsr(true), []);

  return (
    <Wrapper>
      <Head>
        <title>{`${APP_NAME} | Home`}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="og:title" content={`${APP_NAME} | Home`} />
        <meta name="og:description" content={APP_DESCRIPTION} />
        <meta name="og:url" content={APP_URL} />
        <meta name="og:image" content={`${APP_URL}/static/thors.jpeg`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={APP_URL} />
      </Head>

      <Section.Container id="hero" className="hero container">
        <Direction.Row className="w-100 h-100 justify-content-center align-items-center">
          <Direction.Col className="align-items-center w-800">
            <Image.Profile src="/static/thors.jpeg" className="mb-50" />
            <Text.SubTitle className="hero">Software Engineer</Text.SubTitle>
            <Text.Title id="hero-text" className="hero" />
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
      <WorkExperience />
      <Skills isNotSsr={isNotSsr} />
      <Projects />
      <Section.Container id="about" className="about">
        <Direction.Col className="container h-100 p-0">
          <Direction.Col className="h-100 justify-content-center">
            {isNotSsr && (
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
                    <Image.About
                      src="/static/thors-speaker.jpg"
                      alt="my-photo"
                    />
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
                      the Oqulo division. I&apos;ve been working with them for
                      almost 4 years, that includes my internship last September
                      2018 up until March 2019, and I was hired full-time
                      employee last August 2019.
                    </Text.SubTitle>
                    <Text.SubTitle className="light about-description h-max-content mt-20">
                      Quick personality about myself. I consider myself an
                      extroverted person. I like going out with my peers,
                      friends, or colleagues. I play musical instruments in my
                      past time and practice my skills in web development by
                      making personal projects using various frameworks like,
                      Laravel and Next.Js. If you were interested to get in
                      touch with me, you are free to email me at{" "}
                      <Link passHref href="mailto:ryanmondigotorino@gmail.com">
                        <a href="replace" className="text-underline">
                          ryanmondigotorino@gmail.com
                        </a>
                      </Link>
                      . Hope we can get along and have a good day 😊
                    </Text.SubTitle>
                  </Grid.CardContent>
                </Direction.Row>
              </Direction.Row>
            )}
          </Direction.Col>
        </Direction.Col>
      </Section.Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;

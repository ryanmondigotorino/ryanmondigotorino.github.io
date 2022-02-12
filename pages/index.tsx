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
import { Direction, Text, Image } from "styles/styled-components/global";
import { redirect, SECTIONS } from "utils";

const { APP_NAME, APP_URL, DEVELOPER_NAME, APP_DESCRIPTION } = process.env;

let ITERATOR = 0;
const TYPE_SPEED = 100;

const Home: NextPage = () => {
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
      <Skills />
      <Projects />
      <Section.Container id="about" className="about">
        <Direction.Col className="container h-100">
          <Direction.Col className="h-100">
            <Grid.Container className="h-100 m-0">
              <Grid.Card>
                <Grid.CardContent className="about justify-content-center align-items-center">
                  <Image.About src="/static/thors-speaker.jpg" alt="my-photo" />
                </Grid.CardContent>
              </Grid.Card>
              <Grid.Card>
                <Grid.CardContent className="about justify-content-center">
                  <Text.Title className="heading mb-30">About</Text.Title>
                  <Text.SubTitle className="light about-description h-max-content">
                    Hello! I&apos;m Ryan M. Torino. I graduated from FEU
                    Institute of Technology, last August 2019. I&apos;m now
                    working full-time software engineer at August 99 Inc under
                    the Oqulo division. I&apos;ve been working with them for
                    almost 4 years, that includes my internship last September
                    2018 up until March 2019, and I was hired full-time employee
                    last August 2019.
                  </Text.SubTitle>
                  <Text.SubTitle className="light about-description h-max-content mt-20">
                    Quick personality about myself. I consider myself an
                    extroverted person. I like going out with my peers, friends,
                    or colleagues. I play musical instruments in my past time
                    and practice my skills in web development by making personal
                    projects. If you were interested to get in touch with me,
                    feel free to navigate the contact form on this website or
                    email me at{" "}
                    <Link passHref href="mailto:ryanmondigotorino@gmail.com">
                      <a href="replace" className="text-underline">
                        ryanmondigotorino@gmail.com
                      </a>
                    </Link>
                    . Hope we can get along and have a good day 😊
                  </Text.SubTitle>
                </Grid.CardContent>
              </Grid.Card>
            </Grid.Container>
          </Direction.Col>
        </Direction.Col>
      </Section.Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;

import React from 'react';
import Head from 'next/head';
import type { SEO } from 'interfaces';
import { Wrapper, Section, Navigation, Grid } from 'styles/styled-components/pages/home.styled';
import { Direction, Text, Image } from 'styles/styled-components/global';
import { Navigation as NavApp } from 'styles/styled-components/components/app.styled';
import { redirect, workExperienceDataSets } from 'utils';

type Props = { seo: SEO };
const NAME = process.env.DEVELOPER_NAME;
const APP_NAME = process.env.APP_NAME;
const APP_URL = process.env.APP_URL;

let ITERATOR = 0;
const TYPE_SPEED = 100;

const Home = ({ seo }: Props) => {
  const typeWriter = React.useCallback(() => {
    const textSubtitle = document.getElementById('hero-text') as HTMLHeadElement;
    if (NAME && textSubtitle.innerHTML.length < NAME.length) {
      if (ITERATOR < NAME.length) {
        textSubtitle.innerHTML += NAME.charAt(ITERATOR);
        ITERATOR++;
        setTimeout(typeWriter, TYPE_SPEED);
      }
    }
  }, []);

  React.useEffect(() => {
    typeWriter()
  }, [typeWriter]);

  return (
    <Wrapper>
      <Head>
        <title>{`${APP_NAME} | Home`}</title>
        <meta name="description" content="Ryan M. Torino | Software Engineer 1 - Hello I'm Ryan but you may call me thors. Welcome to my portfolio. Let's get connected and keep in touch for future opportunities" />
        <meta name="og:image" content={`${APP_URL}/static/thors.jpeg`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section.Container id="hero" className="hero container">
        <Direction.Row className="w-100 h-100 justify-content-center align-items-center">
          <Direction.Col className="align-items-center w-800">
            <Image.Profile src="/static/thors.jpeg" className="mb-50" />
            <Text.SubTitle className="hero">Software Engineer</Text.SubTitle>
            <Text.Title id="hero-text" className="hero"></Text.Title>
            <Navigation.Skills className="w-100">
              <Text.SubTitle className="clickable hero" onClick={() => redirect('experience')}>Experience</Text.SubTitle>
              <Text.SubTitle className="clickable hero" onClick={() => redirect('skills')}>Skills</Text.SubTitle>
              <Text.SubTitle className="clickable hero" onClick={() => redirect('projects')}>Projects</Text.SubTitle>
              <Text.SubTitle className="clickable hero" onClick={() => redirect('about')}>About</Text.SubTitle>
            </Navigation.Skills>
          </Direction.Col>
        </Direction.Row>
      </Section.Container>
      <Section.Container id="experience" className="container">
        <Direction.Col className="h-100 align-items-center justify-content-between">
          <Direction.Col className="align-items-center">
            <Text.Title className="heading">Work Experience</Text.Title>
            <Grid.Container>
              {workExperienceDataSets.map((workExp) => (
                <Grid.Card key={workExp.id}>
                  <Grid.CardContent>
                    <Text.Title className="mb-10">{workExp.jobTitle}</Text.Title>
                    <Text.SubTitle className="label light mb-30">{workExp.company}</Text.SubTitle>
                    <Text.SubTitle className="ground light">{workExp.dateAttended}</Text.SubTitle>
                    <Grid.CardList>
                      {workExp.doings.map((doings) => (
                        <li key={doings.id}>{doings.description}</li>
                      ))}
                    </Grid.CardList>
                  </Grid.CardContent>
                </Grid.Card>
              ))}
            </Grid.Container>
          </Direction.Col>
          <Direction.Row className="navigation-experience">
            <NavApp.Button type="button" className="active" />
          </Direction.Row>
        </Direction.Col>
      </Section.Container>
      <Section.Container id="skills">
        <Direction.Row className="w-100 h-100 justify-content-center">
          <Text.Title className="heading">Skills</Text.Title>
        </Direction.Row>
      </Section.Container>
      <Section.Container id="projects">
        <Direction.Row className="w-100 h-100 justify-content-center">
          <Text.Title className="heading">Projects</Text.Title>
        </Direction.Row>
      </Section.Container>
      <Section.Container id="about">
        <Direction.Row className="w-100 h-100 justify-content-center">
          <Text.Title className="heading">About</Text.Title>
        </Direction.Row>
      </Section.Container>
    </Wrapper>
  );
};

export default Home;


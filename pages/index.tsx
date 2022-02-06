import React from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import clsx from 'clsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import type { SkillsDataProps, ProjectDataProps } from 'interfaces';
import Link from 'next/link';
import { Wrapper, Section, Navigation, Grid, Bar, Project } from 'styles/styled-components/pages/home.styled';
import { Direction, Text, Image } from 'styles/styled-components/global';
import { Navigation as NavApp, Footer } from 'styles/styled-components/components/app.styled';
import { redirect, workExperienceDataSets, skillsDataSets, arrayPagination, projectDataSets } from 'utils';

const NAME = process.env.DEVELOPER_NAME;
const APP_NAME = process.env.APP_NAME;
const APP_URL = process.env.APP_URL;

let ITERATOR = 0;
const TYPE_SPEED = 100;

const modifiedSkillsDataSet: Array<Array<SkillsDataProps>> = arrayPagination(
    skillsDataSets
    .sort((a, b) => Number(a.order) - Number(b.order))
    .slice()
    .splice(0, skillsDataSets.length)
  , 2);

const modifiedProjectDataSet: Array<Array<ProjectDataProps>> = arrayPagination(
  projectDataSets
  .sort((a, b) => Number(b.id) - Number(a.id))
  .slice()
  .splice(0, projectDataSets.length)
  , 3);

const Home = () => {
  const [activeProject, setActiveProject] = React.useState<number>(0);
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
        <meta name="description" content="Ryan M. Torino | Software Engineer 1 - Hello, I'm Ryan but you may call me thors. Welcome to my portfolio. Let's get connected and keep in touch for future opportunities." />
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
      <Section.Container id="experience" className="container w-navigation">
        <Direction.Col className="h-100 align-items-center justify-content-between">
          <Direction.Col className="align-items-center">
            <Text.Title className="heading">Work Experience</Text.Title>
            <Grid.Container>
              {workExperienceDataSets.map((workExp) => (
                <Grid.Card key={workExp.id} className="work-exp">
                  <Grid.CardContent className="work-exp">
                    <Text.Title className="mb-10">{workExp.jobTitle}</Text.Title>
                    <Text.SubTitle className="label light mb-30">{workExp.company}</Text.SubTitle>
                    <Text.SubTitle className="ground light">{workExp.dateAttended}</Text.SubTitle>
                    <Grid.CardList>
                      {workExp.doings.map((doings) => (
                        <li key={doings.id} className="work-exp">{doings.description}</li>
                      ))}
                    </Grid.CardList>
                  </Grid.CardContent>
                </Grid.Card>
              ))}
            </Grid.Container>
          </Direction.Col>
          <Direction.Row>
            <NavApp.Button type="button" className="active" />
          </Direction.Row>
        </Direction.Col>
      </Section.Container>
      <Section.Container id="skills" className="skills">
        <Direction.Col className="container h-100">
          <Text.Title className="heading">Skills</Text.Title>
          <Grid.Container className="h-100">
            <Grid.Card>
              <Grid.CardContent>
                <Grid.CardList className="default h-100">
                  {skillsDataSets.sort((a, b) => Number(a.id) - Number(b.id)).map((val) => (
                    <li key={val.id}>
                      <Text.SubTitle className="light">{val.label}</Text.SubTitle>
                      <Bar width={val.percentage}>
                        <div className="fill" />
                      </Bar>
                    </li>
                  ))}
                </Grid.CardList>
              </Grid.CardContent>
            </Grid.Card>
            <Grid.Card>
              <Grid.CardContent className="skills-icons">
                {modifiedSkillsDataSet?.map((baseDataSet, key) => (
                  <Direction.Col key={key} className={clsx({ 'justify-content-end': key === 1 })}>
                    {baseDataSet?.map((value) => (
                      <Link key={value.id} passHref href={value.url}>
                        <a href="replace" target="_blank">
                          <Grid.CardIcon>
                            {value.icon}
                            <Text.Title className="skill-title">{value.label}</Text.Title>
                          </Grid.CardIcon>
                        </a>
                      </Link>
                    ))}
                  </Direction.Col>
                ))}
              </Grid.CardContent>
            </Grid.Card>
          </Grid.Container>
        </Direction.Col>
      </Section.Container>
      <Section.Container id="projects" className="container w-navigation">
        <Direction.Col className="h-100 align-items-center justify-content-between">
          <Direction.Col className="h-100 align-items-center">
            <Text.Title className="heading">Projects</Text.Title>
            <Carousel
              emulateTouch
              infiniteLoop
              interval={1000 * 60 * 60}
              transitionTime={200}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              selectedItem={activeProject}
              onChange={(index) => setActiveProject(index)}
            >
              {modifiedProjectDataSet.map((projectData, key) => (
                <Grid.Container key={key} className="h-100 projects">
                  {projectData.map((data) => (
                    <Link key={data.id} passHref href={data.url}>
                      <a href="replace" target="_blank">
                        <Grid.Card>
                          <Project.Image src={data.image} alt="projects"/>
                        </Grid.Card>
                      </a>
                    </Link>
                  ))}
                </Grid.Container>
              ))}
            </Carousel>
          </Direction.Col>
          <Direction.Row>
            {modifiedProjectDataSet.map((_, key) => (
              <NavApp.Button
                key={key}
                type="button"
                className={clsx('projects', { active: activeProject === key })}
                onClick={() => setActiveProject(key)}
              />
            ))}
          </Direction.Row>
        </Direction.Col>
      </Section.Container>
      <Section.Container id="about" className="about">
        <Direction.Row className="w-100 h-100 justify-content-center">
          <Text.Title className="heading">About</Text.Title>
        </Direction.Row>
      </Section.Container>
      <Footer.Wrapper>
        <Footer.Body>
          <Text.SubTitle className="light ground">
            Copyright &copy; Ryan M. Torino {format(new Date(), 'yyyy')}
          </Text.SubTitle>
        </Footer.Body>
        </Footer.Wrapper>
    </Wrapper>
  );
};

export default Home;


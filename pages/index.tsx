import React from 'react';
import type { GetServerSideProps } from 'next';
import type { SEO } from 'interfaces';
import NextSeo from 'components/Utilities/Next-seo';
import { Wrapper, Section, Navigation } from 'styles/styled-components/pages/home.styled';
import { Direction, Text, Image } from 'styles/styled-components/global';
import { redirect } from 'utils';

type Props = { seo: SEO };
const NAME = process.env.DEVELOPER_NAME;
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
      <NextSeo seo={seo} />
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
        <Direction.Row className="w-100 h-100 justify-content-center">
          <Text.Title className="heading">Work Experience</Text.Title>
        </Direction.Row>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const props: Props = {
    seo: {
      mainseo: { title: `${process.env.APP_NAME} | Home` },
    },
  };

  return { props };
};


export default Home;


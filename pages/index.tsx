import type { GetServerSideProps } from 'next';
import type { SEO } from 'interfaces';
import NextSeo from 'components/Utilities/Next-seo';
import { Wrapper, Section, Navigation } from 'styles/styled-components/pages/home.styled';
import { Direction, Text, Image } from 'styles/styled-components/global';
import { redirect } from 'utils';

type Props = { seo: SEO };

const Home = ({ seo }: Props) => {
  return (
    <Wrapper>
      <NextSeo seo={seo} />
      <Section.Container className="hero container">
        <Direction.Row className="w-100 h-100 justify-content-center align-items-center">
          <Direction.Col className="align-items-center">
            <Image.Profile src="/static/thors.jpeg" className="mb-50" />
            <Text.SubTitle className="hero">Software Engineer</Text.SubTitle>
            <Text.Title className="hero">Ryan Torino</Text.Title>
            <Navigation.Skills className="w-100">
              <Text.SubTitle className="clickable text-transform-uppercase" onClick={() => redirect('experience')}>Experience</Text.SubTitle>
              <Text.SubTitle className="clickable text-transform-uppercase" onClick={() => redirect('skills')}>Skills</Text.SubTitle>
              <Text.SubTitle className="clickable text-transform-uppercase" onClick={() => redirect('projects')}>Projects</Text.SubTitle>
              <Text.SubTitle className="clickable text-transform-uppercase" onClick={() => redirect('about')}>About</Text.SubTitle>
            </Navigation.Skills>
          </Direction.Col>
        </Direction.Row>
      </Section.Container>
      <Section.Container id="experience"></Section.Container>
      <Section.Container id="skills"></Section.Container>
      <Section.Container id="projects"></Section.Container>
      <Section.Container id="about"></Section.Container>
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


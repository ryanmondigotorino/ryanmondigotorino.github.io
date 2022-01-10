import type { GetServerSideProps } from 'next';
import type { SEO } from 'interfaces';
import NextSeo from 'components/Utilities/Next-seo';
import { Wrapper, Section } from 'styles/styled-components/pages';

type Props = { seo: SEO };

const Home = ({ seo }: Props) => {
  return (
    <Wrapper>
      <NextSeo seo={seo} />
      <Section.Hero></Section.Hero>
      <Section.Hero></Section.Hero>
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


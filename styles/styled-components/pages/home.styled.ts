import styled from 'styled-components';


export const Wrapper = styled.main`
  width: 100%;
`;

const SectionContainer = styled.section`
  width: 100%;
  height: calc(100vh + 90px);
  &.hero {
    height: calc(100vh - 70px);
  }
`;

export const Section = {
  Container: SectionContainer,
};

const NavigationSkills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
  margin-top: 70px;
`;

export const Navigation = {
  Skills: NavigationSkills,
}
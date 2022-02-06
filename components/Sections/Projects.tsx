import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import clsx from 'clsx';
import { ProjectDataProps } from 'interfaces';
import { arrayPagination, projectDataSets } from 'utils';
import { Section, Grid, Project } from 'styles/styled-components/pages/home.styled';
import { Direction, Text } from 'styles/styled-components/global';
import { Navigation } from 'styles/styled-components/components/app.styled';

const modifiedProjectDataSet: Array<Array<ProjectDataProps>> = arrayPagination(
  projectDataSets
  .sort((a: { id: number }, b: { id: number }) => Number(b.id) - Number(a.id))
  .slice()
  .splice(0, projectDataSets.length)
  , 3);

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState<number>(0);
  return (
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
            <Navigation.Button
              key={key}
              type="button"
              className={clsx('projects', { active: activeProject === key })}
              onClick={() => setActiveProject(key)}
            />
          ))}
        </Direction.Row>
      </Direction.Col>
    </Section.Container>
  );
};

export default Projects;
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import clsx from "clsx";
import { ProjectDataProps } from "interfaces";
import { arrayPagination, projectDataSets, useMedia } from "utils";
import { media } from "styles/devices";
import { Section, Grid } from "styles/styled-components/pages/home.styled";
import { Direction, Text, Image } from "styles/styled-components/global";
import { Navigation } from "styles/styled-components/components/app.styled";

const Projects: React.FC = () => {
  const isPhone = useMedia(media.strict.phone);
  const isTablet = useMedia(media.strict.tablet);
  const isPortrait = useMedia(media.portrait);
  const [activeProject, setActiveProject] = React.useState<number>(0);
  const [modifiedProjectDataSet, setModifiedProjectDataSet] =
    React.useState<Array<Array<ProjectDataProps>>>();

  React.useEffect(() => {
    const pageSize = !isPhone ? (isTablet && isPortrait ? 2 : 3) : 1;
    const data: Array<Array<ProjectDataProps>> = arrayPagination(
      projectDataSets
        .sort(
          (a: { id: number }, b: { id: number }) => Number(b.id) - Number(a.id)
        )
        .slice()
        .splice(0, projectDataSets.length),
      pageSize
    );
    setModifiedProjectDataSet(data);
  }, [isPhone, isTablet, isPortrait]);

  return (
    <Section.Container
      id="projects"
      className="container w-navigation projects"
    >
      {modifiedProjectDataSet && (
        <Direction.Col className="h-100 align-items-center justify-content-between">
          <Direction.Col className="h-100 align-items-center">
            <Text.Title className="heading">Projects</Text.Title>
            <Carousel
              emulateTouch
              infiniteLoop
              interval={1000 * 60 * 60}
              transitionTime={200}
              swipeable={!isPhone}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              selectedItem={activeProject}
              onChange={(index) => setActiveProject(index)}
            >
              {modifiedProjectDataSet.map((projectData, key) => (
                <Grid.Container
                  key={key}
                  className="h-100 projects single-slide single-slide__projects"
                >
                  {projectData.map((data) => (
                    <Link key={data.id} passHref href={data.url}>
                      <a href="replace" target="_blank">
                        <Grid.Card>
                          <Image.Project src={data.image} alt="projects" />
                        </Grid.Card>
                        <Section.ProjectDetails className="project-details">
                          <Text.Title className="label mb-10">
                            {data.name}
                          </Text.Title>
                          <Text.SubTitle className="light about-description h-max-content text-start">
                            {data.tech}
                          </Text.SubTitle>
                        </Section.ProjectDetails>
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
                className={clsx("projects", { active: activeProject === key })}
                onClick={() => setActiveProject(key)}
              />
            ))}
          </Direction.Row>
        </Direction.Col>
      )}
    </Section.Container>
  );
};

export default Projects;

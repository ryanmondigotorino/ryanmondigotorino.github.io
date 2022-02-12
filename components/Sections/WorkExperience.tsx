/* eslint-disable react/no-array-index-key */
import React from "react";
import clsx from "clsx";
import { Carousel } from "react-responsive-carousel";
import { Navigation as NavApp } from "styles/styled-components/components/app.styled";
import { Section, Grid } from "styles/styled-components/pages/home.styled";
import { Direction, Text } from "styles/styled-components/global";
import { workExperienceDataSets, arrayPagination } from "utils";
import type { WorkExpDataProps } from "interfaces";

const modifiedExpDataSet: Array<Array<WorkExpDataProps>> = arrayPagination(
  workExperienceDataSets
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice()
    .splice(0, workExperienceDataSets.length),
  2
);

const WorkExperience: React.FC = () => {
  const [activeExperience, setActiveExperience] = React.useState<number>(0);

  return (
    <Section.Container id="experience" className="container w-navigation">
      <Direction.Col className="h-100 align-items-center justify-content-between">
        <Direction.Col className="align-items-center">
          <Text.Title className="heading">Work Experience</Text.Title>
          <Carousel
            emulateTouch
            infiniteLoop
            interval={1000 * 60 * 60}
            transitionTime={200}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            selectedItem={activeExperience}
            onChange={(index) => setActiveExperience(index)}
          >
            {modifiedExpDataSet.map((workExp, key) => (
              <Grid.Container key={key} className="work-exp">
                {workExp.map((data) => (
                  <Grid.Card key={data.id} className="work-exp">
                    <Grid.CardContent className="work-exp">
                      <Text.Title className="mb-10">{data.jobTitle}</Text.Title>
                      <Text.SubTitle className="label light mb-30">
                        {data.company}
                      </Text.SubTitle>
                      <Text.SubTitle className="ground light">
                        {data.dateAttended}
                      </Text.SubTitle>
                      <Grid.CardList>
                        {data.doings.map((doings) => (
                          <li key={doings.id} className="work-exp">
                            {doings.description}
                          </li>
                        ))}
                      </Grid.CardList>
                    </Grid.CardContent>
                  </Grid.Card>
                ))}
              </Grid.Container>
            ))}
          </Carousel>
        </Direction.Col>
        <Direction.Row>
          {modifiedExpDataSet.map((_, key) => (
            <NavApp.Button
              key={key}
              type="button"
              className={clsx({ active: activeExperience === key })}
              onClick={() => setActiveExperience(key)}
            />
          ))}
        </Direction.Row>
      </Direction.Col>
    </Section.Container>
  );
};

export default WorkExperience;

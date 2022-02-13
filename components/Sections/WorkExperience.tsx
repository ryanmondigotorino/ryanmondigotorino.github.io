/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from "react";
import clsx from "clsx";
import { Carousel } from "react-responsive-carousel";
import { Navigation as NavApp } from "styles/styled-components/components/app.styled";
import { Section, Grid } from "styles/styled-components/pages/home.styled";
import { Direction, Text } from "styles/styled-components/global";
import { media } from "styles/devices";
import { workExperienceDataSets, arrayPagination, useMedia } from "utils";
import type { WorkExpDataProps } from "interfaces";

const WorkExperience: React.FC = () => {
  const isPhone = useMedia(media.strict.phone);
  const isTablet = useMedia(media.strict.tablet);
  const isPortrait = useMedia(media.portrait);

  const [activeExperience, setActiveExperience] = React.useState<number>(0);
  const [modifiedExpDataSet, setModifiedExpDataSet] =
    React.useState<Array<Array<WorkExpDataProps>>>();

  React.useEffect(() => {
    const pageSize = !isPhone ? (isTablet && isPortrait ? 1 : 2) : 1;
    const data: Array<Array<WorkExpDataProps>> = arrayPagination(
      workExperienceDataSets
        .sort((a, b) => Number(b.id) - Number(a.id))
        .slice()
        .splice(0, workExperienceDataSets.length),
      pageSize
    );

    setModifiedExpDataSet(data);
  }, [isPhone, isTablet, isPortrait]);

  return (
    <Section.Container
      id="experience"
      className="container w-navigation work-exp"
    >
      <Direction.Col className="h-100 align-items-center justify-content-between">
        <Direction.Col className="align-items-center">
          <Text.Title className="heading">Work Experience</Text.Title>
          {modifiedExpDataSet && (
            <Carousel
              emulateTouch
              infiniteLoop
              swipeable={!isPhone}
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
                <Grid.Container key={key} className="single-slide">
                  {workExp.map((data) => (
                    <Grid.Card key={data.id} className="work-exp">
                      <Grid.CardContent className="work-exp">
                        <Text.Title className="mb-10">
                          {data.jobTitle}
                        </Text.Title>
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
          )}
        </Direction.Col>
        <Direction.Row>
          {modifiedExpDataSet?.map((_, key) => (
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

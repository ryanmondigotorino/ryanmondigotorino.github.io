/* eslint-disable react/no-array-index-key */
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { Section, Grid, Bar } from "styles/styled-components/pages/home.styled";
import { Direction, Text } from "styles/styled-components/global";
import { Navigation } from "styles/styled-components/components/app.styled";
import type { SkillsDataProps } from "interfaces";
import { media } from "styles/devices";
import { skillsDataSets, arrayPagination, useMedia } from "utils";

const Skills: React.FC = () => {
  const isPhone = useMedia(media.strict.phone);
  const isTablet = useMedia(media.strict.tablet);
  const isPortrait = useMedia(media.portrait);
  const [activeSection, setActiveSection] = React.useState(0);

  const [modifiedSkillsDataSet, setModifiedSkillsDataSet] =
    React.useState<Array<Array<SkillsDataProps>>>();

  React.useEffect(() => {
    const pageSize = !isPhone && !(isTablet && isPortrait) ? 2 : 3;
    const data: Array<Array<SkillsDataProps>> = arrayPagination(
      skillsDataSets
        .sort((a, b) => Number(a.order) - Number(b.order))
        .slice()
        .splice(0, skillsDataSets.length),
      pageSize
    );

    setModifiedSkillsDataSet(data);
  }, [isPhone, isTablet, isPortrait]);

  if (isPhone || (isTablet && isPortrait)) {
    return (
      <Section.Container id="skills" className="w-navigation skills">
        <Direction.Col className="align-items-center justify-content-between h-100">
          {modifiedSkillsDataSet && (
            <Carousel
              emulateTouch
              infiniteLoop
              interval={1000 * 60 * 60}
              transitionTime={200}
              showThumbs={false}
              swipeable={!isPhone}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              selectedItem={activeSection}
              onChange={(index) => setActiveSection(index)}
            >
              {[...Array(2)]?.map((_, key) => (
                <Grid.Container key={key} className="single-slide h-100">
                  {key === 0 ? (
                    <Grid.Card className="justify-content-center skills">
                      <Direction.Col className="w-100">
                        <Text.Title className="heading">Skills</Text.Title>
                        <Grid.CardContent className="bar-skills h-100">
                          <Grid.CardList className="default h-100">
                            {skillsDataSets
                              .sort((a, b) => Number(a.id) - Number(b.id))
                              .map((val) => (
                                <li key={val.id}>
                                  <Text.SubTitle className="light text-start">
                                    {val.label}
                                  </Text.SubTitle>
                                  <Bar width={val.percentage}>
                                    <div className="fill" />
                                  </Bar>
                                </li>
                              ))}
                          </Grid.CardList>
                        </Grid.CardContent>
                      </Direction.Col>
                    </Grid.Card>
                  ) : (
                    <Direction.Col className="h-100 align-items-center">
                      <Grid.CardContent className="skills-icons">
                        {modifiedSkillsDataSet?.map((baseDataSet, keyData) => (
                          <Direction.Col
                            key={keyData}
                            className={clsx({
                              "ml-20": key === 1,
                            })}
                          >
                            {baseDataSet?.map((value) => (
                              <Link key={value.id} passHref href={value.url}>
                                <a href="replace" target="_blank">
                                  <Grid.CardIcon>
                                    {value.icon}
                                    <Text.Title className="skill-title">
                                      {value.label}
                                    </Text.Title>
                                  </Grid.CardIcon>
                                </a>
                              </Link>
                            ))}
                          </Direction.Col>
                        ))}
                      </Grid.CardContent>
                    </Direction.Col>
                  )}
                </Grid.Container>
              ))}
            </Carousel>
          )}
          <Direction.Row>
            {[...Array(2)]?.map((_, key) => (
              <Navigation.Button
                key={key}
                type="button"
                className={clsx({ active: activeSection === key })}
                onClick={() => setActiveSection(key)}
              />
            ))}
          </Direction.Row>
        </Direction.Col>
      </Section.Container>
    );
  }

  return (
    <Section.Container id="skills" className="skills w-navigation">
      <Direction.Col className="container h-100">
        <Direction.Col className="h-100">
          <Text.Title className="heading">Skills</Text.Title>
          <Grid.Container className="h-100">
            <Grid.Card>
              <Grid.CardContent>
                <Grid.CardList className="default h-100">
                  {skillsDataSets
                    .sort((a, b) => Number(a.id) - Number(b.id))
                    .map((val) => (
                      <li key={val.id}>
                        <Text.SubTitle className="light">
                          {val.label}
                        </Text.SubTitle>
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
                  <Direction.Col
                    key={key}
                    className={clsx({ "justify-content-end": key === 1 })}
                  >
                    {baseDataSet?.map((value) => (
                      <Link key={value.id} passHref href={value.url}>
                        <a href="replace" target="_blank">
                          <Grid.CardIcon>
                            {value.icon}
                            <Text.Title className="skill-title">
                              {value.label}
                            </Text.Title>
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
        <Direction.Row className="justify-content-center mt-50 d-none">
          <Navigation.Button type="button" className="active" />
        </Direction.Row>
      </Direction.Col>
    </Section.Container>
  );
};

export default Skills;

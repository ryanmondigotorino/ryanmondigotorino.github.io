/* eslint-disable react/no-array-index-key */
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Section, Grid, Bar } from "styles/styled-components/pages/home.styled";
import { Direction, Text } from "styles/styled-components/global";
import { Navigation } from "styles/styled-components/components/app.styled";
import type { SkillsDataProps } from "interfaces";
import { skillsDataSets, arrayPagination } from "utils";

const modifiedSkillsDataSet: Array<Array<SkillsDataProps>> = arrayPagination(
  skillsDataSets
    .sort((a, b) => Number(a.order) - Number(b.order))
    .slice()
    .splice(0, skillsDataSets.length),
  2
);

const Skills: React.FC = () => {
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

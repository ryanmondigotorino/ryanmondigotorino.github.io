/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import {
  SkillsDataProps,
  ProjectDataProps,
  WorkExpDataProps,
} from "interfaces";
import { ReactComponent as IconGraphQL } from "styles/assets/skills/icon-graphql.svg";
import { ReactComponent as IconLaravel } from "styles/assets/skills/icon-laravel.svg";
import { ReactComponent as IconReact } from "styles/assets/skills/icon-react.svg";
import { ReactComponent as IconPrisma } from "styles/assets/skills/icon-prisma.svg";
import { ReactComponent as IconNodeJs } from "styles/assets/skills/icon-nodejs.svg";
import { ReactComponent as IconVue } from "styles/assets/skills/icon-vue.svg";

export const redirect = (id: string) => {
  const layoutElement = document.getElementById(id) as HTMLElement;
  layoutElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

export const arrayPagination = (arr: Array<any>, size: number) => {
  const paginated: Array<Array<any>> = arr.reduce((acc: any, val, i) => {
    const idx = Math.floor(i / size) as any;
    const page: any[] = acc[idx] || (acc[idx] = []);
    page.push(val);

    return acc;
  }, []);

  return paginated;
};

export const skillsDataSets: Array<SkillsDataProps> = [
  {
    id: 0,
    label: "React JS",
    percentage: "95%",
    icon: <IconReact className="icon icon-skills icon-react" />,
    order: 3,
    url: "https://reactjs.org",
  },
  {
    id: 1,
    label: "Laravel",
    percentage: "90%",
    icon: <IconLaravel className="icon icon-skills icon-laravel" />,
    order: 1,
    url: "https://laravel.com",
  },
  {
    id: 2,
    label: "Node js",
    percentage: "90%",
    icon: <IconNodeJs className="icon icon-skills icon-nodejs" />,
    order: 5,
    url: "https://nodejs.org/en/docs",
  },
  {
    id: 3,
    label: "Prisma",
    percentage: "85%",
    icon: <IconPrisma className="icon icon-skills icon-prisma" />,
    order: 4,
    url: "https://www.prisma.io",
  },
  {
    id: 4,
    label: "GraphQL",
    percentage: "80%",
    icon: <IconGraphQL className="icon icon-skills icon-graphql" />,
    order: 0,
    url: "https://graphql.org",
  },
  {
    id: 5,
    label: "Vue Js",
    percentage: "80%",
    icon: <IconVue className="icon icon-skills icon-vue" />,
    order: 6,
    url: "https://vuejs.org",
  },
];

export const projectDataSets: Array<ProjectDataProps> = [
  {
    id: 0,
    url: "https://iorthotics.com",
    image: "/static/projects/iorthotics.jpg",
    name: "iOrthotics PTY LTD",
    tech: "Laravel | MySql",
  },
  {
    id: 1,
    url: "https://real.ph",
    image: "/static/projects/real.jpg",
    name: "Real PH",
    tech: "Laravel | MySql",
  },
  {
    id: 2,
    url: "https://coworkerhq.com",
    image: "/static/projects/coworkerhq.jpg",
    name: "Coworker HQ",
    tech: "React Next JS | Rest API Nest JS | PostgreSql",
  },
  {
    id: 3,
    url: "https://qtimesoftware.com",
    image: "/static/projects/qtime.jpg",
    name: "QTime Software",
    tech: "Laravel | Vue JS | PostgreSql",
  },
  {
    id: 4,
    url: "https://eats.ph",
    image: "/static/projects/eats.jpg",
    name: "Eats PH",
    tech: "React Next JS | Rest API Nest JS | PostgreSql",
  },
  {
    id: 5,
    url: "https://www.qspaceapp.com/",
    image: "/static/projects/qspace-app.jpg",
    name: "QSpace APP",
    tech: "Vue JS | Express JS | PostgreSql",
  },
  {
    id: 6,
    url: "https://access.com",
    image: "/static/projects/access.jpg",
    name: "Access",
    tech: "React Next JS | TypeScript | GraphQL | Prisma Node JS | PostgreSql",
  },
  {
    id: 7,
    url: "https://suite.real.ph",
    image: "/static/projects/suite-real.jpg",
    name: "Suite Real.PH",
    tech: "React Next JS | TypeScript | GraphQL | Prisma Node JS | PostgreSql",
  },
  {
    id: 8,
    url: "https://builder.real.ph",
    image: "/static/projects/builder-real.png",
    name: "Real.ph Web Builder",
    tech: "React Next JS | TypeScript | GraphQL | TailwindCSS | Prisma Node JS | PostgreSql",
  },
];

export const workExperienceDataSets: Array<WorkExpDataProps> = [
  {
    id: 0,
    jobTitle: "Web Developer Intern",
    company: "August 99 Inc | (TDP - Dojo)",
    dateAttended: "September 2018 - March 2019 (1040H)",
    doings: [
      {
        id: 0,
        description:
          "Turn design PSD/XD templates into a full working softwares.",
      },
      {
        id: 1,
        description:
          "Work for front-end and back-end development for our clients software.",
      },
      {
        id: 2,
        description:
          "Collaborate with Product managers, Quality Assurance, Designers, and Co Developers.",
      },
    ],
  },
  {
    id: 1,
    jobTitle: "Software Engineer I",
    company: "August 99 Inc | Oqulo",
    dateAttended: "August 2019 - Febuary 2022",
    doings: [
      {
        id: 0,
        description: "Convert UI/UX Design into a web page.",
      },
      {
        id: 1,
        description: "Constructing API routes and backend services",
      },
      {
        id: 2,
        description:
          "Attending Scrum sessions, Sprint planning, and Retrospective.",
      },
      {
        id: 3,
        description: "Participate in Design Refinements.",
      },
      {
        id: 4,
        description: "Participate in ERD Planning and project setup.",
      },
    ],
  },
  {
    id: 2,
    jobTitle: "Software Engineer III",
    company: "August 99 Inc | Oqulo",
    dateAttended: "Febuary 2022 - Present",
    doings: [
      {
        id: 0,
        description: "Convert UI/UX Design into a web page.",
      },
      {
        id: 1,
        description: "Constructing API routes and backend services",
      },
      {
        id: 2,
        description: "Conduct training for new developers and interns.",
      },
      {
        id: 3,
        description: "Attending Scrum sessions",
      },
      {
        id: 4,
        description: "Leading Sprint planning, or Retrospective.",
      },
      {
        id: 5,
        description: "Participating in Design Refinements.",
      },
      {
        id: 6,
        description: "Leading ERD Planning and project setup.",
      },
    ],
  },
];

export const SECTIONS = ["hero", "experience", "skills", "projects", "about"];

export const isBrowser = typeof window !== "undefined";

export const useMedia = (query: string, defaultState = false) => {
  const [state, setState] = React.useState(
    isBrowser ? () => window.matchMedia(query).matches : defaultState
  );

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    if ("addListener" in mql) {
      mql.addListener(onChange);
    }

    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
    }

    setState(mql.matches);

    return () => {
      mounted = false;

      if ("addListener" in mql) {
        mql.removeListener(onChange);
      }

      if ("addEventListener" in mql) {
        mql.removeEventListener("change", onChange);
      }
    };
  }, [query]);

  return state;
};

const Utilities = () => <></>;
export default Utilities;

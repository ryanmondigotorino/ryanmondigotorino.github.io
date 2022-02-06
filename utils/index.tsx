import { SkillsDataProps, ProjectDataProps } from 'interfaces';
import { ReactComponent as IconGraphQL } from 'styles/assets/skills/icon-graphql.svg';
import { ReactComponent as IconLaravel } from 'styles/assets/skills/icon-laravel.svg';
import { ReactComponent as IconReact } from 'styles/assets/skills/icon-react.svg';
import { ReactComponent as IconPrisma } from 'styles/assets/skills/icon-prisma.svg';
import { ReactComponent as IconNodeJs } from 'styles/assets/skills/icon-nodejs.svg';
import { ReactComponent as IconVue } from 'styles/assets/skills/icon-vue.svg';

export const redirect = (id: string) => {
  const layoutElement = document.getElementById(id) as HTMLElement;
  layoutElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
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
    label: 'React JS',
    percentage: '95%',
    icon: <IconReact className="icon icon-skills icon-react" />,
    order: 3,
    url: 'https://reactjs.org',
  },
  {
    id: 1,
    label: 'Laravel',
    percentage: '90%',
    icon: <IconLaravel className="icon icon-skills icon-laravel" />,
    order: 1,
    url: 'https://laravel.com',
  },
  {
    id: 2,
    label: 'Node js',
    percentage: '90%',
    icon: <IconNodeJs className="icon icon-skills icon-nodejs" />,
    order: 5,
    url: 'https://nodejs.org/en/docs'
  },
  {
    id: 3,
    label: 'Prisma',
    percentage: '85%',
    icon: <IconPrisma className="icon icon-skills icon-prisma" />,
    order: 4,
    url: 'https://www.prisma.io',
  },
  {
    id: 4,
    label: 'GraphQL',
    percentage: '80%',
    icon: <IconGraphQL className="icon icon-skills icon-graphql" />,
    order: 0,
    url: 'https://graphql.org',
  },
  {
    id: 5,
    label: 'Vue Js',
    percentage: '80%',
    icon: <IconVue className="icon icon-skills icon-vue" />,
    order: 6,
    url: 'https://vuejs.org',
  },
];

export const projectDataSets: Array<ProjectDataProps> = [
  {
    id: 0,
    url: 'https://iorthotics.com',
    image: '/static/projects/iorthotics.jpg',
  },
  {
    id: 1,
    url: 'https://real.ph',
    image: '/static/projects/real.jpg',
  },
  {
    id: 2,
    url: 'https://coworkerhq.com',
    image: '/static/projects/coworkerhq.jpg',
  },
  {
    id: 3,
    url: 'https://qtimesoftware.com',
    image: '/static/projects/qtime.jpg',
  },
  {
    id: 4,
    url: 'https://eats.ph',
    image: '/static/projects/eats.jpg',
  },
  {
    id: 5,
    url: 'https://access.com',
    image: '/static/projects/access.jpg',
  },
];

export const workExperienceDataSets = [
  {
    id: 0,
    jobTitle: 'Software Engineer',
    company: 'August 99 Inc | Oqulo',
    dateAttended: 'August 13, 2019 - Present',
    doings: [
      {
        id: 0,
        description: 'Convert UI/UX Design into a web page.',
      },
      {
        id: 1,
        description: 'Conduct training for new developers and interns.',
      },
      {
        id: 2,
        description: 'Attending Scrum sessions, Sprint planning, and Retrospective.',
      },
      {
        id: 3,
        description: 'Participate in Design Refinements.',
      },
      {
        id: 4,
        description: 'Participate in ERD Planning and project setup.',
      },
    ]
  },
  {
    id: 1,
    jobTitle: 'Web Developer Intern',
    company: 'August 99 Inc | (TDP - Dojo)',
    dateAttended: 'September 06, 2018 - March 28, 2019 (1040H)',
    doings: [
      {
        id: 0,
        description: 'Turn design PSD/XD templates into a full working softwares.',
      },
      {
        id: 1,
        description: 'Work for front-end and back-end development for our clients software.',
      },
      {
        id: 2,
        description: 'Collaborate with Product managers, Quality Assurance, Designers, and Co Developers.',
      },
    ]
  },
];

const Utilities = () => <></>;
export default Utilities;
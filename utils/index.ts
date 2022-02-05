
export const redirect = (id: string) => {
  const layoutElement = document.getElementById(id) as HTMLElement;
  layoutElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
};

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
    company: 'August 99 Inc | TDP',
    dateAttended: 'September 06, 2018 - March 28, 2019',
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
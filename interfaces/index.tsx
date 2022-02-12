export type SEO = {
  seo?: { name: string; content: string }[];
  mainseo?: {
    title?: string;
    description?: string;
  };
};

export type SkillsDataProps = {
  id: number;
  label: string;
  percentage: string;
  icon: React.ReactElement;
  order: number;
  url: string;
};

export type ProjectDataProps = {
  id: number;
  url: string;
  image: string;
};

type WorkDoings = {
  id: number;
  description: string;
};

export type WorkExpDataProps = {
  id: number;
  jobTitle: string;
  company: string;
  dateAttended: string;
  doings: Array<WorkDoings>;
};

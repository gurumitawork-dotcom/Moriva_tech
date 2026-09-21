export type WorkItem = {
  id: string;
  name: string;
  category: string;
  gradient: string;
};

export const work: WorkItem[] = [
  {
    id: "project-one",
    name: "Project One",
    category: "Fintech · Platform",
    gradient: "linear-gradient(155deg, #0E2A5C 0%, #1C6FD8 130%)",
  },
  {
    id: "project-two",
    name: "Project Two",
    category: "Healthcare · Web App",
    gradient: "linear-gradient(155deg, #123566 0%, #3E9AE8 130%)",
  },
  {
    id: "project-three",
    name: "Project Three",
    category: "Logistics · SaaS",
    gradient: "linear-gradient(155deg, #0B2347 0%, #F5921E 130%)",
  },
  {
    id: "project-four",
    name: "Project Four",
    category: "Retail · Mobile",
    gradient: "linear-gradient(155deg, #A85E10 0%, #F5921E 130%)",
  },
];

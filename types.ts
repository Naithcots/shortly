export type Card = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type LinkCategory = {
  id: number;
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

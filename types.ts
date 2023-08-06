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

export type LinkType = {
  originUrl: string;
  shortUrl: string;
};

export type ShrtcoResponse = {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
};

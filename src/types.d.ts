type TItems = string[];

interface Irole {
  content: string;
  items: TItems;
}

interface Irequirments {
  content: string;
  items: TItems;
}

interface IJobs {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Irequirements;
  role: Irole;
}

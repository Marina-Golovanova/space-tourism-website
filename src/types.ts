export type IMenuItem = "home" | "destination" | "crew" | "technology";

export type IMenu = IMenuItem[];

export type IDestination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type ICrew = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export type ITechnology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export type IData = {
  destinations: IDestination[];
  crews: ICrew[];
  technologies: ITechnology[];
};

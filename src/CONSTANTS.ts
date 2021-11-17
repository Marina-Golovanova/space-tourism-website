import { IMenuItem } from "./types";

export const MENU_ITEMS_ALL: IMenuItem[] = [
  "home",
  "destination",
  "crew",
  "technology",
];

export const PATH_NAMES: Record<IMenuItem, string> = {
  home: "/home",
  destination: "/destination",
  crew: "/crew",
  technology: "/technology",
};

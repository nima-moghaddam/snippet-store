import { Category } from "../constants/Category";

export interface ILink {
  title: string;
  link: string;
  category: Category;
}

export interface ILinkModel {
  [Category.WebTools]: ILink[];
  [Category.Blogs]: ILink[];
  [Category.Templates]: ILink[];
}

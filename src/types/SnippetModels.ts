import { Category } from "../constants/Category";
import { Tags } from "../constants/Tags";

export interface ISnippet {
  title: string;
  description?: string;
  tags: Tags[];
  code: string;
  category: Category;
  type?: string;
  link?: string;
}

export interface ISnippetModel {
  [Category.ReactHooks]: ISnippet[];
  [Category.ReactQuery]: ISnippet[];
  [Category.SweetAlert2]: ISnippet[];
  [Category.Regex]: ISnippet[];
  [Category.Utils]: ISnippet[];
}

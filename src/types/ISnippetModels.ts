import { Category } from "../constants/Category"

export interface ISnippet {
  title: string
  description: string
  tags: string[]
  code: string
  category: Category
}

export interface ISnippetList {
  [Category.ReactHooks]: ISnippet[]
  [Category.ReactQuery]: ISnippet[]
  [Category.SweetAlert2]: ISnippet[]
  [Category.Regex]: ISnippet[]
  [Category.Utils]: ISnippet[]
}

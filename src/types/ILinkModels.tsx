import { Category } from "../constants/Category"

export interface ILinkModel {
  [Category.WebTools]: ILink[]
  [Category.Blogs]: ILink[]
}

export interface ILink {
  title: string
  link: string
}

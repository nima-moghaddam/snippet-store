import { Category } from "../constants/Category"
import { ILink, ILinkModel } from "../types/ILinkModels"
import { ISnippet, ISnippetModel } from "../types/ISnippetModels"
import { WebTools } from "./Links/Web-Tools"
import { ReactHooks } from "./Snippets/React-Hooks"
import { ReactQuery } from "./Snippets/React-Query"
import { Regex } from "./Snippets/Regex"
import { SweetAlert2 } from "./Snippets/Sweet-Alert2"
import { Utils } from "./Snippets/Utils"

// ----------------Snippets---------------

const Snippets: ISnippetModel = {
  [Category.ReactQuery]: ReactQuery,
  [Category.SweetAlert2]: SweetAlert2,
  [Category.Utils]: Utils,
  [Category.ReactHooks]: ReactHooks,
  [Category.Regex]: Regex
}

let SnippetList: ISnippet[] = []
Object.entries(Snippets).map(([_, value]) => {
  value.map((i: ISnippet) => SnippetList.push(i))
})

// ----------------Links----------------

const Links: ILinkModel = {
  [Category.WebTools]: WebTools,
  [Category.Blogs]: []
}

let LinkList: ILink[] = []
Object.entries(Links).map(([_, value]) => {
  value.map((i: ILink) => LinkList.push(i))
})

export { Snippets, SnippetList, Links, LinkList }

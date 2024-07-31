import { Category } from "../constants/Category"
import { ISnippet, ISnippetModel } from "../types/ISnippetModels"
import { ReactHooks } from "./React-Hooks"
import { ReactQuery } from "./React-Query"
import { Regex } from "./Regex"
import { SweetAlert2 } from "./Sweet-Alert2"
import { Utils } from "./Utils"

export const Snippets: ISnippetModel = {
  [Category.Regex]: Regex,
  [Category.ReactQuery]: ReactQuery,
  [Category.SweetAlert2]: SweetAlert2,
  [Category.Utils]: Utils,
  [Category.ReactHooks]: ReactHooks
}

export let SnippetList: ISnippet[] = []
Object.entries(Snippets).map(([_, value]) => {
  value.map((i: ISnippet) => SnippetList.push(i))
})

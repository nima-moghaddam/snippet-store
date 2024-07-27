import { Category } from "../constants/Category"
import { ISnippetList } from "../types/ISnippetModels"
import { ReactHooks } from "./React-Hooks"
import { ReactQuery } from "./React-Query"
import { Regex } from "./Regex"
import { SweetAlert2 } from "./Sweet-Alert2"
import { Utils } from "./Utils"

export const Snippets: ISnippetList = {
  [Category.Regex]: Regex,
  [Category.ReactQuery]: ReactQuery,
  [Category.SweetAlert2]: SweetAlert2,
  [Category.Utils]: Utils,
  [Category.ReactHooks]: ReactHooks
}

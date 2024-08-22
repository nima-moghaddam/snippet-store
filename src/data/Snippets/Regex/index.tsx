import { Category } from "../../../constants/Category"
import { Tags } from "../../../constants/tags"

export const Regex = [
  {
    title: "Email regex",
    tags: [Tags.Regex],
    category: Category.Regex,
    description: "",
    code: ` /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
  },
  {
    title: "National phone Regex",
    tags: [Tags.Regex],
    category: Category.Regex,
    description: "",
    code: ` /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/`
  }
]

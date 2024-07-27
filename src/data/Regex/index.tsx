import { Category } from "../../constants/Category"
import { Tags } from "../../constants/Tags"

export const Regex = [
  {
    title: "Email regex",
    tags: [Tags.Regex],
    category: Category.Regex,
    description: "",
    code: `email: yup
        .string()
        .required("ایمیل را وارد کنید")
        .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       )`
  }
]

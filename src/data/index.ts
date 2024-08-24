import { Category } from "../constants/Category";
import { ILink, ILinkModel } from "../types/LinkModels";
import { ISnippet, ISnippetModel } from "../types/SnippetModels";
import { Blogs } from "./Links/Blogs";
import { Templates } from "./Links/Templates";
import { WebTools } from "./Links/Web-Tools";
import { Formik } from "./Snippets/Formik";
import { NextJs } from "./Snippets/Nextjs";
import { ReactHooks } from "./Snippets/React-Hooks";
import { ReactQuery } from "./Snippets/React-Query";
import { Redux } from "./Snippets/Redux";
import { Regex } from "./Snippets/Regex";
import { SweetAlert2 } from "./Snippets/Sweet-Alert2";
import { Utils } from "./Snippets/Utils";

// ----------------Snippets---------------

const Snippets: ISnippetModel = {
  [Category.ReactQuery]: ReactQuery,
  [Category.ReactHooks]: ReactHooks,
  [Category.NextJs]: NextJs,
  [Category.Redux]: Redux,
  [Category.SweetAlert2]: SweetAlert2,
  [Category.Formik]: Formik,
  [Category.Utils]: Utils,
  [Category.Regex]: Regex,
};

let SnippetList: ISnippet[] = [];
Object.entries(Snippets).map(([_, value]) => {
  value.map((i: ISnippet) => SnippetList.push(i));
});

// ----------------Links----------------

const Links: ILinkModel = {
  [Category.WebTools]: WebTools,
  [Category.Blogs]: Blogs,
  [Category.Templates]: Templates,
};

let LinkList: ILink[] = [];
Object.entries(Links).map(([_, value]) => {
  value.map((i: ILink) => LinkList.push(i));
});

export { Snippets, SnippetList, Links, LinkList };

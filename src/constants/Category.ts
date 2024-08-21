export enum Category {
  // snippets
  ReactHooks = "React Hook",
  ReactQuery = "React Query",
  SweetAlert2 = "Sweet Alert2",
  Regex = "Regex",
  Utils = "Utils",

  // links
  WebTools = "Web Tools",
  Blogs = "Blogs",
  Templates = "Templates",
}

export enum SnippetCategory {
  ReactHooks = "React Hook",
  ReactQuery = "React Query",
  SweetAlert2 = "Sweet Alert2",
  Regex = "Regex",
  Utils = "Utils",
}

export enum LinksCategory {
  WebTools = "Web Tools",
  Blogs = "Blogs",
  Templates = "Templates",
}

export type CategoryType = Category | SnippetCategory | LinksCategory;

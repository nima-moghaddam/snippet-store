import { create } from "zustand"
import { Category } from "../constants/Category"
import { Tags } from "../constants/Tags"
import { LinkList, SnippetList } from "../data"
import { ISnippet } from "../types/SnippetModels"
import { SearchByStatusType } from "../types/SearchByModels"
import {  RouteEnum } from "../types/RouteModels"
import { ILink } from "../types/LinkModels"

interface IStoreState {
  snippets: ISnippet[]
  links: ILink[]
  setMenuFilter: (category: Category) => void
  setSubMenuFilter: (name: string, route: RouteEnum) => void
  setTagFilter: (tag: Tags) => void
  setSearchFilter: (term: string, searchBy: SearchByStatusType) => void
  resetFilters: () => void
}

const useFilterStore = create<IStoreState>((set, get) => ({
  snippets: SnippetList,
  links: LinkList,
  setMenuFilter: (category) => {
    const filteredSnippets = SnippetList?.filter((i) => i.category === category)
    set(() => ({
      snippets: filteredSnippets
    }))
  },
  setSubMenuFilter: (name, route) => {
    if (route === RouteEnum.Snippet) {
      const filteredSnippets = SnippetList?.filter((i) => i.title === name)
      set((state) => ({ ...state, snippets: filteredSnippets }))
    } else {
      const filteredLinks = LinkList?.filter((i) => i.title === name)
      set((state) => ({ ...state, links: filteredLinks }))
    }
  },
  setTagFilter: (tag) => {
    const filteredSnippets = SnippetList?.filter((snippet) => {
      const snippetHasTag = snippet.tags.some((i) => i === tag)
      if (snippetHasTag) return snippet
    })
    set(() => ({
      snippets: filteredSnippets
    }))
  },
  setSearchFilter: (term, searchBy) => {
    let filteredSnippets: ISnippet[]
    if (searchBy === "title") {
      filteredSnippets = SnippetList?.filter((i) => i.title.trim().toLocaleLowerCase().includes(term))
    } else filteredSnippets = SnippetList?.filter((i) => i.code.trim().toLocaleLowerCase().includes(term))
    set(() => ({
      snippets: filteredSnippets
    }))
  },
  resetFilters: () => set(() => ({ snippets: SnippetList }))
}))

export default useFilterStore

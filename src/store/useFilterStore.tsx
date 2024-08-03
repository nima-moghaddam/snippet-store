import { create } from "zustand"
import { Category } from "../constants/Category"
import { Tags } from "../constants/Tags"
import { SnippetList } from "../data"
import { ISnippet } from "../types/ISnippetModels"
import { SearchByStatusType } from "../types/SearchByStatusType"

interface IStoreState {
  snippets: ISnippet[]
  setMenuFilter: (category: Category) => void
  setSubMenuFilter: (name: string) => void
  setTagFilter: (tag: Tags) => void
  setSearchFilter: (term: string, searchBy: SearchByStatusType) => void
  resetFilters: () => void
}

const useFilterStore = create<IStoreState>((set, get) => ({
  snippets: SnippetList,
  setMenuFilter: (category) => {
    const filteredSnippets = SnippetList?.filter((i) => i.category === category)
    set(() => ({
      snippets: filteredSnippets
    }))
  },
  setSubMenuFilter: (name) => {
    const filteredSnippets = SnippetList?.filter((i) => i.title === name)
    set(() => ({
      snippets: filteredSnippets
    }))
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

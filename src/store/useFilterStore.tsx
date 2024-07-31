import { create } from "zustand"
import { Category } from "../constants/Category"
import { Tags } from "../constants/Tags"
import { SnippetList } from "../data"
import { ISnippet } from "../types/ISnippetModels"

interface IStoreState {
  snippets: ISnippet[]
  setMenuFilter: (category: Category) => void
  setSubMenuFilter: (name: string) => void
  setTagFilter: (tag: Tags) => void
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
  }
}))

export default useFilterStore

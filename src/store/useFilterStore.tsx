import { create } from "zustand"
import { Category } from "../constants/Category"
import { Snippets } from "../data"
import { ISnippet } from "../types/ISnippetModels"

interface IStoreState {
  snippets: ISnippet[]
  setMenuFilter: (category: Category) => void
  setSubMenuFilter: (name: string) => void
}

let allSnippets: ISnippet[] = []
Object.entries(Snippets).map(([_, value]) => {
  value.map((i: ISnippet) => allSnippets.push(i))
})

const useFilterStore = create<IStoreState>((set, get) => ({
  snippets: allSnippets,
  setMenuFilter: (category) => {
    const filteredSnippets = allSnippets?.filter((i) => i.category === category)
    set(() => ({
      snippets: filteredSnippets
    }))
  },
  setSubMenuFilter: (name) => {
    const filteredSnippets = allSnippets?.filter((i) => i.title === name)
    set(() => ({
      snippets: filteredSnippets
    }))
  }
}))

export default useFilterStore

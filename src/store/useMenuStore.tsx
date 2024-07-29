import { create } from "zustand"
import { Category } from "../constants/Category"

interface IStoreState {
  activeMenu: null | Category
  activeSubMenu: null | string
  setActiveMenu: (category: Category) => void
  setActiveSubMenu: (name: string) => void
  resetMenu: () => void
}

const useMenuStore = create<IStoreState>((set) => ({
  activeMenu: null,
  activeSubMenu: null,
  setActiveMenu: (category) => set((state) => ({ ...state, activeMenu: category })),
  setActiveSubMenu: (name) => set((state) => ({ ...state, activeSubMenu: name })),
  resetMenu: () => set(() => ({ activeMenu: null, activeSubMenu: null }))
}))

export default useMenuStore

import { create } from "zustand"
import { Category } from "../constants/Category"

interface IStoreState {
  activeMenu: null | Category
  setActiveMenu: (category: Category) => void
  resetMenu: () => void
}

const useMenuStore = create<IStoreState>((set) => ({
  activeMenu: null,
  setActiveMenu: (category) => set((state) => ({ ...state, activeMenu: category })),
  resetMenu: () => set(() => ({ activeMenu: null }))
}))

export default useMenuStore

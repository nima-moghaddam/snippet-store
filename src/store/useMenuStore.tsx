import { create } from "zustand"
import { Category } from "../constants/Category"

interface IStoreState {
  activeMenu: null | Category
  setActiveMenu: (category: Category) => void
}

const useMenuStore = create<IStoreState>((set) => ({
  activeMenu: null,
  setActiveMenu: (category) => set(() => ({ activeMenu: category }))
}))

export default useMenuStore

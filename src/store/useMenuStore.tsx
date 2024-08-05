import { create } from "zustand"
import { Category } from "../constants/Category"

interface IStoreState {
  activeMenu: null | Category
  showSidebar: boolean
  setActiveMenu: (category: Category) => void
  resetMenu: () => void
  setHideSidebar: () => void
  setShowSidebar: () => void
}

const useMenuStore = create<IStoreState>((set) => ({
  activeMenu: null,
  showSidebar: true,
  setActiveMenu: (category) => set((state) => ({ ...state, activeMenu: category })),
  resetMenu: () => set((state) => ({ ...state, activeMenu: null })),
  setHideSidebar: () => set((state) => ({ ...state, showSidebar: false })),
  setShowSidebar: () => set((state) => ({ ...state, showSidebar: true }))
}))

export default useMenuStore

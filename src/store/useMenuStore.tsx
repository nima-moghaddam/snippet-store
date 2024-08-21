import { create } from "zustand";
import {  CategoryType } from "../constants/Category";

interface IStoreState {
  activeMenu: null | CategoryType;
  showSidebar: boolean;
  setActiveMenu: (category: CategoryType) => void;
  resetMenu: () => void;
  setHideSidebar: () => void;
  setShowSidebar: () => void;
  toggleMenu: () => void;
}

const useMenuStore = create<IStoreState>((set) => ({
  activeMenu: null,
  showSidebar: false,
  setActiveMenu: (category) =>
    set((state) => ({ ...state, activeMenu: category })),
  resetMenu: () => set((state) => ({ ...state, activeMenu: null })),
  setHideSidebar: () => set((state) => ({ ...state, showSidebar: false })),
  setShowSidebar: () => set((state) => ({ ...state, showSidebar: true })),
  toggleMenu: () =>
    set((state) => ({ ...state, showSidebar: !state.showSidebar })),
}));

export default useMenuStore;

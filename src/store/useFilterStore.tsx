import { create } from "zustand";
import { CategoryType } from "../constants/Category";
import { Tags } from "../constants/tags";
import { LinkList, SnippetList } from "../data";
import { ISnippet } from "../types/SnippetModels";
import { SearchByStatusType } from "../types/SearchByModels";
import { RouteEnum } from "../types/RouteModels";
import { ILink } from "../types/LinkModels";

interface IStoreState {
  snippets: ISnippet[];
  links: ILink[];
  term: string | null;
  tag: Tags | null;
  setMenuFilter: (category: CategoryType, route: RouteEnum) => void;
  setSubMenuFilter: (name: string, route: RouteEnum) => void;
  setTagFilter: (tag: Tags) => void;
  setSearchFilter: (term: string, searchBy: SearchByStatusType) => void;
  resetFilters: () => void;
}

const useFilterStore = create<IStoreState>((set) => ({
  snippets: SnippetList,
  links: LinkList,
  term: null,
  tag: null,
  setMenuFilter: (category, route) => {
    if (route === RouteEnum.Snippet) {
      const filteredSnippets = SnippetList?.filter(
        (i) => i.category === category,
      );
      set((state) => ({ ...state, snippets: filteredSnippets }));
    } else {
      const filteredLinks = LinkList?.filter((i) => i.category === category);
      set((state) => ({ ...state, links: filteredLinks }));
    }
  },
  setSubMenuFilter: (name, route) => {
    if (route === RouteEnum.Snippet) {
      const filteredSnippets = SnippetList?.filter((i) => i.title === name);
      set((state) => ({ ...state, snippets: filteredSnippets }));
    } else {
      const filteredLinks = LinkList?.filter((i) => i.title === name);
      set((state) => ({ ...state, links: filteredLinks }));
    }
  },
  setTagFilter: (tag) => {
    const filteredSnippets = SnippetList?.filter((snippet) => {
      const snippetHasTag = snippet.tags.some((i) => i === tag);
      if (snippetHasTag) return snippet;
    });
    set(() => ({
      snippets: filteredSnippets,
      tag,
    }));
  },
  setSearchFilter: (term, searchBy) => {
    let filteredSnippets: ISnippet[];
    if (searchBy === "title") {
      filteredSnippets = SnippetList?.filter((i) =>
        i.title.trim().toLocaleLowerCase().includes(term),
      );
    } else
      filteredSnippets = SnippetList?.filter((i) =>
        i.code.trim().toLocaleLowerCase().includes(term),
      );
    set(() => ({
      snippets: filteredSnippets,
      term,
    }));
  },
  resetFilters: () =>
    set(() => ({
      snippets: SnippetList,
      links: LinkList,
      tag: null,
      term: null,
    })),
}));

export default useFilterStore;

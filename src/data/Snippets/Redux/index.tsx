import { Category } from "../../../constants/Category";
import { Tags } from "../../../constants/tags";

export const Redux = [
  {
    title: "store",
    tags: [Tags.React, Tags.Redux],
    category: Category.Redux,
    link: "https://redux-toolkit.js.org/introduction/getting-started",
    code: `export const store = configureStore({
        reducer: {
             ...
        },
      }); \n export type IRootState = ReturnType<typeof store.getState>;`,
  },
  {
    title: "provider",
    tags: [Tags.React, Tags.Redux],
    category: Category.Redux,
    link: "https://redux-toolkit.js.org/introduction/getting-started",

    code: `const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
        return <Provider store={store}>{children}</Provider>;
      };`,
  },
  {
    title: "reducer",
    tags: [Tags.React, Tags.Redux],
    category: Category.Redux,
    link: "https://redux-toolkit.js.org/introduction/getting-started",

    code: `export const reducerSlice = createSlice({
        name: "",
        initialState,
        reducers: {},
      }); \n
      \nexport const {} = reducerSlice.actions;
      \nexport default reducerSlice.reducer;`,
  },
];

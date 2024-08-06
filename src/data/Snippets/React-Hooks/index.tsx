import { Category } from "../../../constants/Category"
import { Tags } from "../../../constants/Tags"

export const ReactHooks = [
  {
    title: "Outside alerter",
    tags: [Tags.React, Tags.ReactHook],
    category: Category.ReactHooks,
    description: "use this custom hook when u want to get user action out of some specific Ref's",
    code: `function useOutsideAlerter({ ref, handleOutsidClick }: HookType) {
        useEffect(() => {
          function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
              handleOutsidClick();
            }
          }
          document.addEventListener('mousedown', handleClickOutside);
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, [ref, useOutsideAlerter]);
      }`
  }
]

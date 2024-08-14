import { RefObject, useEffect } from "react";

interface Types {
  ref: RefObject<HTMLElement>;
  handleOutsidClick: () => void;
}

export function useOutsideAlerter({ ref, handleOutsidClick }: Types) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutsidClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, useOutsideAlerter]);
}

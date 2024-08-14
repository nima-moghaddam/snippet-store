import { Category } from "../../../constants/Category";
import { Tags } from "../../../constants/Tags";

export const SweetAlert2 = [
  {
    title: "Toast alert",
    tags: [Tags.React, Tags.SweetAlert2],
    category: Category.SweetAlert2,
    description: "",
    link: "https://sweetalert2.github.io/",
    code: `export const toastFire = (
          icon: "warning" | "error" | "success" | "info" | "question",
          title: string,
          timer: number = 1500
        ) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer)
              toast.addEventListener("mouseleave", Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: icon,
            title: title
          })
        }`,
  },
];

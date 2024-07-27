import Swal from "sweetalert2"

export const toastFire = (
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
}

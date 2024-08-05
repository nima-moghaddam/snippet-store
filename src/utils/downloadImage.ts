import { RefObject } from "react"
import html2canvas from "html2canvas"

export const downloadImage = async (format: "png" | "jpeg", ref: RefObject<HTMLDivElement>) => {
  if (!ref.current) return
  const canvas = await html2canvas(ref.current)
  const dataUrl = canvas.toDataURL(`image/${format}`)

  const link = document.createElement("a")
  link.href = dataUrl
  link.download = `snippet.${format}`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

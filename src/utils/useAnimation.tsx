import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const useAnimation = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [pathname])

  const animateClass = `transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`

  return { animateClass }
}

export default useAnimation

import { createContext, type PropsWithChildren, useState } from "react"

export interface SideBarContextProps {
  isOpen: boolean
  toogleSidebar: (isMobile: boolean) => void
}

export const SideBarContext = createContext({} as SideBarContextProps)

export function SideBarContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)

  const toogleSidebar = (isMobile = false) => {
    if (!isMobile) {
      setIsOpen((state) => !state)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <SideBarContext.Provider value={{ isOpen, toogleSidebar }}>
      {children}
    </SideBarContext.Provider>
  )
}

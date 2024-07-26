import { createContext, type PropsWithChildren, useState } from "react"

export interface SideBarContextProps {
  isOpen: boolean
  toogleSidebar: () => void
}

export const SideBarContext = createContext({} as SideBarContextProps)

export function SideBarContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)

  const toogleSidebar = () => {
    setIsOpen((state) => !state)
  }

  return (
    <SideBarContext.Provider value={{ isOpen, toogleSidebar }}>
      {children}
    </SideBarContext.Provider>
  )
}

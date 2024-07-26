import { useContext } from "react"
import { SideBarContext } from "./sidebar-context"

export const useSidebar = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error(
      "useSidebar deve ser utilizado dentro de um SideBarContextProvider",
    )
  }
  return context
}

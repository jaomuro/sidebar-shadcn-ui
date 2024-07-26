import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ThemeProvider } from "./context/theme-provider"
import { SideBarContextProvider } from "./context/sidebar-context"

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="aside-shadcn-ui-theme">
      <SideBarContextProvider>
        <RouterProvider router={router} />
      </SideBarContextProvider>
    </ThemeProvider>
  )
}

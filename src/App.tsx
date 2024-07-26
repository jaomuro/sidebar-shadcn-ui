import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ThemeProvider } from "./provider/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="aside-shadcn-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

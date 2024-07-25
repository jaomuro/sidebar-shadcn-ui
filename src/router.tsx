import { createBrowserRouter } from "react-router-dom"
import { HomeLayout } from "./pages/layouts/homeLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
])

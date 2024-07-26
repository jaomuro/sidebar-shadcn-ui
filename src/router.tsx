import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./pages/layouts/appLayout"
import { ContentLayout } from "./pages/layouts/contentLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ContentLayout />,
      },
    ],
  },
])

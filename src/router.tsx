import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./pages/layouts/appLayout"
import { ContentLayout } from "./pages/layouts/contentLayout"
import { Dashboard } from "./pages/dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ContentLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "*",
            element: <ContentLayout />,
          },
        ],
      },
    ],
  },
])

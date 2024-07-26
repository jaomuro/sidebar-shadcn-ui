import { Outlet } from "react-router-dom"

export function ContentLayout() {
  return (
    <div className="container pt-8 pb-8 px-4 sm:px-8">
      <Outlet />
    </div>
  )
}

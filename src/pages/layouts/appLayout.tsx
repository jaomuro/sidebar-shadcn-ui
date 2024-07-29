import { cn } from "@/lib/utils"
import { Outlet } from "react-router-dom"
import { useSidebar } from "@/context/use-sidebar"
import { SideBar } from "@/components/pages/sidebar"
import { Header } from "@/components/pages/header"

export function AppLayout() {
  const { isOpen } = useSidebar()

  return (
    <>
      <SideBar />
      <Header />
      <main
        className={cn(
          "min-h-[calc(100vh_-_64px)] transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
          "bg-accent/20",
        )}
      >
        <Outlet />
      </main>
    </>
  )
}

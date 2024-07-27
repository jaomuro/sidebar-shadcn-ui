import { useSidebar } from "@/context/use-sidebar"
import { SidebarToggle } from "./sidebarToogle"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { PanelsTopLeft } from "lucide-react"
import { Button } from "../ui/button"
import { Menu } from "./menu"

export function SideBar() {
  const { isOpen, toogleSidebar } = useSidebar()

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        isOpen === false ? "w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toogleSidebar} />

      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-foreground/10">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            isOpen === false ? "translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link to="/" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100",
              )}
            >
              Aside
            </h1>
          </Link>
        </Button>
        <Menu />
      </div>
    </aside>
  )
}

import { useSidebar } from "@/context/use-sidebar"
import { SheetMenu } from "./sheetMenu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../ui/theme-toogle"
import { useLocation } from "react-router-dom"
import { getPathInfo } from "@/lib/menu-list"

export function Header() {
  const { isOpen } = useSidebar()

  const { pathname } = useLocation()
  const title = getPathInfo(pathname)

  return (
    <header
      className={cn(
        "transition-[margin-left] ease-in-out duration-300",
        isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        "sticky top-0 z-10",
        "bg-background shadow  dark:shadow-secondary",
      )}
    >
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title.label}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  )
}

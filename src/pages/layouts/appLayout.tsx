import { cn } from "@/lib/utils"
import { PanelsTopLeft } from "lucide-react"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Header } from "../../components/ui/pages/header"
import { Button } from "@/components/ui/button"
import { SidebarToggle } from "@/components/ui/pages/sidebarToogle"

export function AppLayout() {
  const [asideIsOpen, setAsideIsOpen] = useState(false)

  const handleAsideMode = () => {
    setAsideIsOpen((state) => !state)
  }

  return (
    <>
      <aside
        className={cn(
          "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
          asideIsOpen === false ? "w-[90px]" : "w-72",
        )}
      >
        <SidebarToggle isOpen={asideIsOpen} setIsOpen={handleAsideMode} />

        <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-foreground/10">
          <Button
            className={cn(
              "transition-transform ease-in-out duration-300 mb-1",
              asideIsOpen === false ? "translate-x-1" : "translate-x-0",
            )}
            variant="link"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <PanelsTopLeft className="w-6 h-6 mr-1" />
              <h1
                className={cn(
                  "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                  asideIsOpen === false
                    ? "-translate-x-96 opacity-0 hidden"
                    : "translate-x-0 opacity-100",
                )}
              >
                Aside
              </h1>
            </Link>
          </Button>
          {/* <Menu isOpen={asideIsOpen} /> */}
          {/* #TODO refatorar para elimitar essa div, acesso do estado deverá ser feito por contexto */}
          {/* #TODO refatorar para haver um  menu aqui*/}
        </div>
      </aside>

      <div
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          asideIsOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
          "sticky top-0 z-10",
        )}
      >
        <Header />
        {/* #TODO refatorar para elimitar essa div, acesso do estado deverá ser feito por contexto */}
      </div>
      <main
        className={cn(
          "min-h-[calc(100vh_-_64px)] transition-[margin-left] ease-in-out duration-300",
          asideIsOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Outlet />
      </main>
    </>
  )
}

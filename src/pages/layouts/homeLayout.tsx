import { Footer } from "@/components/ui/pages/footer"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export function HomeLayout() {
  const [asideIsOpen, setAsideIsOpen] = useState(false)

  const handleAsideMode = () => {
    setAsideIsOpen((state) => !state)
  }

  return (
    <>
      <aside
        className={cn(
          "text-muted fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
          asideIsOpen === false ? "w-[90px]" : "w-72",
          "bg-foreground",
        )}
      >
        Aside
        <button
          type="button"
          onClick={() => handleAsideMode()}
          className="text-secondary"
        >
          {asideIsOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </aside>

      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-primary-foreground transition-[margin-left] ease-in-out duration-300",
          asideIsOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Outlet />
      </main>

      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300 bg-accent-foreground",
          asideIsOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Footer />
      </footer>
    </>
  )
}

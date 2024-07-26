import { ModeToggle } from "../theme-toogle"
import { SheetMenu } from "./sheetMenu"

export function Header() {
  return (
    <header className=" w-full bg-background shadow  dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">Tags</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  )
}

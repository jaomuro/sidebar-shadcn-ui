import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function Dashboard() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col relative">
            <img
              src="/src/assets/receipt.png"
              alt=""
              width={500}
              height={500}
            />
            <div className="absolute -bottom-8 right-0">
              <Link
                to="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground"
              >
                Designed by jaomuro
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
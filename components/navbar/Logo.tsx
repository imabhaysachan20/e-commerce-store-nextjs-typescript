import Link from "next/link"
import { Button } from "../ui/button"

function Logo() {
  return (
    <div>
      <Button size="icon" asChild>
        <Link href = "/">{`S`}</Link>
      </Button>
    </div>
  )
}

export default Logo

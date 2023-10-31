import Link from "next/link"
import { Button } from "../Button/Button"
import { navigation } from "@/models/models"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 text-white uppercase bg-slate-400">
      <h1><Link href={ "/" }>Next | TS | TWCSS</Link></h1>
      <div>
        {navigation.map(({ name, href }) =>
          <Button key={ name } linck={ href }>{ name }</Button>
        )}
      </div>
    </header>
  )
}

export { Header }
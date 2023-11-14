'use client'
import { ButtonProps } from "@/models/models"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Button = ({ children, linck }: ButtonProps) => {
  const pathname = usePathname()
  console.log(linck)
  console.log(pathname)

  return (
    <Link
      href={ linck }
      className={`
        border rounded-md w-28 text-center text-white uppercase bg-slate-400 hover:bg-slate-500 active:bg-slate-400 py-0.5 px-4 m-1
        ${pathname === linck || (linck.length > 1 && pathname.startsWith(linck)) ? 'bg-slate-500' : ''}
      `}
    >
      { children }
    </Link>
  )
}

export { Button }
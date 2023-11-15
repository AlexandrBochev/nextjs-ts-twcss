'use client'
import { ButtonProps } from "@/models/models"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Button = ({ children, linck }: ButtonProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={ linck }
      className={`
        border rounded-md w-28 text-center text-white uppercase hover:bg-slate-500 active:bg-slate-400 py-0.5 px-4 m-1
        ${
          pathname === linck ||
          linck.length > 1 &&
          pathname.includes(linck) &&
          children !== 'Go back'
          ? 'bg-slate-500'
          : 'bg-slate-400'
        }
      `}
    >
      { children }
    </Link>
  )
}

export { Button }
import { InfoBlock } from "@/components/InfoBlock/InfoBlock"
import { UserType, getData } from "@/models/models"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Users | Next.js TypeScript Tailwind CSS',
}

export default async function Users() {
  const users: UserType[] = await getData('users')

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Users</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${ user.id }`}>
              <InfoBlock title={ user.name } email={ user.email } />
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
import { InfoBlock } from "@/components/InfoBlock/InfoBlock"
import { CommentType, getData } from "@/models/models"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Comments | Next.js TypeScript Tailwind CSS',
}

export default async function Comments() {
  const comments: CommentType[] = await getData('comments?_limit=30')
  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Comments</h1>
      <ul>
        {comments.map(comment =>
          <li key={comment.id}>
            <Link href={`/comments/${ comment.id }`}>
              <InfoBlock title={ comment.name } />
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
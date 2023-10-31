import { InfoBlock } from "@/components/InfoBlock/InfoBlock"
import { PostType, getData } from "@/models/models"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Posts | Next.js TypeScript Tailwind CSS',
}

export default async function Posts() {
  const posts: PostType[] = await getData('posts?_limit=30')

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${ post.id }`}>
              <InfoBlock title={ post.title } />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
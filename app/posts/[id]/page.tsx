import { Button } from '@/components/Button/Button'
import { InfoBlock } from '@/components/InfoBlock/InfoBlock'
import { PostType, getData, metadataProps } from '@/models/models'
import { Metadata } from 'next'

export const generateMetadata = async ({ params: { id } }: metadataProps): Promise<Metadata> => {
  const post: PostType = await getData(`posts/${id}`)
  return {
    title: post.title,
  }
}

export default async function Post({ params: { id } }: metadataProps) {
  const post: PostType = await getData(`posts/${id}`)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">{ post.title }</h1>
      <InfoBlock body={ post.body } />
      <Button linck="/posts">Go back</Button>
    </>
  )
}
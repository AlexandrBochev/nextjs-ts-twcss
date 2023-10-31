import { Button } from '@/components/Button/Button'
import { InfoBlock } from '@/components/InfoBlock/InfoBlock'
import { CommentType, getData, metadataProps } from '@/models/models'
import { Metadata } from 'next'

export const generateMetadata = async ({ params: { id } }: metadataProps): Promise<Metadata> => {
  const comment: CommentType = await getData(`comments/${id}`)
  return {
    title: comment.name,
  }
}

export default async function Comment({ params: { id } }: metadataProps) {
  const comment: CommentType = await getData(`comments/${id}`)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">{ comment.name }</h1>
      <InfoBlock body={ comment.body } email={ comment.email } />
      <Button linck="/comments">Go back</Button>
    </>
  )
}
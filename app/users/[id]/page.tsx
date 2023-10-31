import { Button } from '@/components/Button/Button'
import { InfoBlock } from '@/components/InfoBlock/InfoBlock'
import { UserType, getData, metadataProps } from '@/models/models'
import { Metadata } from 'next'

export const generateMetadata = async ({ params: { id } }: metadataProps): Promise<Metadata> => {
  const user: UserType = await getData(`users/${id}`)
  return {
    title: user.name,
  }
}

export default async function Post({ params: { id } }: metadataProps) {
  const user: UserType = await getData(`users/${id}`)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">{user.name}</h1>
      <InfoBlock email={ user.email } phone={ user.phone } website={ user.website } />
      <Button linck="/users">Go back</Button>
    </>
  )
}
// Types
export interface ButtonProps {
  children: React.ReactNode
  linck: string
}

export interface InfoBlockProps {
  title?: string
  body?: string
  phone?: string
  email?: string
  website?: string
}

export interface PhotoType {
  id: number
  title: string
  url: string
}

export interface PostType {
  id: number
  title: string
  body: string
}

export interface CommentType {
  id: number
  name: string
  email: string
  body: string
}

export interface UserType {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

export interface metadataProps {
  params: {
    id: string
  }
}

// Functions
export const getData = async (path: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${path}`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  const data = await response.json()
  return data
}

// Constants
export const navigation = [
  { name: 'Photos', href: '/' },
  { name: 'Posts', href: '/posts' },
  { name: 'Comments', href: '/comments' },
  { name: 'Users', href: '/users' },
]
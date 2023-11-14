import { render, screen } from '@testing-library/react'
import { InfoBlock } from '@/components/InfoBlock/InfoBlock'

describe('InfoBlock', () => {
  it('renders title', async () => {
    render(<InfoBlock title="title" />)
    const title = await screen.findByText(/title/i)
    expect(title).toBeInTheDocument()
  })
  
  it('renders phone', async () => {
    render(<InfoBlock title="title" phone="phone" />)
    const phone = await screen.findByText(/phone/i)
    expect(phone).toBeInTheDocument()
  })

  it('renders email', async () => {
    render(<InfoBlock title="title" email="email" />)
    const email = await screen.findByText(/email/i)
    expect(email).toBeInTheDocument()
  })

  it('renders website', async () => {
    render(<InfoBlock title="title" website="website" />)
    const website = await screen.findByText(/website/i)
    expect(website).toBeInTheDocument()
  })

  it('renders body', async () => {
    render(<InfoBlock title="title" body="body" />)
    const body = await screen.findByText(/body/i)
    expect(body).toBeInTheDocument()
  })
})
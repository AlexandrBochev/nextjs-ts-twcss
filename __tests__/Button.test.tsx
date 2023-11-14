import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button/Button'

describe('Button', () => {
  it('renders without crashing', async () => {
    render(<Button linck="/">Photos</Button>)
    const title = await screen.findByText(/Photos/i)
    expect(title).toBeInTheDocument()
  })
})

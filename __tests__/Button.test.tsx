import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/Button/Button'

describe('Button component', () => {
  it('renders button with correct link and style', () => {
    jest.mock('next/navigation', () => ({
      usePathname: () => '/current-path',
    }))

    render(<Button linck="/">Some name</Button>)

    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href')
    expect(button).toHaveClass('bg-slate-400')

    userEvent.hover(button)
    expect(button).toHaveClass('hover:bg-slate-500')

    userEvent.click(button)
    expect(button).toHaveClass('active:bg-slate-400')
  })
})

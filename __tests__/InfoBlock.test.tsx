import { InfoBlock } from '@/components/InfoBlock/InfoBlock';
import { InfoBlockProps } from '@/models/models';
import { render, screen } from '@testing-library/react'

describe('InfoBlock Component', () => {
  const defaultProps: InfoBlockProps = {
    title: 'Test Title',
    body: 'Test Body',
    phone: '123-456-7890',
    email: 'test@example.com',
    website: 'www.example.com',
  }

  it('renders InfoBlock component with all props', () => {
    render(<InfoBlock {...defaultProps} />)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Body')).toBeInTheDocument()
    expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('Email: test@example.com')).toBeInTheDocument()
    expect(screen.getByText('Website: www.example.com')).toBeInTheDocument()
  })

  it('renders InfoBlock component without optional props', () => {
    render(<InfoBlock />)

    expect(screen.queryByText('Test Title')).toBeNull()
    expect(screen.queryByText('Test Body')).toBeNull()
    expect(screen.queryByText('Phone: 123-456-7890')).toBeNull()
    expect(screen.queryByText('Email: test@example.com')).toBeNull()
    expect(screen.queryByText('Website: www.example.com')).toBeNull()
  })

  it('renders InfoBlock component with only title', () => {
    const { title } = defaultProps
    render(<InfoBlock title={title}/>)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.queryByText('Test Body')).toBeNull()
    expect(screen.queryByText('Phone: 123-456-7890')).toBeNull()
    expect(screen.queryByText('Email: test@example.com')).toBeNull()
    expect(screen.queryByText('Website: www.example.com')).toBeNull()
  })
})

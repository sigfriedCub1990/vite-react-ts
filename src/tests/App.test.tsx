import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from 'App'

function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

describe('App test', () => {
  test('should render App', () => {
    render(<App />)

    expect(screen.getByText(/counter/i)).toBeVisible()
  })

  test('should increment counter', async () => {
    const { user } = setup(<App />)

    const incrementButton = screen.getByRole('button', { name: '+' })

    await user.click(incrementButton)

    expect(screen.getByText(1)).toBeVisible()
  })

  test('should decrement counter', async () => {
    const { user } = setup(<App />)

    const decrementButton = screen.getByRole('button', { name: '-' })

    await user.click(decrementButton)

    expect(screen.getByText(-1)).toBeVisible()
  })
})

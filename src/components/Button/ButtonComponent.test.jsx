import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ButtonComponent from '.'

test('renders the button and responds to click events', () => {
    const buttonText = 'Click me'
    render(
        <ButtonComponent
            variant="contained"
            buttonName={buttonText}
            style={{}}
        />
    )
    const button = screen.getByText(buttonText)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
})

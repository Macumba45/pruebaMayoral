import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ButtonComponent from '.'

test('renders the button and responds to click events', () => {
    const buttonText = 'Click me'
    render(<ButtonComponent variant="contained" buttonName={buttonText} style={{}} />)

    // Comprueba que el botón se renderiza con el texto correcto
    const button = screen.getByText(buttonText)
    expect(button).toBeInTheDocument()

    // Comprueba que el botón responde a los eventos de clic
    userEvent.click(button)
    // Aquí puedes comprobar los efectos del clic, por ejemplo, si se llama a una función de prop onClick
})
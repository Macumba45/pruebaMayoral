import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SortSelect from './index'

test('renders SortSelect and responds to selection change', () => {
    const handleSortOrderChange = jest.fn()
    const { getByLabelText, getByText } = render(
        <SortSelect width={500} onSortOrderChange={handleSortOrderChange} />
    )

    // Comprueba que el selector se renderiza con el valor por defecto
    const select = getByLabelText('Ordenar')
    expect(select).toBeInTheDocument()
    expect(select.textContent).toBe('Precio de menor a mayor')

    // Simula la selección de una opción y comprueba que se llama a la función de cambio
    fireEvent.mouseDown(getByText('Precio de menor a mayor'))
    const option = getByText('Precio de mayor a menor')
    fireEvent.click(option)
    expect(handleSortOrderChange).toHaveBeenCalledWith('desc')
})

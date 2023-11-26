import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from './index';

test('renders SearchComponent and responds to input change', () => {
    const handleSearchChange = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchComponent width={500} onSearchChange={handleSearchChange} searchValue="" />
    );

    // Comprueba que el campo de búsqueda se renderiza
    const searchField = getByPlaceholderText('Buscar');
    expect(searchField).toBeInTheDocument();

    // Simula la escritura en el campo de búsqueda y comprueba que se llama a la función de cambio
    fireEvent.change(searchField, { target: { value: 'test' } });
    expect(handleSearchChange).toHaveBeenCalledWith('test');
});
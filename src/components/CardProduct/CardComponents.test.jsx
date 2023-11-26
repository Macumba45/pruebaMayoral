import React from 'react';
import { render, screen } from '@testing-library/react';
import MediaCard from './index';

test('renders MediaCard with product details', () => {
    const product = {
        price: 100,
        priceDiscount: 80,
    };

    render(
        <MediaCard
            image="test-image.jpg"
            title="Test Product"
            product={product}
            heightPicture={200}
            showMoreColorsText={true}
        />
    );

    // Comprueba que la imagen se renderiza con la URL correcta
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image.jpg');

    // Comprueba que el título del producto se renderiza correctamente
    const title = screen.getByText('Test Product');
    expect(title).toBeInTheDocument();

    // Comprueba que el precio y el precio con descuento se renderizan correctamente
    const originalPrice = screen.getByText('100.00€');
    expect(originalPrice).toBeInTheDocument();

    const discountPrice = screen.getByText('80.00€ (-20%)');
    expect(discountPrice).toBeInTheDocument();

    // Comprueba que el texto "Más colores" se renderiza si showMoreColorsText es true
    const moreColorsText = screen.getByText('Más colores');
    expect(moreColorsText).toBeInTheDocument();

    // Comprueba que el botón "Añadir" se renderiza
    const button = screen.getByText('Añadir');
    expect(button).toBeInTheDocument();
});
import { useState, useEffect, useCallback } from 'react'
import { Products } from './types'
import { ProductsWithDiscount } from '@/components/CardProduct'

export const useLogicHome = () => {
    const [products, setProducts] = useState<Products[]>([])
    const productIdsToShowMoreColors = [1, 2, 3, 5, 8, 9, 10, 11]
    const [width, setWidth] = useState<number | undefined>(undefined)
    const [height, setHeight] = useState<number | undefined>(undefined)
    const [heightPicture, setHeightPicture] = useState<number | undefined>(
        undefined
    )
    const [widthSearch, setWidthSearch] = useState<number | undefined>(
        undefined
    )

    const [searchValue, setSearchValue] = useState('')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    const filteredProducts = products
        .filter(product =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .sort((a, b) => {
            const getPrice = (product: ProductsWithDiscount) =>
                product.priceDiscount !== undefined
                    ? product.priceDiscount
                    : product.price

            return sortOrder === 'asc'
                ? getPrice(a) - getPrice(b)
                : getPrice(b) - getPrice(a)
        })

    const fetchProducts = useCallback(async (): Promise<void> => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            // Aplicar descuento a productos aleatroios cada vez que se recargue la página
            const productsWithDiscount = data.map(
                (product: ProductsWithDiscount) => {
                    // Generar un número aleatorio entre 0 y 1
                    const random = Math.random()

                    // Si el número aleatorio es menor que 0.5, aplicar el descuento
                    if (random < 0.5) {
                        return {
                            ...product,
                            priceDiscount: product.price - product.price * 0.3,
                        }
                    } else {
                        return product
                    }
                }
            )

            setProducts(productsWithDiscount)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth < 700 ? 130 : 240)
            setWidthSearch(newWidth < 700 ? 300 : 500)
            setHeight(newWidth < 700 ? 360 : 500)
            setHeightPicture(newWidth < 700 ? 160 : 300)
        }

        // Configurar el event listener para el cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize)

        // Obtener el ancho inicial de la ventana
        handleResize()

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        fetchProducts,
        filteredProducts,
        height,
        heightPicture,
        productIdsToShowMoreColors,
        products,
        searchValue,
        setSearchValue,
        setSortOrder,
        sortOrder,
        width,
        widthSearch,
    }
}

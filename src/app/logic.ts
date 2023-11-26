import { useState, useEffect, useCallback } from 'react'
import { Products } from './types'
import { ProductsWithDiscount } from '@/components/CardProduct'

export const useLogicHome = () => {
    const [products, setProducts] = useState<Products[]>([])
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
            console.log(data)
            // Aplicar descuento a productos específicos
            const productsWithDiscount = data.map(
                (product: ProductsWithDiscount) => {
                    if (
                        product.id === 1 ||
                        product.id === 2 ||
                        product.id === 3 ||
                        product.id === 5 ||
                        product.id === 8 ||
                        product.id === 10 ||
                        product.id === 20 ||
                        product.id === 18
                    ) {
                        // Aplicar descuento del 30%
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
        products,
        width,
        widthSearch,
        height,
        heightPicture,
        searchValue,
        setSearchValue,
        sortOrder,
        setSortOrder,
        filteredProducts,
    }
}

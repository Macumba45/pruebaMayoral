'use client'

import React, { FC, memo, useEffect } from 'react'
import SearchComponent from '@/components/Search'
import DividerComponent from '@/components/Divider'
import MediaCard from '@/components/CardProduct'
import { useLogicHome } from './logic'
import { Typography } from '@mui/material'
import SortButton from '@/components/SortButton'
import {
    CardContainer,
    DividerContainer,
    MainContainer,
    SearchContainer,
    SortOrderContainer,
    getMediaCardStyle,
} from './styles'

const Home: FC = () => {
    const {
        fetchProducts,
        filteredProducts,
        height,
        heightPicture,
        productIdsToShowMoreColors,
        searchValue,
        setSearchValue,
        setSortOrder,
        width,
        widthSearch,
    } = useLogicHome()

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <MainContainer>
            <SearchContainer>
                <SearchComponent
                    width={widthSearch as number}
                    onSearchChange={setSearchValue}
                    searchValue={searchValue}
                />
            </SearchContainer>
            <SortOrderContainer>
                <SortButton
                    width={widthSearch as number}
                    onSortOrderChange={setSortOrder}
                />
            </SortOrderContainer>
            <DividerContainer>
                <DividerComponent />
            </DividerContainer>
            <CardContainer>
                {filteredProducts.length === 0 && (
                    <Typography style={{ textAlign: 'center' }}>
                        No hay productos
                    </Typography>
                )}
                {filteredProducts.map((product, index) => {
                    return (
                        <MediaCard
                            key={index}
                            heightPicture={heightPicture as number}
                            style={getMediaCardStyle({ width, height })}
                            title={product.title}
                            image={product.image}
                            product={product}
                            showMoreColorsText={productIdsToShowMoreColors.includes(
                                product.id
                            )}
                        />
                    )
                })}
            </CardContainer>
        </MainContainer>
    )
}

export default memo(Home)

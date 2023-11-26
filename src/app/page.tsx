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
} from './styles'

const Home: FC = () => {
  const {
    fetchProducts,
    width,
    widthSearch,
    height,
    heightPicture,
    searchValue,
    setSearchValue,
    setSortOrder,
    filteredProducts,
  } = useLogicHome()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts, searchValue, setSearchValue])

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
          const showMoreColorsText =
            product.id === 1 ||
            product.id === 2 ||
            product.id === 3 ||
            product.id === 5 ||
            product.id === 8

          return (
            <MediaCard
              key={index}
              heightPicture={heightPicture as number}
              style={{
                width: width,
                margin: '0.6rem',
                display: 'flex',
                flexDirection: 'column',
                height: height,
                padding: '0.8rem',
                border: '1px solid #2843613c',
                boxShadow: '0px 0px 5px 0px #0172ea3c',
              }}
              title={product.title}
              image={product.image}
              product={product}
              showMoreColorsText={showMoreColorsText}
            />
          )
        })}
      </CardContainer>
    </MainContainer>
  )
}

export default memo(Home)

import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ButtonComponent from '../Button'
import Box from '@mui/material/Box'
import { Products } from '@/app/types'

export interface ProductsWithDiscount extends Products {
    priceDiscount?: number
}

interface MediaCardProps {
    image: string
    title: string
    product: ProductsWithDiscount
    style?: React.CSSProperties
    heightPicture: number
    showMoreColorsText: boolean
}

const MediaCard: FC<MediaCardProps> = ({
    image,
    title,
    style,
    product,
    heightPicture,
    showMoreColorsText,
}) => {
    const { price, priceDiscount } = product

    return (
        <Card sx={style}>
            <div>
                <CardMedia
                    image={image}
                    title={title}
                    component="img"
                    sx={{
                        height: heightPicture,
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div>
                <Typography
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '0.8rem',
                        textAlign: 'center',
                        marginTop: '1rem',
                    }}
                >
                    {title}
                </Typography>
            </div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '200px',
                }}
            >
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '0.5rem',
                        fontSize: '1rem',
                        textDecoration: priceDiscount ? 'line-through' : 'none',
                        color: 'text.disabled',
                    }}
                >
                    {`${price.toFixed(2)}€`}
                </Typography>
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '0.2rem',
                        fontSize: '1rem',
                        color: 'red',
                    }}
                >
                    {priceDiscount && `${priceDiscount.toFixed(2)}€ (-20%)`}
                </Typography>
            </Box>
            <Box>
                {showMoreColorsText && (
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '0.6rem',
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Más colores
                    </Typography>
                )}
            </Box>
            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ButtonComponent
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '0.8rem',
                        marginBottom: '0.5rem',
                    }}
                    variant={'contained'}
                    buttonName={'Añadir'}
                />
            </CardActions>
        </Card>
    )
}

export default MediaCard

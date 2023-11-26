import React, { FC } from 'react'
import Button from '@mui/material/Button'

interface ButtonProps {
    variant: 'text' | 'outlined' | 'contained'
    buttonName: string
    style: React.CSSProperties
}

const ButtonComponent: FC<ButtonProps> = ({ variant, buttonName, style }) => {
    return (
        <Button style={style} variant={variant}>
            {buttonName}
        </Button>
    )
}

export default ButtonComponent

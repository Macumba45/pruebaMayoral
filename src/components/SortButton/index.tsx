import React, { FC, useState } from 'react'
import {
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    FormControl,
} from '@mui/material'

interface SortSelectProps {
    onSortOrderChange: (sortOrder: 'asc' | 'desc') => void
    width: number
}

const SortSelect: FC<SortSelectProps> = ({ onSortOrderChange, width }) => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    const handleSortOrderChange = (
        event: SelectChangeEvent<'asc' | 'desc'>
    ) => {
        const newSortOrder = event.target.value as 'asc' | 'desc'
        setSortOrder(newSortOrder)
        onSortOrderChange(newSortOrder)
    }

    return (
        <FormControl
            sx={{
                width: width,
            }}
        >
            <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
            <Select
                id="demo-simple-select-label"
                sx={{
                    height: '40px',
                }}
                label="Ordenar"
                value={sortOrder}
                onChange={handleSortOrderChange}
            >
                <MenuItem value="asc">Precio de menor a mayor</MenuItem>
                <MenuItem value="desc">Precio de mayor a menor</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SortSelect

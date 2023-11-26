import React, { FC, ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'

interface SearchProps {
    width: number
    onSearchChange: (newSearchValue: string) => void
    searchValue: string
}

const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
        placeholder="Buscar"
        {...params}
        InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
                <InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
    />
)

const SearchComponent: FC<SearchProps> = ({
    width,
    onSearchChange,
    searchValue,
}) => {
    const handleSearchChange = (_event: ChangeEvent<{}>, newValue: string) => {
        onSearchChange(newValue)
    }

    return (
        <Stack spacing={2} sx={{ width: width }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={[]}
                value={searchValue} // Utilizo el estado de búsqueda
                onChange={handleSearchChange}
                inputValue={searchValue} // Agrego inputValue para hacerlo un componente controlado
                onInputChange={(_event, newInputValue) =>
                    onSearchChange(newInputValue)
                } // Actualiza el estado mientras escribo la búsqueda
                sx={{
                    '.MuiOutlinedInput-root': {
                        padding: 0,
                    },
                }}
                renderInput={renderInput}
            />
        </Stack>
    )
}

export default SearchComponent

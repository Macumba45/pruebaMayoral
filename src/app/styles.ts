import styled from 'styled-components'

export const MainContainer = styled.div``

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    @media (min-width: 700px) {
        justify-content: flex-start;
        margin-left: 1rem;
    }
`

export const DividerContainer = styled.div`
    margin-top: 3rem;
    @media (min-width: 700px) {
        display: none;
    }
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

export const SortOrderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    @media (min-width: 700px) {
        justify-content: flex-start;
        margin-left: 1rem;
    }
`

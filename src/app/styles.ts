import styled from 'styled-components'
import { StylePropsMediaCard } from './types'

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

export const getMediaCardStyle = ({
    width,
    height,
}: StylePropsMediaCard): React.CSSProperties => ({
    width: width,
    margin: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    height: height,
    padding: '0.8rem',
    border: '1px solid #2843613c',
    boxShadow: '0px 0px 5px 0px #0172ea3c',
})

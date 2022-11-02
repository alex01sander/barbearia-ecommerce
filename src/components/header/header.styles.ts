import styled from 'styled-components'
import Colors from '../../themes/themes'

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: ${Colors.background.dark};
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: ${Colors.text.white};
`
export const HeaderTile = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
`
export const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 25px;
`

export const HeaderItem = styled.div`
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    

    &:nth-child(1), 
    &:nth-child(2), 
    &:nth-child(3) {
        margin-right: 40px;
    }

    &:hover{
        cursor: pointer;
    }
`

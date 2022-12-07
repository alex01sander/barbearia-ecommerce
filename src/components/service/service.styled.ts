import styled from 'styled-components'

export const HomeCards = styled.div`
  display: grid;
  grid-template:  1fr 1fr / 1fr 1fr 1fr;
  justify-content:space-around;
  
  @media (max-width: 768px){
    display: flex;
    flex-direction:column;
  }
`

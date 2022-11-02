import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styles'

const HeaderComponents = () => {
  return (
    <HeaderContainer>
        <HeaderTile>BarberShop</HeaderTile>
        <HeaderItems>
            <HeaderItem>Loja</HeaderItem>
            <HeaderItem>Entrar</HeaderItem>
            <HeaderItem>Cadastra-se</HeaderItem>
            <HeaderItem>Sair</HeaderItem>
        </HeaderItems>
    </HeaderContainer>
  )
}

export default HeaderComponents

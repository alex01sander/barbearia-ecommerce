import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styles'
import { BsCart } from 'react-icons/bs'
const HeaderComponents = () => {
  return (
    <HeaderContainer>
        <HeaderTile>BarberShop</HeaderTile>
        <HeaderItems>
            <HeaderItem>Loja</HeaderItem>
            <HeaderItem>Entrar</HeaderItem>
            <HeaderItem>Cadastra-se</HeaderItem>
            <HeaderItem><BsCart size={25} margin-left={10}/> 5 </HeaderItem>

        </HeaderItems>
    </HeaderContainer>
  )
}

export default HeaderComponents

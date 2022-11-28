
import Catergories from '../../components/categories/categories.components'

import HeaderComponents from '../../components/header/header.components'

import { HomeAbout, HomeAbouted, HomeAboutImage, HomeAboutSubTitle, HomeAboutTitle, HomeBackground, HomeCard, HomeCards, HomeConteiner, HomeContent, HomeService, HomeServiceTitle, HomeSubTitle, HomeTitle } from './homes.styles'

const HomePages = () => {
  return (
    <>
      <HeaderComponents/>
        <HomeConteiner>

        <HomeContent>
        <HomeTitle>Muito Mais Que Uma</HomeTitle>
        <HomeSubTitle>BARBEARIA</HomeSubTitle>
        </HomeContent>

        </HomeConteiner>
        <HomeBackground>Seu Cabelo, Sua barba, Seu estilo. A escolha é Sua</HomeBackground>

        <HomeAbout>
          <HomeAbouted>
          <HomeAboutTitle><u>SOBRE</u> NÓS</HomeAboutTitle>
            <HomeAboutSubTitle>Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda suscipit, rerum maiores quae neque cumque,
              debitis adipisci eligendi soluta vitae ipsum praesentium
              facilis atque! Laudantium error illo rem sapiente cupiditate!<br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ex tempore aspernatur, est inventore sequi explicabo vero
              dolore error ut qui atque libero culpa
              fuga quas esse repellat iusto incidunt aut?</HomeAboutSubTitle>

          </HomeAbouted>

            <HomeAboutImage/>
        </HomeAbout>
        <HomeService>
            <HomeServiceTitle>Nossos Serviços</HomeServiceTitle>
            <HomeCards >
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
            </HomeCards>
        </HomeService>

        <Catergories/>
    </>

  )
}

export default HomePages

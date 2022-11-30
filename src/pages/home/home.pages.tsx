
import Catergories from '../../components/categories/categories.components'

import HeaderComponents from '../../components/header/header.components'
import { BsWhatsapp } from 'react-icons/bs'
import { Contacts, ContactsContainer, ContactsInformation, ContactsInformations, Footer, HomeAbout, HomeAbouted, HomeAboutImage, HomeAboutSubTitle, HomeAboutTitle, HomeBackground, HomeCard, HomeCards, HomeConteiner, HomeContent, HomeService, HomeServiceTitle, HomeSubTitle, HomeTitle } from './homes.styles'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { FiFacebook } from 'react-icons/fi'

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
              <HomeCard><p>Cabelo</p></HomeCard>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
            </HomeCards>
        </HomeService>
          <Contacts> Loja </Contacts>
        <Catergories/>
          <Contacts> Contatos </Contacts>
          <ContactsContainer>
          <ContactsInformations>
                <ContactsInformation> <AiOutlineInstagram size={20}/> <a target="_blank"
             href="#"
             rel="noreferrer">/BarberShop</a>
             </ContactsInformation>
             <ContactsInformation> <FiFacebook/> <a target="_blank"
             href="#"
             rel="noreferrer">/BarberShopFace</a>
             </ContactsInformation>

                <ContactsInformation> <AiOutlineMail size={20}/> barber@teste.com</ContactsInformation>

             </ContactsInformations>
             <ContactsInformations>
                <ContactsInformation> <BsWhatsapp size={20}/> (55)999-999</ContactsInformation>
                <ContactsInformation> <AiOutlineMail size={20}/> barber@teste.com</ContactsInformation>
                <ContactsInformation> <MdLocationPin size={20}/> R. estradinha do ceu, 999 em Frente ao portão</ContactsInformation>
             </ContactsInformations>

          </ContactsContainer>
          <Footer> Desenvolvido por Alex Britto ©2022</Footer>
    </>

  )
}

export default HomePages

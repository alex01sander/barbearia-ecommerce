import styled from 'styled-components'

export const HomeConteiner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    
    justify-content: center;

`

export const HomeContent = styled.div`
 background-image: url(https://img.freepik.com/fotos-gratis/barba-de-corte-de-homem-bonito-em-um-salao-de-barbearia_1303-20934.jpg?w=900&t=st=1667395777~exp=1667396377~hmac=7b70284a28283a9e2e4be7a4d7c2b1ef6943fddd41d9e071f172d48f52fee9d6);
    background-repeat: no-repeat;
    background-size:cover;
    width: 100%;
    height: 50%;
    padding: 13%;
`

export const HomeTitle = styled.h1`
  font-size: 20px;
  color: rgb(247, 152, 44);
  margin-right: 40rem;
  font-family: 'Permanent Marker', cursive;
`

export const HomeSubTitle = styled.p`
  color: rgb(209, 128, 6) ;
  font-family: 'Koulen', cursive;
  font-size: 80px;
  margin-right: 39rem;
  margin-top: 0
`

export const HomeBackground = styled.div`
    background-color: rgb(209, 128, 6);
    width: auto;
    padding: 15px;
    text-align: center;
    color: white;
    font-family: 'Permanent Marker', cursive;
    font-size: 30px;
`

export const HomeAbout = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  gap: 100px;
`
export const HomeAbouted = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  
`

export const HomeAboutTitle = styled.h3`
  font-size: 50px;
  margin-top: 50px;
  
`

export const HomeAboutSubTitle = styled.p`
  max-width: 400px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;  
`

export const HomeAboutImage = styled.div`
    background-image: url(https://img.freepik.com/fotos-gratis/maos-usando-lamina-de-barbear-close-up_23-2149141775.jpg?w=360&t=st=1667412376~exp=1667412976~hmac=9b5915bc2cac971ecdfbea0dde2b5c4f188a7d2b26c4a48e1711c6ef8fcf5003);
    background-repeat: no-repeat;
    background-size:cover;  
    width: 50%;
    height: 100vh;
`

export const HomeService = styled.div` 
  background-image: url(https://img.freepik.com/fotos-gratis/fundo-da-parede-de-tijolo-rustico_53876-92955.jpg?w=740&t=st=1667416564~exp=1667417164~hmac=4af1494ae9b8713d5d7e54421cdbdefed829712c2876e4ae8f43318467c317c9);
  background-attachment: fixed;
  
`
export const HomeServiceTitle = styled.h3`
  font-size: 50px;
  margin-top: 50px;
  color: white;
  text-align: center;
  padding: 10px;
`

export const Contacts = styled.h3`
  text-align: center;
  color: darkgoldenrod;
  font-size: 30px;
  margin-top: 80px;
`

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 100px;
`

export const ContactsInformations = styled.div`
  margin: 10px
`

export const ContactsInformation = styled.p`
  margin: 20px;
  font-size: 20px;
  border: none;

  &:link{
        color: black;
        border: none;
  }

 a:visited {
  color: black;
  
 }

`
export const Footer = styled.h4`

  background-color: darkgoldenrod;
  height: 50px;
  text-align: center;
  color: white;
  padding: 10px;
`
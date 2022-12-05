import styled from 'styled-components'

interface DashItemContainerProps {
    backgroundImage: string
  }

export const HomeCard = styled.div<DashItemContainerProps>`
/* background-image: url(https://img.freepik.com/fotos-gratis/close-up-homem-senior-no-salao-de-cabeleireiro_23-2149220586.jpg?w=360&t=st=1667416077~exp=1667416677~hmac=9d2a64ec6b2a6d11c568b403fbe61607fda31e95caead6e1122f346798c78942); */
background-image: ${(props) => `url('${props.backgroundImage}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1a1a1a;
  background-position: center;
  color: white;
  text-align: center;
  width: 350px;
  height: 400px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 5px;
  background-blend-mode:color-dodge;

  .react-icons {
  
  color: yellow;
}
  
  h2{
    font-family: 'Permanent Marker', cursive;
    visibility: visible;
      opacity: 1;
  }

  p {
    
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
    
    color: white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    p {
      visibility: visible;
      opacity: 1;
    }

    h2{
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s ease;
    }

    
    
 }`

export const ServiceCardName = styled.p` 
    text-align: center;
    padding:20px;
    
    


    p{
      margin-top: 25px;
      font-family: 'Permanent Marker', cursive;
      color: yellow;
    }
`

export const ServiceTitle = styled.h2`
    text-align: center;
    font-family: 'Permanent Marker', cursive;
    color: darkgoldenrod;
    
`

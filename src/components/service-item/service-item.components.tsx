import { FunctionComponent } from 'react'
import { BsScissors } from 'react-icons/bs'
import Service from '../../types/service.types'
import { HomeCard, ServiceCardName, ServiceTitle } from './service-item.styled'

interface ServiceItemProps{
    service: Service
}

const ServiceItem: FunctionComponent<ServiceItemProps> = ({ service }) => {
  return (
    <HomeCard backgroundImage={service.imageUrl}>
        <ServiceTitle><h2>{service.name}</h2></ServiceTitle>
        <ServiceCardName>
            <p>{service.tabela}</p>

        </ServiceCardName>
        <BsScissors size={50}color='darkgoldenrod'/>
    </HomeCard>
  )
}

export default ServiceItem

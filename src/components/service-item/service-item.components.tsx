import { FunctionComponent } from 'react'
import { BsScissors } from 'react-icons/bs'
import Service from '../../types/service.types'
import { HomeCard, ServiceCardName, ServiceTitle, ServiceTitled } from './service-item.styled'

interface ServiceItemProps{
    service: Service

}

const ServiceItem: FunctionComponent<ServiceItemProps> = ({ service }) => {
  return (
    <HomeCard backgroundImage={service.imageUrl}>
      <ServiceTitled>
        <ServiceTitle><h2>{service.name}</h2>
        <BsScissors size={50}color='darkgoldenrod' />
        </ServiceTitle>
      </ServiceTitled>
        <ServiceCardName>
            <p>{service.tabela}</p>

        </ServiceCardName>

    </HomeCard>
  )
}

export default ServiceItem

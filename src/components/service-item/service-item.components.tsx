import { FunctionComponent } from 'react'
import Service from '../../types/service.types'
import { HomeCard, ServiceCardName } from './service-item.styled'

interface ServiceItemProps{
    service: Service
}

const ServiceItem: FunctionComponent<ServiceItemProps> = ({ service }) => {
  return (
    <HomeCard backgroundImage={service.imageUrl}>
        <ServiceCardName>
            {service.name}
        </ServiceCardName>
    </HomeCard>
  )
}

export default ServiceItem

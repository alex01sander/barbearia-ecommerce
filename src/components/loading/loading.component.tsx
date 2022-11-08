import PacmanLoader from 'react-spinners/PacmanLoader'
import { LoadingContainer } from './loading.styles'

const Loading = () => {
  return (
    <LoadingContainer>
        <PacmanLoader size={30}/>
    </LoadingContainer>
  )
}

export default Loading

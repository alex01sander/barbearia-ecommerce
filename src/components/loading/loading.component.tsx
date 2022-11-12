import { FunctionComponent } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { LoadingContainer } from './loading.styles'

interface LoadingProps {
  message?: string
}

const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
        <PacmanLoader size={30}/>
    </LoadingContainer>
  )
}

export default Loading

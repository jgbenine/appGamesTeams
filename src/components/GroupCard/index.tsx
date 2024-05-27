import {Title, Container, Icon } from './styled'
import {TouchableOpacityProps} from 'react-native'

type GroupProps = TouchableOpacityProps &{
  title: string;
}

export function GroupCard({title, ...rest}: GroupProps){
  return (
      <Container>
        <Icon />
        <Title>{title}</Title>
      </Container>
  )
}
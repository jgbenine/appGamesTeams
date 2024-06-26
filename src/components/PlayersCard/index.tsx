import { ButtonIcon } from '@components/ButtonIcon'
import {Container, Icon, Name} from './style'

type Props = {
  name: string,
  onRemove: ()=> void,
}
export function PlayersCard({name, onRemove, ...rest}: Props) {
  return (
    <Container>
      <Icon name='person' />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove}/>
    </Container>
  )
}

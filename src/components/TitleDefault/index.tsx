import {Container, Title, Subtitle} from './styled'


type TitlesProps = {
  title: string;
  subtitle: string;
}

export function TitleDefault({title, subtitle}: TitlesProps){
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )


}
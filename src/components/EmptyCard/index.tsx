import { Container, Menssage } from './styled';

type EmptyCardProps = {
  menssage: string;
}

export function EmptyCard({ menssage }: EmptyCardProps) {
  return (
    <Container>
      <Menssage>
        {menssage}
      </Menssage>
    </Container>
  )
}



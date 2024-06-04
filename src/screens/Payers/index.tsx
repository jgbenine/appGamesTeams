import { Header } from "@components/Header"
import { Container, Form } from "./styles"
import { TitleDefault } from "@components/TitleDefault"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/InputDefault"


export function Payers() {
  return (
    <Container>
      <Header showBackButton />
      <TitleDefault title="Nome do grupo" subtitle="Adicione um grupo e separe os os times" />
      <Form>
        <Input placeholder="Nome do player" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  )
}



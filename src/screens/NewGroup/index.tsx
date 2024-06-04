import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { TitleDefault } from "@components/TitleDefault";
import { Button } from "@components/Button";
import { Input } from "@components/InputDefault";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <TitleDefault title="Novo Grupo" subtitle="crie um grupo para adicionar as pessoas" />
        <Input placeholder="Nome do grupo"/>
        <Button title="Criar grupo" style={{marginTop: 20}} />
      </Content>
    </Container>
  )
}
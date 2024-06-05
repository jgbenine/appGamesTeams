import { useState } from "react";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { TitleDefault } from "@components/TitleDefault";
import { Button } from "@components/Button";
import { Input } from "@components/InputDefault";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation()
  function handleNewCreateGroup(){
    navigation.navigate("players", {group});
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <TitleDefault title="Novo Grupo" subtitle="crie um grupo para adicionar as pessoas" />
        <Input placeholder="Nome do grupo" onChangeText={setGroup}/>
        <Button title="Criar grupo" style={{marginTop: 20}} onPress={handleNewCreateGroup} />
      </Content>
    </Container>
  )
}
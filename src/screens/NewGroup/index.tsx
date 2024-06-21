import { useState } from "react";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { TitleDefault } from "@components/TitleDefault";
import { Button } from "@components/Button";
import { Input } from "@components/InputDefault";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/appError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation()

  async function handleNewCreateGroup() {
    try {
      if (group.trim().length === 0) {
        Alert.alert('Novo grupo', 'Informe o nome da turma.');
      }
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Não foi possivel criar um novo grupo');
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <TitleDefault title="Novo Grupo" subtitle="crie um grupo para adicionar as pessoas" />
        <Input placeholder="Nome do grupo" onChangeText={setGroup} />
        <Button title="Criar grupo" style={{ marginTop: 20 }} onPress={handleNewCreateGroup} />
      </Content>
    </Container>
  )
}
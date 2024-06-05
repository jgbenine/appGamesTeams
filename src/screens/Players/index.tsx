import Filter from "@components/Filter"
import { useRoute } from "@react-navigation/native"
import { Header } from "@components/Header"
import { Container, Form, HeaderList, NumberPlayers } from "./styles"
import { TitleDefault } from "@components/TitleDefault"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/InputDefault"
import { FlatList } from "react-native"
import { useState } from "react"
import { PlayersCard } from "@components/PlayersCard"
import { EmptyCard } from "@components/EmptyCard"
import { Button } from "@components/Button"


type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(["Israel", "Isaac"])

  const route = useRoute();
  const {group} = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <TitleDefault title={group} subtitle="Adicione um grupo e separe os times" />
      <Form>
        <Input placeholder="Nome do player" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time C']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <NumberPlayers>{players.length}</NumberPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayersCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={() => (
          <EmptyCard
            menssage="Não a players no grupo!"
          />)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{paddingBottom: 100 }, players.length === 0 && {flex: 1}]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}



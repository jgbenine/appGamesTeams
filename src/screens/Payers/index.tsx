import { Header } from "@components/Header"
import { Container, Form, HeaderList, NumberPlayers } from "./styles"
import { TitleDefault } from "@components/TitleDefault"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/InputDefault"
import Filter from "@components/Filter"
import { FlatList } from "react-native"
import { useState } from "react"
import { PlayersCard } from "@components/PlayersCard"


export function Payers() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(["Israel", "Isaac"])

  return (
    <Container>
      <Header showBackButton />
      <TitleDefault title="Nome do grupo" subtitle="Adicione um grupo e separe os os times" />
      <Form>
        <Input placeholder="Nome do player" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
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
        renderItem={({item}) => (
          <PlayersCard name={item} />
        )}
      />

    </Container>
  )
}



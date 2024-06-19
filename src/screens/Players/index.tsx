import Filter from "@components/Filter"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Header } from "@components/Header"
import { Container, Form, HeaderList, NumberPlayers } from "./styles"
import { TitleDefault } from "@components/TitleDefault"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/InputDefault"
import { Alert, FlatList, TextInput } from "react-native"
import { useEffect, useState, useRef } from "react"
import { PlayersCard } from "@components/PlayersCard"
import { EmptyCard } from "@components/EmptyCard"
import { Button } from "@components/Button"
import { AppError } from "@utils/appError"
import { playerAddByGroup } from "@storage/player/playerAddByGroup"
import { playersGetByGroup } from "@storage/player/playerGetByGroup"
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam"
import { PlayersTypeDTO } from "@storage/player/PlayerTypes"
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup"
import { groupRemoveByName } from "@storage/group/groupRemoveByName"


type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayersTypeDTO[]>([])
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const newPlayerInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Novo player', 'Informe o nome do player para adiciona-lo.')
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerInputRef.current?.blur();
      setNewPlayerName('');
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo player', error.message);
      } else {
        console.log(error);
        Alert.alert('Novo player', 'Erro ao adicionar player.');
      }
    }

  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Novo player', 'Erro ao buscar os players.');
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover Player', 'Erro ao remover player.');
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');
    } catch (error) {
      console.log(error);
      Alert.alert('Remover Grupo', 'Erro ao remover grupo.');
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover o grupo',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove()}
      ])

  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <TitleDefault title={group} subtitle="Adicione um grupo e separe os times" />
      <Form>
        <Input placeholder="Nome do player"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayersCard name={item.name} onRemove={() => { handleRemovePlayer(item.name) }} />
        )}
        ListEmptyComponent={() => (
          <EmptyCard
            menssage="Não a players no grupo!"
          />)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />
      <Button title="Remover Grupo" type="SECONDARY" onPress={handleGroupRemove} />
    </Container>
  )
}



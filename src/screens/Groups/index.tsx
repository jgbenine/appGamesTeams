
import { Header } from '@components/Header';
import { Container } from './styles'
import { TitleDefault } from '@components/TitleDefault';
import { GroupCard } from '@components/GroupCard';
import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { EmptyCard } from '@components/EmptyCard';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      Alert.alert('Carregar grupos', 'Não foi possível carregar grupos');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []))

  return (
    <Container>
      <Header />
      <TitleDefault title="Grupos" subtitle="Jogue com seus colegas" />
      {isLoading ? <Loading /> :
        <FlatList
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => (<EmptyCard menssage="Lista de grupos vazia, que tal cadastrar um novo grupo?" />)}
        />}
      <Button
        title="Criar novo grupo"
        onPress={handleNewGroup}
      />
    </Container>
  );
}


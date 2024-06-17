
import { Header } from '@components/Header';
import { Container } from './styles'
import { TitleDefault } from '@components/TitleDefault';
import { GroupCard } from '@components/GroupCard';
import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { EmptyCard } from '@components/EmptyCard';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data)
    } catch (err) {
      console.log(err)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []))

  return (
    <Container>
      <Header />
      <TitleDefault title="Grupo" subtitle="Jogue com seus colegas" />
      <FlatList
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />)
        }
        ListEmptyComponent={() => (<EmptyCard menssage="Lista de grupos vazia, que tal cadastrar um novo grupo?" />)}
      />
      <Button
        title="Criar novo grupo"
        onPress={handleNewGroup}
      />
    </Container>
  );
}


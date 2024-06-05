
import { Header } from '@components/Header';
import { Container } from './styles'
import { TitleDefault } from '@components/TitleDefault';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { EmptyCard } from '@components/EmptyCard';
import { Button } from '@components/Button';
import {useNavigation} from '@react-navigation/native'

export function Groups() {
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new')
  }

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


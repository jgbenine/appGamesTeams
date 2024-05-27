
import { Header } from '@components/Header';
import { Container } from './styles'
import { TitleDefault } from '@components/TitleDefault';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState(['Grupo Escape From Tarkov', 'Grupo Helldivers', 'Grupo GTA']);

  return (
    <Container>
      <Header />
      <TitleDefault title="Grupo" subtitle="Jogue com seus colegas" />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />)
        }
      />
      {/* <GroupCard  title='Grupo 1'/> */}
    </Container>
  );
}


import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupName: string) {
  try {
      const storageGroups = await groupsGetAll();

      const filteredGroups = storageGroups.filter(group => group !== groupName);
      await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));
      
      //Remove jogadores do grupo
      await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);

  } catch (error) {
    throw error;
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayersTypeDTO } from "./PlayerTypes";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const player: PlayersTypeDTO[] = storage ? JSON.parse(storage) : [];
    return player;
  } catch (error) {
    throw error;
  }
}

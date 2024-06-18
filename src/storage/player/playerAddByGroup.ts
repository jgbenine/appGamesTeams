import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayersTypeDTO } from "./PlayerTypes";
import { playersGetByGroup } from "./playerGetByGroup";

export async function playerAddByGroup(newPlayer: PlayersTypeDTO, group: string) {
  try {
    const storagePlayers = await playersGetByGroup(group);
    const playerExists = storagePlayers.filter(player => player.name === newPlayer.name);

    if(playerExists.length > 0){
      throw new AppError('Esse player ja foi adicionado ao grupp.')
    }
    const storage = JSON.stringify([...storagePlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}


import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/appError";

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll();
    const storage = JSON.stringify([...storageGroups, newGroup])

    const verifyExistsGroup = storageGroups.includes(newGroup);
    if(verifyExistsGroup){
        throw new AppError("Grupo já existe cadastrado");
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (err) {
    throw err;
  }
}

import * as SQLite from 'expo-sqlite'
import * as FileSystem from "expo-file-system"

import { Asset } from "expo-asset"

const databaseName = "database.db"

async function openDatabase(pathToDatabaseFile) {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite')
    }

    console.log(require(pathToDatabaseFile))

    // await FileSystem.downloadAsync(
    //   Asset.fromModule(require(pathToDatabaseFile)).uri,
    //   FileSystem.documentDirectory + `SQLite/${databaseName}`
    // )

    return SQLite.openDatabase(databaseName);
}

export default openDatabase(databaseName)
import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'

import { Asset } from 'expo-asset'

const database = {
    name: "database.db",
    db: require('./database.db')
}

export async function loadDatabase() {
    const databaseFolderPath = FileSystem.documentDirectory + 'SQLite'
    
    if (!(await FileSystem.getInfoAsync(databaseFolderPath)).exists) {
        await FileSystem.makeDirectoryAsync(databaseFolderPath)
            
        await FileSystem.downloadAsync(
            Asset.fromModule(database.db).uri,
            FileSystem.documentDirectory + `SQLite/${database.name}`
        )
    }
}

export function openDatabase() {
    return SQLite.openDatabase(database.name)
}
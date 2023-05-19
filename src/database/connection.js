import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'

import { Asset } from 'expo-asset'

const databases = [
    {
        name: "database.db",
        db: require('./database.db')
    }
]

export async function openDatabase(databaseName) {
    const database = databases.find(database => database.name === databaseName)

    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite')
    }

    await FileSystem.downloadAsync(
        Asset.fromModule(database.db).uri,
        FileSystem.documentDirectory + `SQLite/${database.name}`
    )

    const connection = SQLite.openDatabase('./database.db')

    return connection
}
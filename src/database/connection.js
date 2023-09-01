import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'

import { Asset } from 'expo-asset'

import SecureStorage from '../helpers/secureLocalStorage'

import { apiUrl } from '../services/api'

const databaseName = "databaseV1-0-0.db"
const databaseFolder = `${FileSystem.documentDirectory}SQLite`
const databaseUri = `${databaseFolder}/${databaseName}`

const defaultDatabase = require('./database.db')

export async function loadDatabase() {
    if (!(await FileSystem.getInfoAsync(databaseUri)).exists) {
        if (!(await FileSystem.getInfoAsync(databaseFolder)).exists) {
            await FileSystem.makeDirectoryAsync(databaseFolder)
        }

        await downloadDatabase({ isDefault: true })
    }
}

export async function downloadDatabase({ isDefault }) {
    if (isDefault) {
        await FileSystem.downloadAsync(
            Asset.fromModule(defaultDatabase).uri,
            databaseUri
        )  
    } else {
        const access_token = await SecureStorage.getData("users.token")

        openDatabase()._db.close()

        await FileSystem.downloadAsync(
            `${apiUrl}/users/backup`,
            databaseUri, {
                headers: {
                    "Authorization": `Bearer ${access_token}`,
                }
            }
        )
    }
}

export async function uploadDatabase(data) {
    try {
        const access_token = await SecureStorage.getData("users.token")

        await FileSystem.uploadAsync(`${apiUrl}/users/backup`, databaseUri, {
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            httpMethod: "POST",
            fieldName: "file",
            mimeType: ".db",
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": `Bearer ${access_token}`,
            },
            parameters: data
        })
    } catch(error) {}
}

export function openDatabase() {
    return SQLite.openDatabase(databaseName)
}
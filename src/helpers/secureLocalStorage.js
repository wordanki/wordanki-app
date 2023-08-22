import * as SecureStorage from 'expo-secure-store'

export default {
    storeData: async (key, data) => {
        await SecureStorage.setItemAsync(key, JSON.stringify(data))
    },
    getData: async key => {
        const data = await SecureStorage.getItemAsync(key)
    
        if (!data) throw new Error()

        return JSON.parse(data)
    }
}
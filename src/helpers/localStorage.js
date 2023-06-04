import AsyncStorage from '@react-native-async-storage/async-storage'

export default {
    storeData: async (key, data) => {
        await AsyncStorage.setItem(key, JSON.stringify(data))
    },
    getData: async key => {
        const data = await AsyncStorage.getItem(key)
    
        if (!data) throw new Error()

        return JSON.parse(data)
    }
}
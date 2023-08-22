import Constants from 'expo-constants'
import axios from 'axios'

import SecureStorage from '../helpers/secureLocalStorage'

export const apiUrl = Constants.manifest.extra.apiUrl

const getApi = () => {
    const api = axios.create({
        baseURL: apiUrl
    })  

    api.interceptors.request.use(async config => {
        try {
            const access_token = await SecureStorage.getData("users.token")

            config.headers['Authorization'] = `bearer ${access_token}`
        } catch(error) {} finally {
            return config
        }
    })

    return api
}

export default getApi()
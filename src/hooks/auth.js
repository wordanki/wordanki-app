import { createContext, useContext, useEffect, useState } from 'react'

import * as AuthSession from 'expo-auth-session'
import SecureStorage from '../helpers/secureLocalStorage'

import { downloadDatabase } from '../database/connection'

import api from '../services/api'

import { googleAuthUrl } from '../config/google'

const AuthContext = createContext({})

export const AuthProvider = ({ children, expoPushToken }) => {
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  const signIn = async () => {
    const { params, type } = await AuthSession.startAsync({ authUrl: googleAuthUrl })

    if (type === 'success') {
      const { data } = await api.post('/users/signin', {
        expoPushToken,
        access_token: params.access_token
      })

      console.log("DATA: ")
      console.log(data)

      try {
        await downloadDatabase({ isDefault: false }) 
      } catch(error) {
        console.log(`[DOWNLOAD DATABASE]: ${error}`)
      }

      console.log(params.access_token)

      const userData = {
        name: data.name,
        email: data.email,
        picture: data.picture
      }

      setUser(userData)

      SecureStorage.storeData("users.info", userData)
      SecureStorage.storeData("users.token", data.access_token)
    }
  }

  const signOut = async () => {

  }

  useEffect(() => {
    SecureStorage.getData("users.token").then(_ => setIsLogged(true)).catch(_ => setIsLogged(false))
    SecureStorage.getData("users.info").then(data => setUser(data))
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user,
      isLogged
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
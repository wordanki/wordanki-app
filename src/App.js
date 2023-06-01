import { useCallback, useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Roboto_400Regular, Roboto_700Bold  } from "@expo-google-fonts/roboto"

import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'

import { GlobalProvider } from './hooks/global'

import { loadDatabase } from './database/connection'

// import './config/firebase'

import { Routes } from './routes'
import { COLORS } from './theme'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
      await loadDatabase()

      setIsLoaded(true)
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded || !isLoaded) return null

  return (
    <GlobalProvider>
      <StatusBar 
        style='light' 
        backgroundColor={COLORS.TRANSPARENT}
      />

      <SafeAreaProvider style={{ backgroundColor: COLORS.BLACK_PRIMARY }}>
        <NavigationContainer
          onReady={onLayoutRootView}
        >      
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </GlobalProvider>
  )
}
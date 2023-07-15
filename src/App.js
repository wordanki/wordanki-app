import { useCallback, useEffect, useState, useRef } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { StatusBar } from 'expo-status-bar'

import * as SplashScreen from 'expo-splash-screen'
import * as Notifications from 'expo-notifications'

import { GlobalProvider } from './hooks/global'

import { loadDatabase } from './database/connection'
import { registerForPushNotificationsAsync } from './helpers/pushNotifications'

// import './config/firebase'

import { Routes } from './routes'
import { COLORS } from './theme'

SplashScreen.preventAutoHideAsync()

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false
	})
})

export default function App() {
	const [isLoaded, setIsLoaded] = useState(false)
	const [notification, setNotification] = useState(false)

	const [expoPushToken, setExpoPushToken] = useState()

	const responseListener = useRef()
	const notificationListener = useRef()

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold
	})

	useEffect(() => {
		loadDatabase().then(() => setIsLoaded(true))
		// registerForPushNotificationsAsync().then(token => setExpoPushToken(token))

		// notificationListener.current = Notifications.addNotificationReceivedListener(notification => setNotification(notification))
		// responseListener.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response))

		// return () => {
		//   Notifications.removeNotificationSubscription(notificationListener.current)
		//   Notifications.removeNotificationSubscription(responseListener.current)
		// }
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded && isLoaded) await SplashScreen.hideAsync()
	}, [fontsLoaded, isLoaded])

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
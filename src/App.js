import { useCallback, useEffect, useState, useRef } from 'react'
import { Platform, Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CopilotProvider } from "react-native-copilot"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { StatusBar } from 'expo-status-bar'

import * as SplashScreen from 'expo-splash-screen'
import * as Notifications from 'expo-notifications'
import * as NavigationBar from 'expo-navigation-bar'

import { GlobalProvider } from './hooks/global'
import { AuthProvider } from './hooks/auth'

import { loadDatabase } from './database/connection'
import { registerForPushNotificationsAsync } from './helpers/pushNotifications'

import { Routes } from './routes'
import { COLORS } from './theme'
import LocalStorage from './helpers/localStorage'
import api from './services/api'

const MARGIN = 8;
const WIDTH = Dimensions.get("window").width - 2 * MARGIN;

const style = {
	backgroundColor: "#9FA8DA",
	borderRadius: 10,
	paddingTop: 5,
	width: WIDTH, maxWidth: WIDTH, left: MARGIN,

  };

  const circleSvgPath = ({ position, canvasSize }) =>
  `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${position.y._value}Za50 50 0 1 0 100 0 50 50 0 1 0-100 0`;

SplashScreen.preventAutoHideAsync()

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false
	})
})

if (Platform.OS === "android") {
	NavigationBar.setBackgroundColorAsync(COLORS.BLACK_PRIMARY)
}

export default function App() {
	const [isLoaded, setIsLoaded] = useState(false)
	const [expoPushToken, setExpoPushToken] = useState()

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold
	})

	useEffect(() => {
		loadDatabase().then(() => setIsLoaded(true))

		registerForPushNotificationsAsync().then(token => {
			setExpoPushToken(token)

			LocalStorage.getData('user.expo-push-token-sendeds').catch(_ => {
				api.post('/notifications', { token }).then(_ => {
					LocalStorage.storeData('user.expo-push-token-sendeds', true)
				})
			})
		})
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded && isLoaded) await SplashScreen.hideAsync()
	}, [fontsLoaded, isLoaded])

	if (!fontsLoaded || !isLoaded) return null

	return (
		<GlobalProvider>
			<AuthProvider expoPushToken={expoPushToken}>
				<StatusBar
					style='light'
					translucent={true}
				/>

				<SafeAreaProvider style={{ backgroundColor: COLORS.BLACK_PRIMARY }}>
					<NavigationContainer
						onReady={onLayoutRootView}
					>
						<CopilotProvider 
							overlay='svg' 
							tooltipStyle={style} 
							arrowColor="#9FA8DA" 
							backdropColor="rgba(50, 50, 100, 0.9)"
							svgMaskPath={circleSvgPath}
						>
							<Routes />
						</CopilotProvider>
					</NavigationContainer>
				</SafeAreaProvider>
			</AuthProvider>
		</GlobalProvider>
	)
}
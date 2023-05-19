import { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Question from '../screens/Question'
import Profile from '../screens/Profile'

import Welcome from '../screens/Welcome'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

import { Drawer } from './drawer'

import { NavBar } from '../components/NavBar'

const Stack = createNativeStackNavigator()

export const UserRoutes = () => {
    const navigation = useNavigation()

    // useEffect(() => {
    //     (async () => {
    //         const isNotFirstTime = await AsyncStorage.getItem("@settings/not-first-time")

    //         if (isNotFirstTime) {
    //             navigation.navigate("Main")
    //         }
    //     })()
    // }, [])

    return (
        <Stack.Navigator
            initialRouteName={'Welcome'}
        >
            <Stack.Screen 
                name='Main' 
                component={Drawer}
                options={{
                    headerShown: false
                }} 
            />

            <Stack.Screen 
                name='Question' 
                component={Question}
                options={{
                    header: () => <NavBar isBackScreen title='Todas'></NavBar>
                }} 
            />

            <Stack.Screen 
                name='Profile' 
                component={Profile}
                options={{
                    header: () => <NavBar isBackScreen title='Perfil'></NavBar>
                }} 
            />

            <Stack.Screen 
                name='Welcome' 
                component={Welcome} 
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
}

export const AuthRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName='Welcome'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}
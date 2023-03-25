
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Question from '../screens/Question'
import Profile from '../screens/Profile'

import Welcome from '../screens/Welcome'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

import { Drawer } from './drawer'

import { NavBar } from '../components/NavBar'

const Stack = createNativeStackNavigator()

export const UserRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName='Main'
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
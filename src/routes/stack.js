import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useGlobal } from '../hooks/global'

import Question from '../screens/Question'
import Profile from '../screens/Profile'

import Welcome from '../screens/Welcome'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Login2 from '../screens/Login2'

import { Drawer } from './drawer'

import { NavBar } from '../components/NavBar'

const Stack = createNativeStackNavigator()

export const UserRoutes = () => {
    const { firstTime } = useGlobal()

    return (
        <Stack.Navigator
            initialRouteName={!firstTime ? 'Main' : 'Main'}
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
                    header: () => <NavBar isBackScreen title='Vocabulário'></NavBar>
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
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login2} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useGlobal } from '../hooks/global'

import Question from '../screens/Question'
import Report from '../screens/Report'
import Profile from '../screens/Profile'
import Welcome from '../screens/Welcome'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Login2 from '../screens/Login2'
import Words from '../screens/Words'
import Word from '../screens/Word'

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
                name='Report' 
                component={Report}
                options={{
                    header: () => <NavBar isBackScreen title='Reportar erro'></NavBar>
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

            <Stack.Screen 
                name='Words' 
                component={Words} 
                options={{
                    headerShown: false
                }} 
            />

            <Stack.Screen 
                name='Word' 
                component={Word}
                options={{
                    header: () => <NavBar isBackScreen title='Vocabulário'></NavBar>
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
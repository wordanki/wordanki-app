import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useGlobal } from '../hooks/global'

import Question from '../screens/Question'
import Profile from '../screens/Profile'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'

import { Drawer } from './drawer'

import { NavBar } from '../components/NavBar'

const Stack = createNativeStackNavigator()

export const UserRoutes = () => {
    const { firstTime } = useGlobal()

    return (
        <Stack.Navigator
            initialRouteName={firstTime ? 'Welcome' : 'Main'}
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

            <Stack.Screen 
                name='Login' 
                component={Login} 
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
}
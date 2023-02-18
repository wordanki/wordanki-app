import { View, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Ionicons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Categories from '../screens/Categories'
import Profile from '../screens/Profile'

import { NavBar } from '../components/NavBar'

import { COLORS } from '../theme'
import { styles } from './styles'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    header: () => <NavBar title='Home'></NavBar>
                }}
            />
        </Stack.Navigator>
    )
}

const CategoriesStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Tópicos" 
                component={Categories}
                options={{
                    header: () => <NavBar title='Tópicos'></NavBar>
                }} 
            />
        </Stack.Navigator>
    )
}

const ProfileStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    header: () => <NavBar title='Perfil'></NavBar>
                }}
            />
        </Stack.Navigator>
    )
}

const Tabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarIconStyle: styles.tabBarIconStyle,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarInactiveBackgroundColor: COLORS.BLACK_TERTIARY,
            tabBarActiveBackgroundColor:  COLORS.BLACK_SECONDARY, 
            tabBarActiveTintColor:  COLORS.WHITE
        }}
    >
        <Tab.Screen 
            name="Initial" 
            component={HomeStackNavigation} 
            options={{
                tabBarIcon: ({color, size, focused}) => {
                return (
                    <View style={styles.container}>
                        <Ionicons name="home-outline" size={size} color={focused ? COLORS.ORANGE : color} />
                        <Text style={styles.text}>Home</Text>
                    </View>
                );
                }
            }}
        />

        <Tab.Screen 
            name="Categories" 
            component={CategoriesStackNavigation} 
            options={{
                tabBarIcon: ({color, size, focused}) => {
                return (
                    <View style={styles.container}>
                        <Ionicons name="search-outline" size={size} color={focused ? COLORS.ORANGE : color} />
                        <Text style={styles.text}>Tópicos</Text>
                    </View>
                );
                }
            }}
        />

        <Tab.Screen 
            name="Profile" 
            component={ProfileStackNavigation} 
            options={{
                tabBarIcon: ({color, size, focused}) => {
                return (
                    <View style={styles.container}>
                        <Ionicons name="person-circle-outline" size={size} color={focused ? COLORS.ORANGE : color} />
                        <Text style={styles.text}>Perfil</Text>
                    </View>
                );
                }
            }}
        />
    </Tab.Navigator>
)

export { Tabs }
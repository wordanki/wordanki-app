import { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Animated, { EasingNode } from 'react-native-reanimated';

import { transparentize } from 'polished'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Icon, { IconType } from "react-native-dynamic-vector-icons";

import Home from '../screens/Home'
import Categories from '../screens/Categories'
import Profile from '../screens/Profile'
import Words from '../screens/Words'

import { NavBar } from '../components/NavBar'

import { COLORS } from '../theme'
import { styles } from './styles'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const windowWidth = Dimensions.get('window').width
const tabWidth = windowWidth / 4

const MyTabBar = ({ name, component }) => () => (
    <Stack.Navigator>
        <Stack.Screen 
            name={name} 
            component={component} 
            options={{
                header: () => <NavBar title={name}></NavBar>
            }}
        />
    </Stack.Navigator>
)

const TabsContent = [
    { route: { tab: 'Initial', screen: 'Início' }, label: 'Início', type: IconType.Ionicons, activeIcon: 'home-outline', inActiveIcon: 'grid-outline', component: MyTabBar({ name: "Início", component: Home }) },
    // { route: { tab: 'Topics', screen: 'Missões' }, label: 'Missões', type: IconType.Ionicons, activeIcon: 'md-trophy-outline', inActiveIcon: 'md-trophy-outline', component: MyTabBar({ name: "Missões", component: Categories }) },
    // { route: { tab: 'Words', screen: 'Palavras' }, label: 'Palavras', type: IconType.MaterialCommunityIcons, activeIcon: 'format-letter-case', inActiveIcon: 'grid-outline', component: MyTabBar({ name: "Palavras", component: Words }) },
    // { route: { tab: 'Profile', screen: 'Progresso' }, label: 'Progresso', type: IconType.Ionicons, activeIcon: 'analytics-outline', inActiveIcon: 'grid-outline', component: MyTabBar({ name: "Progresso", component: Profile }) },
];

const TabBar = ({ state, descriptors, navigation }) => {
    const [translateX] = useState(new Animated.Value(0))

    const translateTab = (index) => {
        Animated.timing(translateX, {
            toValue: index * tabWidth,
            duration: 150,
            easing: EasingNode.inOut(EasingNode.bounce),
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        translateTab(state.index)
    }, [state.index])

    return (
        <View style={styles.globalTabContainer}>
            <View style={styles.tabsContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key]

                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        })
            
                        if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name)
                        }
                    }
            
                    const onLongPress = () => {
                        navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                        });
                    }
            
                    const tab = TabsContent[index]

                    return <View />

                    // return (
                    //     <TouchableOpacity
                    //         activeOpacity={0.5}
                    //         accessibilityRole='button'
                    //         accessibilityState={isFocused ? { selected: true } : {}}
                    //         accessibilityLabel={options.tabBarAccessibilityLabel}
                    //         testID={options.tabBarTestID}
                    //         onPress={onPress}
                    //         onLongPress={onLongPress}
                    //         key={index}
                    //     >
                    //         <View  style={[styles.tabContainer]}>
                    //                 <View style={[styles.icon, { backgroundColor: isFocused ? transparentize(0.85, COLORS.BLUE) : COLORS.TRANSPARENT }]}>
                    //                     <Icon
                    //                         name={tab.activeIcon}
                    //                         type={tab.type}
                    //                         size={20} 
                    //                         color={isFocused ? COLORS.BLUE : COLORS.BLACK_SECONDARY}
                    //                     />
                    //                 </View >

                    //                 <Text style={[styles.text, { fontWeight: isFocused ? "500" : "normal", color: isFocused ? COLORS.BLUE : COLORS.BLACK_SECONDARY }]}>
                    //                     {tab.label}
                    //                 </Text>
                    //             </View>
                    //     </TouchableOpacity>
                    // )
                })}
            </View>

            {/* <View style={styles.slidingTabContainer}>
                <Animated.View style={[styles.slidingTab, { transform: [{translateX}] }]} />
            </View> */}
        </View>
    )
}

export const Tabs = () => (
    <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
            headerShown: false,
        }}
    >
        {TabsContent.map((tab, index) => (
            <Tab.Screen key={index} 
                name={tab.route.tab} 
                component={tab.component}
            />
        ))}
    </Tab.Navigator>
)
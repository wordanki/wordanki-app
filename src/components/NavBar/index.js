import { useNavigation } from '@react-navigation/native'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import { COLORS } from '../../theme'

import { styles } from "./styles"

export const NavBar = ({ title, isBackScreen, children }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.ActionButtonContainer}>
                    {
                        !isBackScreen ? (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Ionicons 
                                    name="menu-outline" 
                                    size={35} 
                                    color={COLORS.BLACK_SECONDARY} 
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => navigation.replace('Main')}>
                                <AntDesign 
                                    name="close" 
                                    size={32} 
                                    color={COLORS.BLACK_SECONDARY} 
                                />
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{ title }</Text>
                </View>

                <View style={styles.UserPhotoContainer}>
                    <View style={{ width: 30, height: 10 }}></View>
                </View>
            </View>
        </View>
    )
}
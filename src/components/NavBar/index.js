import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

import { UserPhoto } from '../UserPhoto'

import { COLORS } from '../../theme'

import { styles } from "./styles"

const heightTop = Dimensions.get('screen').height - Dimensions.get('window').height;

export const NavBar = ({ title, isBackScreen, children }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.ActionButtonContainer}>
                    {
                        !isBackScreen ? (
                            <TouchableOpacity disabled style={{ opacity: 0 }} onPress={() => navigation.openDrawer()}>
                                <Ionicons 
                                    name="menu-outline" 
                                    size={35} 
                                    color={COLORS.GRAY_SECONDARY} 
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <AntDesign 
                                    name="arrowleft" 
                                    size={32} 
                                    color={COLORS.GRAY_SECONDARY} 
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
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { COLORS } from '../../theme'

import { styles } from "./styles"

export const NavBar = ({ title, children }) => {
    const navigation = useNavigation()

    const handleMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            <Ionicons.Button
                onPress={handleMenu}
                backgroundColor={COLORS.TRANSPARENT}
                color={COLORS.WHITE}
                name='menu-outline' 
                size={28    }  
            />

            <Text style={styles.title}>{ title }</Text>
        </View>
    )
}
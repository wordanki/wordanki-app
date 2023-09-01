import { View, Text, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { COLORS } from '../../theme'
import { styles } from './styles'

export const ButtonDrawer = ( { iconName, text, handle } ) => {
    return (
        <TouchableOpacity onPress={() => handle()} style={styles.container}>
                <Ionicons name={iconName} size={20} color={COLORS.BLACK_SECONDARY} style={{marginRight: 16}} />

                <Text style={styles.buttonText}>
                    {text}
                </Text>
        </TouchableOpacity>
    );
}
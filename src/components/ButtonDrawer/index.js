import { View, Text, TouchableHighlight } from 'react-native'
import Icon, { IconType } from "react-native-dynamic-vector-icons"
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../theme'
import { styles } from './styles'

export const ButtonDrawer = ( { iconName, text, handle } ) => {
    return (
        <TouchableHighlight onPress={() => handle()} style={styles.container}>
            <View style={styles.content}>
                <Ionicons name={iconName} size={24} color="#ffffffbb" style={{marginRight: 16}} />

                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableHighlight>
    );
}
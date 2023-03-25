import { View, Text, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { FancyAlert } from 'react-native-expo-fancy-alerts'

import { COLORS } from "../../theme"

import { styles } from './styles'

const settings = {
    success: {
        icon: 'check',
        color: COLORS.GREEN_PRIMARY
    },
    error: {
        icon: 'close',
        color: COLORS.RED
    }
}

export const Alert = ({ 
    visible, 
    setIsVisible, 
    message, 
    type,
    handleSuccess
}) => {
    return (
        <FancyAlert
            visible={visible}
            icon={
                <View style={[styles.iconContainer, { backgroundColor: settings[type].color }]}>
                    <AntDesign
                        name={settings[type].icon}
                        size={28}
                        color={COLORS.WHITE}
                    />
                </View>
            }
            style={{ backgroundColor: 'white' }}
        >
            <View style={styles.container}>
                <Text style={styles.message}>
                    {message}
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        setIsVisible(!visible)
                        
                        if (type === 'success') handleSuccess()
                    }} 
                >
                    <Text style={styles.buttonText}>
                        Okay
                    </Text>

                </TouchableOpacity>
            </View>
        </FancyAlert>
    )
}
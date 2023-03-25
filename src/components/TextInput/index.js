import { useState } from "react"

import { 
    View, 
    Text, 
    TouchableOpacity,
    TextInput as ReactNativeTextInput 
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { COLORS } from "../../theme"

import { styles } from './styles'

export const TextInput = ({ 
    isSecure, 
    label, 
    value, 
    placeholder, 
    fontAwesomeIconName, 
    onChangeText,
    ...rest
}) => {
    const [isShown, setIsShown] = useState(false)

    const handleEyes = () => {
        setIsShown(!isShown)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.textInputContainer}>
                <FontAwesome 
                    name={fontAwesomeIconName} 
                    size={22} 
                    color={COLORS.WHITE} 
                />

                <ReactNativeTextInput
                    style={styles.textInput}
                    secureTextEntry={isSecure && !isShown}
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor={COLORS.GRAY_PRIMARY}
                    onChangeText={onChangeText}
                    {...rest}
                />

                {isSecure && (
                    <TouchableOpacity style={styles.eyesButton} onPress={handleEyes}>
                        <FontAwesome 
                            name={isShown ? "eye-slash" : "eye"} 
                            size={18} 
                            color={COLORS.GRAY_SECONDARY} 
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
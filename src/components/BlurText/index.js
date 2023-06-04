import { Text } from 'react-native'

import { COLORS } from "../../theme"

import { styles } from './styles'

export const BlurText = ({  text }) => {
    return (
        <Text style={styles.text}>{text}</Text>
    )
}
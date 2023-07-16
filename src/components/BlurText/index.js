import { View, Text } from 'react-native'

import { styles } from './styles'

export const BlurText = ({ text }) => {
    const textSplited = text.split(' ')

    return (
        <View style={styles.container}>
            {textSplited.map((word, index) => (
                <View key={index}>
                    <View style={styles.innerHiddenWord} />
                    <Text style={styles.hiddenWord}>{word + " "}</Text>
                </View>
            ))}
        </View>
    )
}
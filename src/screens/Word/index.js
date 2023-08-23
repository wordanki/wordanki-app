import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { styles } from './styles'

export default function Word() {
    const route = useRoute();

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.translations}>
                <Text style={styles.originalWord}>{route.params.word}</Text>
                <Text style={styles.translatedWord}>{route.params.translation}</Text>
            </View>

            <Text style={styles.title}>Descrição</Text>
            <View style={styles.description}>
                <Text style={styles.textDescription}>{route.params.description}</Text>
            </View>

            <Text style={styles.title}>Exemplo de frase</Text>
            <View style={styles.phrases}>
                <View style={styles.phrase}>
                    <Text style={styles.originalPhrase}>{route.params.originalPhrase}</Text>
                    <Text style={styles.translatedPhrase}>{route.params.translatedPhrase}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
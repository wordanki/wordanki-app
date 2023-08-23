import { useState } from 'react'
import { View, Text, ScrollView, TouchableHighlight, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { styles } from './styles'

export default function Word() {
    const route = useRoute()
    const [text, setText] = useState("")
    const [sending, setSending] = useState(false)
    const [type, setType] = useState('')

    const handleSend = async (text) => {

    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Reportar problema</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder='Escreva o problema encontrado no aplicativo'
                placeholderTextColor={"#aaaaaa"}
                multiline={true}
                numberOfLines={4}
                textAlignVertical='top'
            />
            <TouchableHighlight onPress={handleSend} style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Enviar</Text>
                </View>
            </TouchableHighlight>
        </ScrollView>
    )
}
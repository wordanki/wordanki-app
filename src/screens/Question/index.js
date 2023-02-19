import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import * as Speech from 'expo-speech';

import { COLORS } from "../../theme"

import { styles } from "./styles"

export default function Profile({ route }) {
    const [isSelectedWord, setIsSelectedWord] = useState()

    const answers = ['Casa', 'Cavalo', 'Acredito', 'Alface', 'Não sei']

    const handleSound = () => {
        Speech.speak('I dont believe in you!', {
            language: 'en'
        });
    }

    return (
        <View style={styles.container}>     
            <View style={styles.questionContainer}>
                <Text style={styles.question}>
                    I don't <Text style={styles.word}>believe</Text> in ghosts at all.
                </Text>

                <TouchableOpacity onPress={handleSound}>
                    <AntDesign 
                        name="sound" 
                        size={30} 
                        color={COLORS.GRAY_SECONDARY} 
                    />
                </TouchableOpacity>
            </View>

            <View>
                {answers.map(answer => (
                    <TouchableOpacity 
                        key={answer}
                        style={{...styles.answerButton, backgroundColor: isSelectedWord === answer  ? COLORS.GREEN : COLORS.TRANSPARENT}} 
                        onPress={() => setIsSelectedWord(answer)} 
                    >
                        <Text 
                            style={styles.answerText}
                        >
                            {answer}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {isSelectedWord && (
                <View style={styles.translation}>
                    <Text style={styles.translationText}>
                        Eu não <Text style={styles.word}>acredito</Text> em fantasmas de jeito nenhum.
                    </Text>
                </View>
            )}
        </View>
    )
}
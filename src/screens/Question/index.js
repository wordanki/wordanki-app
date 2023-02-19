import { useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons'
import * as Speech from 'expo-speech';

import { COLORS } from "../../theme"

import { styles } from "./styles"

export default function Profile({ route }) {
    const [isSelectedWord, setIsSelectedWord] = useState()
    const [word, setWord] = useState("believe")
    const [sentence, setSentence] = useState("I don't believe in ghosts at all.")
    const answers = ['Casa', 'Cavalo', 'Acredito', 'Alface']

    const handleSound = () => {
        Speech.stop();
        Speech.speak(sentence, {
            language: 'en'
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={handleSound} style={styles.soundButton}>
                    <AntDesign 
                        name="sound" 
                        size={30} 
                        color={Speech.isSpeakingAsync ? COLORS.GRAY_SECONDARY : "red"} 
                    />
                </TouchableHighlight>
                <Text style={styles.question}>
                    {/* {sentence.split(' ', ',', '.').forEach(element => {
                        element === word ? (<Text styles={styles.word}>{element}</Text>) : element
                    })} */}
                    I don't <Text style={styles.word}>believe</Text> in ghosts at all.
                </Text>
            </View>

            <View>
                {answers.map(answer => (
                    <TouchableHighlight 
                        key={answer}
                        style={{
                            ...styles.answerButton, 
                            backgroundColor: isSelectedWord === answer  ? "#30B956" : "#31313E",
                            borderColor: isSelectedWord === answer ? "#38D664" : "#414153",
                        }} 
                        onPress={() => setIsSelectedWord(answer)}
                    >
                        <Text style={styles.answerText}>
                            {answer}
                        </Text>
                    </TouchableHighlight>
                ))}
                <TouchableHighlight 
                    key={"Não sei"}
                    style={{
                        ...styles.answerButton,
                        backgroundColor: "#145C7E",
                        borderColor: "#0E79A9",
                    }} 
                    onPress={() => setIsSelectedWord("Não sei")} 
                >
                    <Text style={styles.answerText}>Não sei</Text>
                </TouchableHighlight>
            </View>

            {isSelectedWord ? (
                <View style={{...styles.translation, borderColor: "#0E79A9"}}>
                    <Text style={styles.translationText}>
                        Eu não <Text style={styles.word}>acredito</Text> em fantasmas de jeito nenhum.
                    </Text>
                </View>
            ) : (
                <View style={{...styles.translation, borderColor: "#383842"}}>
                    <Text style={{...styles.translationText, color: "#aaaaaa",}}>
                        A tradução da frase irá aparecer aqui depois que você clicar na resposta
                    </Text>
                </View>
            )}

            <View style={styles.buttonsContainer}>
                {isSelectedWord && <TouchableHighlight style={styles.changeWord}>
                    <>
                        <Text style={styles.textChangeWord}>Próxima</Text>
                        <FontAwesome5 name="arrow-right" size={24} color="#dddddd"/>
                    </>
                </TouchableHighlight>}
            </View>
        </View>
    )
}
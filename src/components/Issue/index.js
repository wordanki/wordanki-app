import { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'

import { 
    View, Text, TouchableHighlight, 
    Animated, Easing 
} from 'react-native'

import * as Speech from 'expo-speech';

import { AntDesign } from '@expo/vector-icons'

import Word from '../../database/models/Word';

import { spacedRepetition } from '../../utils/spacedRepetition'

import { COLORS } from '../../theme'
import { styles } from './styles'

export const Issue = forwardRef(({ data, nextWord, setNextWord }, parentRef) => {
    const [level, setLevel] = useState(0);
    const [newWord, setNewWord] = useState(true);
    const [wordSelected, setWordSelected] = useState(false);

    const [timeoutNext, setTimeoutNext] = useState();
    const [progressNextWord] = useState(new Animated.Value(0))

    const [isSelectedWord, setIsSelectedWord] = useState(false);

    useImperativeHandle(parentRef, () => ({
        play,
        stop
    }))

    const play = async () => {
        const isSpeaking = await Speech.isSpeakingAsync()
    
        if (isSpeaking) await Speech.stop()

        Speech.speak(data.phrase.join(), { language: 'en' })
    }

    const stop = async () => {
        Speech.stop()
    }

    async function answerEvent(right, index) {
        try {
            setIsSelectedWord(true)
            setWordSelected(index)

            const { next_repetition } = spacedRepetition(right, data.hits, data.next_repetition, data.previous_repetition)

            await Word.update(data.id, {
                hits: right ? data.hits + 1 : data.hits,
                next_repetition: new Date(next_repetition).toISOString(),
                previous_repetition: data.next_repetition || new Date().toISOString(),
            })

            // if (!newWord) {
            //     const levelWord = data.indexGenerated * 10

            //     switch (right) {
            //         case true:
            //             if (levelWord > level) {
            //                 setLevel(level + 1)
            //                 break;
            //             }
            //         default:
            //             if (levelWord < level) {
            //                 setLevel(level - 1)
            //             }
            //     }
            // }

            // setTimeoutNext(
            //     setTimeout(() => setNextWord(!nextWord), 6000)
            // )

            setNextWord(!nextWord)

            // progressNextWord.setValue(0), anime.start()
        } catch (error) { console.log(error) }
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={() => play(data.phrase.join())} style={styles.soundButton}>
                    <AntDesign
                        name="sound"
                        size={30}
                        color={"#2C9ED2"}
                    />
                </TouchableHighlight>

                <Text style={styles.question}>
                    {data.phrase[0]}
                    <Text style={styles.word}>{data.phrase[1]}</Text>
                    {data.phrase[2]}
                </Text>
            </View>

            <View>
                {data.answers.map((answer, index) => (
                    <TouchableHighlight
                        key={index}
                        disabled={isSelectedWord}
                        style={{
                            ...styles.answerButton,
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? "#2BAA4F" : "#9B3D42") : "#444855",
                        }}
                        onPress={() => answerEvent(index === data.correctAsnwerIndex, index)}
                    >
                        <View style={{
                            ...styles.answerButtonContainer,
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? "#2BAA4F" : "#9B3D42") : "#444855",
                            borderColor: isSelectedWord && (data.correctAsnwerIndex == index || wordSelected == index) ? (data.correctAsnwerIndex == index ? "#2BAA4F" : "#9B3D42") : "#444855"
                        }}>
                            <Text style={styles.answerText}>
                                {answer}
                            </Text>
                        </View>
                    </TouchableHighlight>
                ))}

                <TouchableHighlight
                    disabled={isSelectedWord}
                    style={styles.answerButton}
                    onPress={() => { answerEvent(false, -1) }}
                >
                    <View style={{
                        ...styles.answerButtonContainer,
                        backgroundColor: "#0A7CB1",
                        borderColor: "#0A7CB1",
                    }}>
                        <Text style={styles.answerText}>Não sei</Text>
                    </View>
                </TouchableHighlight>
            </View>

            {isSelectedWord ? (
                <View style={{ ...styles.translation, borderColor: "#0A7CB1bb", fontSize: 40 }}>
                    <Text style={{ ...styles.translationText, fontSize: 25 }}>
                        {data.translatedPhrase[0]}
                        <Text style={styles.translationWord}>{data.translatedPhrase[1]}</Text>
                        {data.translatedPhrase[2]}
                    </Text>
                </View>
            ) : (
                <View style={styles.translation}>
                    <Text style={{ ...styles.translationText, color: "#bbbbbb", }}>
                        A tradução da frase irá aparecer aqui depois que você clicar na resposta
                    </Text>
                </View>
            )}

            {/* <View style={styles.buttonsContainer}>
                {isSelectedWord && (
                    <TouchableHighlight style={styles.next} onPress={() => { clearTimeout(timeoutNext); setNextWord(!nextWord) }}>
                        <View style={styles.nextContainer}>
                            <Text style={styles.textChangeWord}>Próxima</Text>

                            <AntDesign name="arrowright" size={25} color="#dddddd" />
                            <Animated.View style={[styles.progressBar, { width: progressNextWord }]}></Animated.View>
                        </View>
                    </TouchableHighlight>
                )}
            </View> */}
        </View>
    )
})
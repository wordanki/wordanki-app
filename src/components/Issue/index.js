import { useState, forwardRef, useImperativeHandle } from 'react'

import {
    View, Text, TouchableHighlight,
    Animated, Easing, ImageBackground
} from 'react-native'

import * as Speech from 'expo-speech'

import { AntDesign } from '@expo/vector-icons'

import { BlurText } from '../../components/BlurText'

import Word from '../../database/models/Word'
import Information from '../../database/models/Information'

import { spacedRepetition } from '../../utils/spacedRepetition'

import { COLORS } from '../../theme'
import { styles } from './styles'

export const Issue = forwardRef(({ data, nextWord, setNextWord, bgColor, level, setLevel }, parentRef) => {
    const [wordSelected, setWordSelected] = useState(false)

    const [progressNextWord] = useState(new Animated.Value(0))
    const [arrowPosition] = useState(new Animated.Value(0))

    const [isSelectedWord, setIsSelectedWord] = useState(false)

    useImperativeHandle(parentRef, () => ({
        play,
        stop
    }))

    Animated.loop(
        Animated.sequence([
            Animated.timing(arrowPosition, {
                toValue: 10,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing(arrowPosition, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            })
        ])
    ).start()

    const progressBarAnime = Animated.timing(progressNextWord, {
        toValue: 100,
        duration: 5000,
        useNativeDriver: false,
        easing: Easing.linear
    });

    const play = async () => {
        const isSpeaking = await Speech.isSpeakingAsync()

        if (isSpeaking) await Speech.stop()

        Speech.speak(data.phrase.join(), { language: 'en' })
    }

    const stop = async () => await Speech.stop()

    async function answerEvent(right, index) {
        try {
            setIsSelectedWord(true)
            setWordSelected(index)

            const next_repetition = spacedRepetition(right, data.hits, data.next_repetition, data.previous_repetition)

            await Word.update(data.id, {
                hits: right ? data.hits + 1 : data.hits,
                next_repetition: new Date(next_repetition).toISOString(),
                previous_repetition: data.next_repetition || new Date().toISOString(),
            })

            if (data.newWord) {
                let newLevel = level

                if (right && data.level > level) {
                    newLevel = level + 1
                } else if (!right && data.level < level) {
                    newLevel = level - 1
                }

                await Information.updateLevel(newLevel)

                setLevel(newLevel)
            }

            progressNextWord.setValue(0)
            progressBarAnime.start()

            setNextWord(!nextWord)
        } catch (error) {}
    };

    return (
        <View style={styles.container}>
            {isSelectedWord && (
                <View style={styles.progressBarContainer}>
                    <Animated.View style={[styles.progressBar, {
                        width: progressNextWord.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"]
                        })
                    }]} />
                </View>
            )}

            <View style={styles.questionContainer}>
                <View>
                    {/* {true && (
                        <View style={styles.tagContainer}>
                            <Text style={styles.tagText}>Revisão</Text>
                        </View>
                    )} */}

                    <TouchableHighlight onPress={() => play(data.phrase.join())}>
                        <AntDesign
                            name="sound"
                            size={30}
                            color={"#2C9ED2"}
                        />
                    </TouchableHighlight>
                </View>

                <Text style={styles.question}>
                    {data.phrase[0]}
                    <Text style={styles.word}>{data.phrase[1]}</Text>
                    {data.phrase[2]}
                </Text>
            </View>

            <View style={styles.answersContainer}>
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
                    style={[styles.answerButton, { marginBottom: 0 }]}
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



            {/* {!isSelectedWord ? ( */}
            <View style={{ ...styles.translation, borderColor: "#0A7CB1bb" }}>
                {!isSelectedWord ?
                    <BlurText text={data.translatedPhrase.join()} />
                    : (
                        <Text style={{ ...styles.translationText }}>
                            {data.translatedPhrase[0]}
                            <Text style={styles.translationWord}>{data.translatedPhrase[1]}</Text>
                            {data.translatedPhrase[2]}
                        </Text>
                    )}
            </View>

            {isSelectedWord && (
                <Animated.View style={[styles.arrowContainer, { bottom: arrowPosition }]}>
                    <AntDesign name="down" size={25} color="#ffffffbb" />
                </Animated.View>
            )}
        </View>
    )
})
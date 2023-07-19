import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'

import { View, Text, TouchableHighlight, Animated, Easing } from 'react-native'

import * as Speech from 'expo-speech'

import { AntDesign } from '@expo/vector-icons'

import { BlurText } from '../../components/BlurText'

import { useGlobal } from '../../hooks/global'

import Word from '../../database/models/Word'
import Information from '../../database/models/Information'

import { spacedRepetition } from '../../utils/spacedRepetition'

import { COLORS } from '../../theme'
import { styles, defaultSpacing } from './styles'

export const Issue = forwardRef(({ data, nextWord, setNextWord, goToLast }, parentRef) => {
    const [isSelectedWord, setIsSelectedWord] = useState(false)
    const [wordSelected, setWordSelected] = useState(false)
    const [showArrow, setShowArrow] = useState(false)

    const [progressNextWord] = useState(new Animated.Value(0))
    const [arrowPosition] = useState(new Animated.Value(0))

    const { level, setLevel } = useGlobal()

    useImperativeHandle(parentRef, () => ({
        play,
        scroll
    }))

    const progressBarAnime = Animated.timing(progressNextWord, {
        toValue: 100,
        duration: 6000,
        useNativeDriver: false,
        easing: Easing.linear
    })

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

    const play = async (force) => {
        const isSpeaking = await Speech.isSpeakingAsync()

        if (isSpeaking) await Speech.stop()

        if (data.clickedAnswerIndex === null || force) {
            Speech.speak(data.phrase.join(""), { language: "en" })
        }
    }

    const scroll = () => {
        progressBarAnime.stop()
        progressNextWord.setValue(0)
    }

    async function answerEvent(right, index) {
        data.clickedAnswerIndex = index

        setIsSelectedWord(true)
        setWordSelected(index)
        setShowArrow(true)

        const next_repetition = spacedRepetition(right, data.hits, data.next_repetition, data.previous_repetition)

        try {
            await Word.update(data.id, {
                hits: right ? data.hits + 1 : data.hits,
                next_repetition: new Date(next_repetition).toISOString(),
                previous_repetition: data.next_repetition || new Date().toISOString(),
            })
        } catch (error) {
            console.log(`[ERROR: UPDATE WORD]: ${error.messsage}`)
        }

        if (data.isNewWord) {
            let newLevel = level

            if (right && data.level > level) {
                newLevel = level + 1
            } else if (!right && data.level < level) {
                newLevel = level - 1
            }

            try {
                await Information.updateLevel(newLevel)
            } catch (error) {
                console.log(`[ERROR: UPDATE LEVEL]: ${error.messsage}`)
            }

            setLevel(newLevel)
        }

        progressNextWord.setValue(0)
        progressBarAnime.start()

        setNextWord(!nextWord)
    }

    useEffect(() => {
        if (data.clickedAnswerIndex !== null) {
            setIsSelectedWord(true)
            setShowArrow(true)

            setWordSelected(data.clickedAnswerIndex)
        }
    }, [])

    return (
        <View style={[styles.container, { backgroundColor: COLORS.BLACK_PRIMARY }]}>
            {!data.isNewWord && (
                <View style={styles.tagContainer}>
                    <Text style={styles.tagText}>Revisão</Text>
                </View>
            )}

            <View style={[styles.progressBarContainer, { backgroundColor: data.clickedAnswerIndex === null && isSelectedWord ?  COLORS.WHITE + 11 : COLORS.BLACK_PRIMARY  }]}>
                {isSelectedWord && (
                    <Animated.View style={[styles.progressBar, {
                        width: progressNextWord.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"]
                        })
                    }]} />
                )}
            </View>

            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={() => play(true)} style={{borderRadius: 5}}>
                    <AntDesign
                        name="sound"
                        size={27}
                        color={"#44AEDF"}
                        style={{backgroundColor: "#222228", borderRadius: 5}}
                    />
                </TouchableHighlight>

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
                        onPress={() => answerEvent(index === data.correctAsnwerIndex, index)}
                        style={[styles.answerButtonContainer, {
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? "#298F47" : "#aB3D42") : "#3D404C"
                        }]}
                    >
                        <View style={[styles.answerButton, {
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? "#298F47" : "#aB3D42") : "#3D404C",
                            borderColor: isSelectedWord && (data.correctAsnwerIndex == index || wordSelected == index) ? (data.correctAsnwerIndex == index ? "#298F47" : "#aB3D42") : "#3D404C"
                        }]}>
                            <Text style={styles.answerText}>
                                {answer}
                            </Text>
                        </View>
                    </TouchableHighlight>
                ))}

                <TouchableHighlight
                    disabled={isSelectedWord}
                    style={[styles.answerButtonContainer, { backgroundColor: "#266E91" }]}
                    onPress={() => answerEvent(false, -1)}
                >
                    <View style={[styles.answerButton, { backgroundColor: "#266E91", borderColor: "#266E91" }]}>
                        <Text style={styles.answerText}>Não sei</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={[styles.translation, { paddingRight: isSelectedWord ? (defaultSpacing / 1.5) : (defaultSpacing / 1.5) - 4 }]}>
                <Text style={styles.translationLabel}>Tradução</Text>

                {!isSelectedWord ?
                    (
                        <BlurText text={data.translatedPhrase.join('')} />
                    )
                    : (
                        <Text style={styles.translationText}>
                            {data.translatedPhrase[0]}
                            <Text style={styles.translationWord}>{data.translatedPhrase[1]}</Text>
                            {data.translatedPhrase[2]}
                        </Text>
                    )}
            </View>

            {showArrow && (
                <Animated.View style={[styles.arrowContainer, { bottom: arrowPosition }]}>
                    <TouchableHighlight onPress={goToLast} style={{borderRadius: 5}}>
                        <AntDesign
                            name="down"
                            size={22}
                            color={COLORS.WHITE + "bb"} 
                            style={{backgroundColor: "#222228", padding: 5, borderRadius: 5}}
                        />
                    </TouchableHighlight>
                </Animated.View>
            )}
        </View>
    )
})
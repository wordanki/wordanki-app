import { useState, forwardRef, useImperativeHandle, useEffect, useCallback } from 'react'

import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native'

import * as Speech from 'expo-speech'

import { AntDesign, Entypo } from '@expo/vector-icons'

import { BlurText } from '../../components/BlurText'

import { useGlobal } from '../../hooks/global'

import Word from '../../database/models/Word'
import Language from '../../database/models/Language'
import Statistic from '../../database/models/Statistic'

import { spacedRepetition } from '../../utils/spacedRepetition'

import { COLORS } from '../../theme'
import { styles, defaultSpacing } from './styles'
import { transparentize } from 'polished'

export const Issue = forwardRef(({ data, nextWord, setNextWord, goToLast }, parentRef) => {
    const [isSelectedWord, setIsSelectedWord] = useState(false)
    const [wordSelected, setWordSelected] = useState(false)
    const [showArrow, setShowArrow] = useState(false)

    const [progressNextWord] = useState(new Animated.Value(0))
    const [arrowPosition] = useState(new Animated.Value(0))

    const { language, level, setLevel } = useGlobal()

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
            Speech.speak(data.phrase.join(""), { language: language.to })
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
        setNextWord(!nextWord)

        progressNextWord.setValue(0)
        progressBarAnime.start()

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

            setLevel(newLevel)

            try {
                await Language.updateLevelById(1, newLevel)
            } catch (error) {
                console.log(`[ERROR: UPDATE LEVEL]: ${error.messsage}`)
            }
        }

        try {
            await Statistic.create({
                word_id: data.id,
                type: data.isNewWord ? 1 : 0,
                datest: new Date().toISOString()
            })
        } catch(error) {
            console.log(`[ERROR: CREATE STATISTIC]: ${error.messsage}`)
        }
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
            {(
                <View style={[styles.tagContainer, { backgroundColor: transparentize(0.85, data.isNewWord ? COLORS.GREEN_PRIMARY : COLORS.BLUE) }]}>
                    <Text style={[styles.tagText, { color: data.isNewWord ? COLORS.BLACK_SECONDARY + "bb" : COLORS.BLACK_SECONDARY + "bb" }]}>{data.isNewWord ? "Novo" : "Revisão"}</Text>
                </View>
            )}

            <View style={[styles.progressBarContainer, { backgroundColor: data.clickedAnswerIndex === null && isSelectedWord ? COLORS.WHITE + 11 : COLORS.BLACK_PRIMARY }]}>
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
                <TouchableOpacity onPress={() => play(true)} style={{ borderRadius: 5 }}>
                    <AntDesign
                        name="sound"
                        size={27}
                        color={COLORS.BLACK_SECONDARY + 'bb'}
                    />
                </TouchableOpacity>

                <Text style={styles.question}>
                    {data.phrase[0]}
                    <Text style={styles.word}>{data.phrase[1]}</Text>
                    {data.phrase[2]}
                </Text>
            </View>

            <View style={styles.answersContainer}>
                {data.answers.map((answer, index) => (
                    <TouchableOpacity
                        key={index}
                        disabled={isSelectedWord}
                        onPress={() => answerEvent(index === data.correctAsnwerIndex, index)}
                        style={[styles.answerButtonContainer, {
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? COLORS.GREEN_PRIMARY : "#aB3D42") : COLORS.WHITE
                        }]}
                    >
                        <View style={[styles.answerButton, {
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? COLORS.GREEN_PRIMARY : "#aB3D42") : COLORS.WHITE,
                            borderColor: isSelectedWord && (data.correctAsnwerIndex == index || wordSelected == index) ? (data.correctAsnwerIndex == index ? COLORS.GREEN_PRIMARY : "#aB3D42") : COLORS.WHITE
                        }]}>
                            <Text style={[styles.answerText, { color: isSelectedWord && wordSelected == index ? COLORS.WHITE : COLORS.BLACK_SECONDARY }]}>
                                {answer}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    disabled={isSelectedWord}
                    style={[styles.answerButtonContainer, { backgroundColor: "#266E91" }]}
                    onPress={() => answerEvent(false, -1)}
                >
                    <View style={[styles.answerButton, { backgroundColor: transparentize(0.25, COLORS.BLUE), borderColor: transparentize(0.25, COLORS.BLUE) }]}>
                        <Text style={[styles.answerText, { color: COLORS.WHITE }]}>Não sei</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.translation, { paddingRight: isSelectedWord ? (defaultSpacing / 1.5) : (defaultSpacing / 1.5) - 4 }]}>
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
                    <TouchableOpacity onPress={goToLast}>
                        <AntDesign
                            name="down"
                            size={22}
                            color={COLORS.BLACK_SECONDARY + 'bb'}
                        />
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    )
})
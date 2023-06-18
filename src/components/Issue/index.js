import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'

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

export const Issue = forwardRef(({ data, nextWord, setNextWord, bgColor, level, setLevel, clicked, setClicked, indexData }, parentRef) => {
    const [wordSelected, setWordSelected] = useState(false)

    const [progressNextWord] = useState(new Animated.Value(0))
    const [arrowPosition] = useState(new Animated.Value(0))

    const [isSelectedWord, setIsSelectedWord] = useState(false)

    useImperativeHandle(parentRef, () => ({
        play,
        stop,
        isScroll
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

    const play = async (activation) => {
        const isSpeaking = await Speech.isSpeakingAsync()
        if (isSpeaking) await Speech.stop()
        
        if(clicked[indexData] == null || activation == "button") {
            Speech.speak(data.phrase.join(), { language: 'en' })
        }
    }

    const stop = async () => await Speech.stop()

    const isScroll = () => progressNextWord.setValue(0)

    useEffect(() => {
        if(clicked[indexData] != null) {
            setIsSelectedWord(true)
            setWordSelected(clicked[indexData])
        }
    }, [])

    async function answerEvent(right, index) {
        try {
            let arrayClicked = clicked
            arrayClicked[indexData] = index
            setClicked(arrayClicked)

            setIsSelectedWord(true)
            setWordSelected(index)

            const next_repetition = spacedRepetition(right, data.hits, data.next_repetition, data.previous_repetition)

            await Word.update(data.id, {
                hits: right ? data.hits + 1 : data.hits,
                next_repetition: new Date(next_repetition).toISOString(),
                previous_repetition: data.next_repetition || new Date().toISOString(),
            })

            if (data.isNewWord) {
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

    // useEffect(() => {
    //     // progressBarAnime.stop();
    //     progressNextWord.setValue(50);
    //     // console.log("teste");
    // }, [scroll]);

    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            {/* <View style={styles.topLine}></View> */}
            <View style={styles.progressBarContainer}>
                {isSelectedWord && (
                    <Animated.View style={[styles.progressBar, {
                        width: progressNextWord.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"]
                        })
                    }]} />
                )}
            </View>

            {!data.isNewWord && (
                <View style={styles.tagContainer}>
                    <Text style={styles.tagText}>Revisão</Text>
                </View>
            )}

            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={() => play("button")}>
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

            <View style={styles.answersContainer}>
                {data.answers.map((answer, index) => (
                    <TouchableHighlight
                        key={index}
                        disabled={isSelectedWord}
                        style={{
                            ...styles.answerButtonContainer,
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.correctAsnwerIndex ? "#2BAA4F" : "#9B3D42") : "#444855"
                        }}
                        onPress={() => answerEvent(index === data.correctAsnwerIndex, index)}
                    >
                        <View style={{
                            ...styles.answerButton,
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
                    style={{
                        ...styles.answerButtonContainer,
                        backgroundColor: "#0A7CB1"
                    }}
                    onPress={() => { answerEvent(false, -1) }}
                >
                    <View style={{
                        ...styles.answerButton,
                        backgroundColor: "#0A7CB1",
                        borderColor: "#0A7CB1",
                    }}>
                        <Text style={styles.answerText}>Não sei</Text>
                    </View>
                </TouchableHighlight>
            </View>



            {/* {!isSelectedWord ? ( */}
            <View style={{ ...styles.translation}}>
                <Text style={styles.translationLabel}>Tradução</Text>
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
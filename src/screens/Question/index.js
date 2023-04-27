import { useEffect, useState } from 'react'

import {
    View, Text, TouchableHighlight,
    ScrollView, Animated, Easing
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import * as Speech from 'expo-speech';

import Word from '../../database/models/Word';

import { spacedRepetition } from '../../utils/spacedRepetition'

import { styles } from "./styles"

const handleSpeechResults = (a, results) => {
    console.log(results);
  };

const handleSound = (phrase) => {
    Speech.stop();

    Speech.speak(phrase, {
        language: 'en',
        onBoundary: handleSpeechResults,
    });
}

export default function Profile() {
    const [level, setLevel] = useState(0);
    const [newWord, setNewWord] = useState(true);

    const [wordSelected, setWordSelected] = useState();
    const [nextWord, setNextWord] = useState(false);

    const [progressNextWord] = useState(new Animated.Value(0))

    const [isSelectedWord, setIsSelectedWord] = useState(false);

    const [data, setData] = useState()

    progressNextWord.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"]
    });

    const anime = Animated.timing(progressNextWord, {
        toValue: 350,
        duration: 6000,
        useNativeDriver: false,
        easing: Easing.linear
    });

    async function answerEvent(right, index) {
        try {
            setIsSelectedWord(true)
            setWordSelected(index)
    
            const { hits, next, previous } = spacedRepetition(right, data.hits, data.next_repetition, data.previous_repetition)

            await Word.update(data.id, {
                hits,
                next_repetition: new Date(next).toISOString(),
                previous_repetition: new Date(previous).toISOString(),
            })
    
            if (!newWord) {
                const levelWord = data.indexGenerated * 10

                switch(right) {
                    case true:
                        if (levelWord > level) {
                            setLevel(level + 1)
                            break;
                        }
                    default:
                        if (levelWord < level) {
                            setLevel(level - 1)
                        }
                }
            }
    
            setTimeout(() => setNextWord(!nextWord), 6000)
    
            progressNextWord.setValue(0)
            anime.start()
        } catch(error) {
            console.log('kkk')
            console.log(error)
        }
    };

    useEffect(() => {
        (async () => {
            const word = await Word.findOneByNextReview()

            setIsSelectedWord(false);

            let indexWord;
            
            let repeatWord;

            if (!newWord) repeatWord = await Word.findOne()

            if (!repeatWord) {
                indexWord = await Word.finddd() //generateIndexWord(level, words);
            } else {
                indexWord = repeatWord
            }

            setNewWord(!repeatWord)

            const wordPosition = Math.floor(Math.random() * 4)

            const options = await Word
                .findByClassRandomlyWithLimit(word.class, 3)

            options.splice(wordPosition, 0, {english: word.english, portuguese: word.portuguese})

            setData({
                indexGenerated: indexWord,
                position: wordPosition,
                id: word.id,
                hits: word.hits,
                next: word.next_repetition,
                previous: word.previous_repetition,
                phrase: {
                    english: word.phrases[0].english,
                    portuguese: word.phrases[0].portuguese
                },
                answers: options.map((option, index) => ({
                    answer: option.portuguese,
                    isCorrect: index === wordPosition
                }))
            })

            handleSound(word.phrases[0].english)
        })()
    }, [nextWord])

    return data && (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={() => handleSound(data.phrase.english)} style={styles.soundButton}>
                    <AntDesign
                        name="sound"
                        size={30}
                        color={"#2C9ED2"}
                    />
                </TouchableHighlight>

                <Text style={styles.question}>
                    {data.phrase.english}
                </Text>
            </View>

            <View>
                {data.answers.map((answer, index) => (
                    <TouchableHighlight
                        key={index}
                        disabled={isSelectedWord}
                        style={{
                            ...styles.answerButton,
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.position ? "#2BAA4F" : "#9B3D42") : "#444855",
                        }}
                        onPress={() => answerEvent(answer.isCorrect, index)}
                    >
                        <View style={{
                            ...styles.answerButtonContainer,
                            backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == data.position ? "#2BAA4F" : "#9B3D42") : "#444855",
                            borderColor: isSelectedWord && (data.position == index || wordSelected == index) ? (data.position == index ? "#2BAA4F" : "#9B3D42") : "#444855"
                        }}>
                            <Text style={styles.answerText}>
                                {answer.answer}
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
                        {data.phrase.portuguese}
                    </Text>
                </View>
            ) : (
                <View style={styles.translation}>
                    <Text style={{ ...styles.translationText, color: "#bbbbbb", }}>
                        A tradução da frase irá aparecer aqui depois que você clicar na resposta
                    </Text>
                </View>
            )}

            <View style={styles.buttonsContainer}>
                {isSelectedWord && (
                    <TouchableHighlight style={styles.next}>
                        <View style={styles.nextContainer}>
                            <Text style={styles.textChangeWord}>Próxima</Text>

                            <AntDesign name="arrowright" size={25} color="#dddddd" />
                            <Animated.View style={[styles.progressBar, { width: progressNextWord }]}></Animated.View>
                        </View>
                    </TouchableHighlight>
                )}
            </View>
        </ScrollView>
    )
}
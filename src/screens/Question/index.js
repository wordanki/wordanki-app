import { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, ScrollView, Animated, Easing } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import * as Speech from 'expo-speech';

import Word from '../../database/models/Word';

import { COLORS } from "../../theme"

import { styles } from "./styles"

export default function Profile({ route }) {
    const [level, setLevel] = useState(0);
    const [newWord, setNewWord] = useState(true);
    const [isSelectedWord, setIsSelectedWord] = useState(false);
    const [indexGenerated, setIndexGenerated] = useState();
    // const [word, setWord] = useState();
    const [position, setPosition] = useState(0);
    const [sentence, setSentence] = useState();
    const [sentenceTranslation, setSentenceTranslation] = useState();
    const [answers, setAnswers] = useState();
    const [correctWord, setCorrectWord] = useState();
    const [isRender, setIsRender] = useState(false);
    const [wordSelected, setWordSelected] = useState();
    const [nextWord, setNextWord] = useState(false);
    const [timeoutNext, setTimeoutNext] = useState();
    const [wordsState, setWordsState] = useState([]);
    // const [isSpeaking, setIsSpeaking] = useState();
    const [wordsLoad, setWordsLoad] = useState(false);
    const [phraseEnglish, setPhraseEnglish] = useState();
    const [progressNextWord, setProgressNextWord] = useState(new Animated.Value(0));

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

    let words;

    const classes = [
        [],
        [1, 2, 5, 6],
        [0, 3, 4, 7],
        [8, 9, 10, 11]
    ];

    // function getTimeLeft(timeout) {
    //     return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()));
    // }

    // let timeoutText;

    useEffect(() => {
        setWordsLoad(false);
        Word.findAll().then((data => {
            // console.log("HEYYY")
            const formattedData = data.map(word => ({
                word: word.english,
                translatedWord: word.portuguese,
                phrase: word.phrases[0].english,
                translatedPhrase: word.phrases[0].portuguese,
                nextRepetition: 0,
                previousRepetition: 0,
                acertos: 0,
                classe: word.class,
            }));
        
            setWordsState(formattedData);
            setWordsLoad(true);
        }));
    }, []);

    const handleSound = (phrase) => {
        Speech.stop();

        Speech.speak(phrase, {
            language: 'en',
            // onStart: console.log("Start"),
            // onDone: console.log("Done")
        });

        // setIsSpeaking(Speech.isSpeakingAsync);
    }

    // async function speaking() {
    //     let speaking = await Speech.isSpeakingAsync();
    //     console.log(speaking);
    //     setIsSpeaking(speaking);
    // }


    function generateIndexWord(level) {
        let somatorio = 0;
        let maximo = 100;

        for (let i = 0; i < 100; i++) {
            somatorio += (maximo - Math.abs(level - i)) * 50;
        }

        let sort = Math.floor(Math.random() * somatorio);

        let current = 0;
        let wordIndex;

        let i = 0;
        do {
            current += maximo - Math.abs(level - Math.floor(i / 50));

            if (sort < current) {
                wordIndex = i;
            }
            i++;
        } while (i < 5000 && sort >= current);

        while (words[Math.floor(wordIndex / 500)].nextRepetition != 0) {
            if (wordIndex == 4999)
                wordIndex = 0;
            else
                wordIndex++;
        }

        return wordIndex;
    }

    function generateWord() {
        let index = generateIndexWord(level);
        // console.log(index);
        return Math.floor(index / 500);
    }

    function generateRepetition() {
        let d = new Date();
        let time = d.getTime();

        let minTimeRepetition = time;
        let wordToRepeat = -1;
        for (let i = 0; i < 10; i++) {
            if (words[i].nextRepetition != 0 && words[i].nextRepetition < time && words[i].nextRepetition < minTimeRepetition) {
                minTimeRepetition = words[i].nextRepetition;
                wordToRepeat = i;
            }
        }

        return wordToRepeat;
    }

    function spacedRepetition(indexWord, right) {
        let date = new Date();
        let currentTime = date.getTime();

        // let secondInMiliseconds = 1000;
        let minuteInMiliseconds = 100; // 60 * 1000
        // let hourInMiliseconds = 60 * 60 * 1000;
        let dayInMiliSeconds = 24 * 1000; // 24 * 60 * 60 * 1000

        let milisecondsAdded;
        let milisecondsToAdd;

        if (words[indexWord].acertos == 0) {
            if (right) {
                // adicione 1 dia no wordsWord[index].nextRepetition
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * dayInMiliSeconds;
                words[indexWord].acertos += 1;
            } else {
                // adicione 10 minutos no wordsWord[index].nextRepetition
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (minuteInMiliseconds * 10);
            }
        } else {
            milisecondsAdded = words[indexWord].nextRepetition - words[indexWord].previousRepetition;

            if (right) {
                // adiciona uma quantidade de milisegundos de acordo com a quantidade de acertos
                if (words[indexWord].acertos == 1) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 7);
                } else if (words[indexWord].acertos == 2) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 30);
                } else if (words[indexWord].acertos == 3) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 90);
                } else if (words[indexWord].acertos == 4) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 180);
                } else {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (milisecondsAdded * 2);
                }
                words[indexWord].acertos += 1;
            } else {
                // adiciona a mesma quantidade de milisegundos de antes
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * milisecondsAdded;
            }
        }

        words[indexWord].previousRepetition = currentTime;
        words[indexWord].nextRepetition = currentTime + milisecondsToAdd;
    }

    function splitPhrase(phrase) {
        let phraseSplited = [];
        phraseSplited[0] = phrase.slice(0, phrase.indexOf("["));
        phraseSplited[1] = phrase.slice(phrase.indexOf("[")+1, phrase.indexOf("]"));
        phraseSplited[2] = phrase.slice(phrase.indexOf("]")+1);

        return phraseSplited;
        // return phrase.split(word.toLowerCase());
    }

    function nextWordTimer() {
        setTimeoutNext(
            setTimeout(() => {
                setNextWord(!nextWord);
            }, 6000)
        );
        // timeoutText = `${timeoutNext/3000}%`;
    }

    function answerEvent(selected) {
        setIsSelectedWord(true);
        setWordSelected(selected);

        let right = position == selected;
        words = wordsState;
        spacedRepetition(indexGenerated, right);
        setWordsState(words);

        if (!newWord) {
            let levelWord = indexGenerated * 10;
            if (right && levelWord > level) {
                setLevel(level + 1);
            } else if (!right && levelWord < level) {
                setLevel(level - 1);
            }
        }
        // console.log(level);
        nextWordTimer();
        // setProgressNextWord(setValue(0));
        progressNextWord.setValue(0);
        anime.start();
    };

    useEffect(() => {
        if(wordsLoad) {
            setIsRender(false);
            setIsSelectedWord(false);
            words = wordsState;
            // console.log(words);

            let indexWord;
            let repeatWord = -1;
            // console.log(repeatWord);

            if (!newWord) {
                repeatWord = generateRepetition();
            }
            if (repeatWord == -1) {
                indexWord = generateWord();
                setNewWord(false);
            } else {
                indexWord = repeatWord;
                setNewWord(true);
            }

            setIndexGenerated(indexWord);

            let classePalavra = words[indexWord].classe;
            let wordsOptions = [];

            for (let i = 0; i < 3; i++) {
                do {
                    var otherWord = Math.floor(Math.random() * classes[classePalavra].length);
                } while (wordsOptions.includes(otherWord) || otherWord == indexWord);
                wordsOptions.push(otherWord);
            }

            let wordPosition = Math.floor(Math.random() * 4);
            setPosition(wordPosition);

            let options = [];
            let j = 0;
            for (let i = 0; i < 4; i++) {
                if (i != wordPosition) { // position
                    options.push(words[wordsOptions[j]]);
                    j++;
                } else {
                    options.push(words[indexWord]);
                }
            }

            setAnswers(options);
            setCorrectWord(options[wordPosition]);
            setSentence(splitPhrase(options[wordPosition].phrase));
            setSentenceTranslation(splitPhrase(options[wordPosition].translatedPhrase));
            handleSound(options[wordPosition].phrase);
            setIsRender(true);

            // for(let i=0; i<4; i++) {
            //     setAnswers([...answers, options[i]]);
            // }
        }
    }, [nextWord, wordsLoad]);

    return isRender && (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={() => handleSound(sentence.join(''))} style={styles.soundButton}>
                    <AntDesign
                        name="sound"
                        size={30}
                        color={"#2C9ED2"}
                    />
                </TouchableHighlight>
                <Text style={styles.question}>
                    {sentence[0]}
                    <Text style={styles.word}>{sentence[1]}</Text>
                    {sentence[2]}
                </Text>
            </View>

            <View>
                {answers.map((answer, index) => {
                    return (
                        <TouchableHighlight
                            key={index}
                            disabled={isSelectedWord}
                            style={{
                                ...styles.answerButton,
                                backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == position ? "#2BAA4F" : "#9B3D42") : "#444855",
                            }}
                            onPress={() => { answerEvent(index) }}
                        >
                            <View style={{
                                ...styles.answerButtonContainer,
                                backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == position ? "#2BAA4F" : "#9B3D42") : "#444855",
                                borderColor: isSelectedWord && (position == index || wordSelected == index) ? (position == index ? "#2BAA4F" : "#9B3D42") : "#444855"
                            }}>
                                <Text style={styles.answerText}>
                                    {answer.translatedWord}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    )
                })}
                <TouchableHighlight
                    key={"Não sei"}
                    disabled={isSelectedWord}
                    style={{
                        ...styles.answerButton,
                        backgroundColor: "#0A7CB1"
                    }}
                    onPress={() => { answerEvent(-1) }}
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
                        {sentenceTranslation[0]}
                        <Text style={styles.translationWord}>{sentenceTranslation[1]}</Text>
                        {sentenceTranslation[2]}
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
                {isSelectedWord && <TouchableHighlight style={styles.next} onPress={() => { clearTimeout(timeoutNext); setNextWord(!nextWord) }}>
                    <View style={styles.nextContainer}>
                        <Text style={styles.textChangeWord}>Próxima</Text>
                        {/* <FontAwesome5 name="arrow-right" size={24} color="#dddddd"/> */}
                        <AntDesign name="arrowright" size={25} color="#dddddd" />
                        <Animated.View style={[styles.progressBar, { width: progressNextWord }]}></Animated.View>
                    </View>
                </TouchableHighlight>}
            </View>
        </ScrollView>
    )
}
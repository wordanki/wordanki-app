import { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, ScrollView, Animated } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import * as Speech from 'expo-speech';

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
    const [answers, setAnswers] = useState();
    const [correctWord, setCorrectWord] = useState();
    const [isRender, setIsRender] = useState(false);
    const [wordSelected, setWordSelected] = useState();
    const [nextWord, setNextWord] = useState(false);
    const [timeoutNext, setTimeoutNext] = useState();
    const [wordsState, setWordsState] = useState([
        {
            word: "believe",
            translatedWord: "acredito0",
            phrase: "I don't believe in ghosts at all.0",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.0",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "believe",
            translatedWord: "acredito1",
            phrase: "I don't believe in ghosts at all.1",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.1",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "believe",
            translatedWord: "acredito2",
            phrase: "I don't believe in ghosts at all.2",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.2",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "believe",
            translatedWord: "acredito3",
            phrase: "I don't believe in ghosts at all.3",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.3",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "believe",
            translatedWord: "acredito4",
            phrase: "I don't believe in ghosts at all.4",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.4",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "believe",
            translatedWord: "acredito5",
            phrase: "I don't believe in ghosts at all.5",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.5",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "believe",
            translatedWord: "acredito6",
            phrase: "I don't believe in ghosts at all.6",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.6",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "believe",
            translatedWord: "acredito7",
            phrase: "I don't believe in ghosts at all.7",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.7",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "believe",
            translatedWord: "acredito8",
            phrase: "I don't believe in ghosts at all.8",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.8",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "believe",
            translatedWord: "acredito9",
            phrase: "I don't believe in ghosts at all.9",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.9",
            nextRepetition: 0,
            previousRepetition: 0,
            acertos: 0,
            classe: 2,
        },
    ]);

    let words;

    const classes = [
        [],
        [1, 2, 5, 6, 8],
        [0, 3, 4, 7, 9],
    ];

    // function getTimeLeft(timeout) {
    //     return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()));
    // }

    // let timeoutText;

    const handleSound = (phrase) => {
        Speech.stop();
        Speech.speak(phrase, {
            language: 'en'
        });
    }

    function generateIndexWord(level) {
        let somatorio = 0;
        let maximo = 100;
    
        for(let i=0; i<100; i++) {
            somatorio += (maximo - Math.abs(level - i)) * 50;
        }
    
        let sort = Math.floor(Math.random() * somatorio);
    
        let current = 0;
        let wordIndex;
        
        let i = 0;
        do {
            current += maximo - Math.abs(level - Math.floor(i / 50));
    
            if(sort < current) {
                wordIndex = i;
            }
            i++;
        } while(i < 5000 && sort >= current);

        while(words[Math.floor(wordIndex/500)].nextRepetition != 0) {
            if(wordIndex == 4999)
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
        for(let i=0; i<10; i++) {
            if(words[i].nextRepetition != 0 && words[i].nextRepetition < time && words[i].nextRepetition < minTimeRepetition) {
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
        let minuteInMiliseconds = 1000; // 60 * 1000
        // let hourInMiliseconds = 60 * 60 * 1000;
        let dayInMiliSeconds = 24 * 1000; // 24 * 60 * 60 * 1000
    
        let milisecondsAdded;
        let milisecondsToAdd;
    
        if(words[indexWord].acertos == 0) {
            if(right) {
                // adicione 1 dia no wordsWord[index].nextRepetition
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * dayInMiliSeconds;
                words[indexWord].acertos += 1;
            } else {
                // adicione 10 minutos no wordsWord[index].nextRepetition
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (minuteInMiliseconds * 10);
            }
        } else {
            milisecondsAdded = words[indexWord].nextRepetition - words[indexWord].previousRepetition;
    
            if(right) {
                // adiciona uma quantidade de milisegundos de acordo com a quantidade de acertos
                if(words[indexWord].acertos == 1) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 7);
                } else if(words[indexWord].acertos == 2) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 30);
                } else if(words[indexWord].acertos == 3) {
                    milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 90);
                } else if(words[indexWord].acertos == 4) {
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

    function splitPhrase(phrase, word) {
        // let i=0, j=0;
        // while(i < phrase.length && j != word.length-1) {
        //     if(phrase[i] == word[j]) {
        //         j++;
        //     } else {
        //         j = 0;
        //     }
        //     i++;
        // }
        // let initial = i - j;
        // console.log([phrase.slice(0, initial), phrase.slice(initial, initial + j), phrase.slice(initial+j, phrase.length)]);
        // return [phrase.slice(0, initial), phrase.slice(initial, initial + j), phrase.slice(initial+j, phrase.length)];

        return phrase.split(word);
    }

    function nextWordTimer() {
        setTimeoutNext(
            setTimeout(() => {
                setNextWord(!nextWord);
            }, 3000)
        );
        // timeoutText = `${timeoutNext/3000}%`;
    }

    function answerEvent(selected) {
        setIsSelectedWord(true);
        setWordSelected(selected);

        let right = position == selected;
        words = wordsState;
        spacedRepetition(indexGenerated, right);
        
        if(!newWord) {
            let levelWord = indexGenerated * 10;
            if(right && levelWord > level) {
                setLevel(level+1);
            } else if(!right && levelWord < level) {
                setLevel(level-1);
            }
        }

        console.log(level);

        setWordsState(words);

        nextWordTimer();
    };

    useEffect(() => {
        setIsRender(false);
        setIsSelectedWord(false);
        words = wordsState;
        // console.log(words);

        let indexWord;
        let repeatWord = -1;
        // console.log(repeatWord);

        if(!newWord) {
            repeatWord = generateRepetition();
        }
        if(repeatWord == -1) {
            indexWord = generateWord();
            setNewWord(false);
        } else {
            indexWord = repeatWord;
            setNewWord(true);
        }
        
        setIndexGenerated(indexWord);

        let classePalavra = words[indexWord].classe;
        let wordsOptions = [];

        for(let i=0; i<3; i++) {
            do {
                var otherWord = Math.floor(Math.random() * classes[classePalavra].length);
            } while(wordsOptions.includes(otherWord) || otherWord == indexWord);
            wordsOptions.push(otherWord);
        }

        let wordPosition = Math.floor(Math.random() * 4);
        setPosition(wordPosition);

        let options = [];
        let j = 0;
        for(let i=0; i<4; i++) {
            if(i != wordPosition) { // position
                options.push(words[wordsOptions[j]]);
                j++;
            } else {
                options.push(words[indexWord]);
            }
        }

        setAnswers(options);
        setCorrectWord(options[wordPosition]);
        setSentence(options[wordPosition].phrase);
        handleSound(options[wordPosition].phrase);
        setIsRender(true);

        // for(let i=0; i<4; i++) {
        //     setAnswers([...answers, options[i]]);
        // }
    }, [nextWord]);

    return isRender && (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.questionContainer}>
                <TouchableHighlight onPress={() => handleSound(sentence)} style={styles.soundButton}>
                    <AntDesign 
                        name="sound" 
                        size={30} 
                        color={Speech.isSpeakingAsync ? COLORS.GRAY_SECONDARY : "red"} 
                    />
                </TouchableHighlight>
                <Text style={styles.question}>
                    {splitPhrase(correctWord.phrase, correctWord.word)[0]}
                    <Text style={styles.word}>{(isRender && correctWord.phrase.includes(correctWord.word)) && correctWord.word}</Text>
                    {splitPhrase(correctWord.phrase, correctWord.word)[1]}
                </Text>
            </View>

            <View>
                {answers.map((answer, index) => {
                    return (
                        <TouchableHighlight 
                            key={index}
                            disabled={isSelectedWord}
                            style={styles.answerButton}
                            onPress={() => {answerEvent(index)}}
                        >
                            <View style={{
                                ...styles.answerButtonContainer,
                                backgroundColor: isSelectedWord && wordSelected == index ? (wordSelected == position ? "#30B956" : "#C63030") : "#393948",
                                borderColor: isSelectedWord && (position == index || wordSelected == index) ? (position == index ? "#30B956" : "#C63030") : "#393948"
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
                    }} 
                    onPress={() => {answerEvent(-1)}}
                >
                    <View style={{
                        ...styles.answerButtonContainer,
                        backgroundColor: "#145C7E",
                        borderColor: "#145C7E",
                    }}>
                        <Text style={styles.answerText}>Não sei</Text>
                    </View>
                </TouchableHighlight>
            </View>

            {isSelectedWord ? (
                <View style={{...styles.translation, borderColor: "#0E79A9"}}>
                    <Text style={styles.translationText}>
                        {splitPhrase(correctWord.translatedPhrase, correctWord.translatedWord)[0]}
                        <Text style={styles.translationWord}>{correctWord.translatedPhrase.includes(correctWord.translatedWord) && correctWord.translatedWord}</Text>
                        {splitPhrase(correctWord.translatedPhrase, correctWord.translatedWord)[1]}
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
                {isSelectedWord && <TouchableHighlight style={styles.next} onPress={() => {clearTimeout(timeoutNext); setNextWord(!nextWord)}}>
                    <View style={styles.nextContainer}>
                        <Text style={styles.textChangeWord}>Próxima</Text>
                        {/* <FontAwesome5 name="arrow-right" size={24} color="#dddddd"/> */}
                        <AntDesign name="arrowright" size={25} color="#dddddd" />
                        <View style={[styles.progressBar, { width: "10%" }]}></View>
                    </View>
                </TouchableHighlight>}
            </View>
        </ScrollView>
    )
}
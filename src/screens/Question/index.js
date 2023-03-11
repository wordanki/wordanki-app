import { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import * as Speech from 'expo-speech';

import { COLORS } from "../../theme"

import { styles } from "./styles"

export default function Profile({ route }) {
    const [isSelectedWord, setIsSelectedWord] = useState(false);
    const [word, setWord] = useState();
    const [position, setPosition] = useState(0);
    const [sentence, setSentence] = useState("I don't believe in ghosts at all.");
    const [answers, setAnswers] = useState([{name: "2"}]);
    const [correctWord, setCorrectWord] = useState({});
    const [isRender, setIsRender] = useState(false);
    let options = [];
    let correctWordPosition;

    const handleSound = () => {
        Speech.stop();
        Speech.speak(sentence, {
            language: 'en'
        });
    }

    const words = [
        {
            word: "beliave",
            translatedWord: "acredito0",
            phrase: "I don't beliave in ghosts at all.0",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.0",
            nextRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "beliave",
            translatedWord: "acredito1",
            phrase: "I don't beliave in ghosts at all.1",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.1",
            nextRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "beliave",
            translatedWord: "acredito2",
            phrase: "I don't beliave in ghosts at all.2",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.2",
            nextRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "beliave",
            translatedWord: "acredito3",
            phrase: "I don't beliave in ghosts at all.3",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.3",
            nextRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "beliave",
            translatedWord: "acredito4",
            phrase: "I don't beliave in ghosts at all.4",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.4",
            nextRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "beliave",
            translatedWord: "acredito5",
            phrase: "I don't beliave in ghosts at all.5",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.5",
            nextRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "beliave",
            translatedWord: "acredito6",
            phrase: "I don't beliave in ghosts at all.6",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.6",
            nextRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "beliave",
            translatedWord: "acredito7",
            phrase: "I don't beliave in ghosts at all.7",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.7",
            nextRepetition: 0,
            acertos: 0,
            classe: 2,
        },
        {
            word: "beliave",
            translatedWord: "acredito8",
            phrase: "I don't beliave in ghosts at all.8",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.8",
            nextRepetition: 0,
            acertos: 0,
            classe: 1,
        },
        {
            word: "beliave",
            translatedWord: "acredito9",
            phrase: "I don't beliave in ghosts at all.9",
            translatedPhrase: "Eu não acredito em fantasmas de jeito nenhum.9",
            nextRepetition: 0,
            acertos: 0,
            classe: 2,
        },
    ];

    const classes = [
        [],
        [1, 2, 5, 6, 8],
        [0, 3, 4, 7, 9],
    ];

    function generateWord() {
        let index = Math.floor(Math.random()*10);
        return index;
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

    useEffect(() => {
        setIsRender(false);
        // setIsSelectedWord(false);

        let indexWord = generateWord();
        setWord(indexWord)
        let classePalavra = words[indexWord].classe;
        let wordsOptions = [];

        for(let i=0; i<3; i++) {
            do {
                var otherWord = Math.floor(Math.random() * classes[classePalavra].length);
            } while(wordsOptions.includes(otherWord) || otherWord == indexWord);
            wordsOptions.push(otherWord);
        }

        correctWordPosition = Math.floor(Math.random() * 4);
        setPosition(correctWordPosition);

        options = [];
        let j = 0;
        for(let i=0; i<4; i++) {
            if(i != correctWordPosition) {
                options.push(words[wordsOptions[j]]);
                j++;
            } else {
                options.push(words[indexWord]);
            }
        }

        setCorrectWord(options[correctWordPosition]);
        setAnswers(options);
        setIsRender(true);

        // for(let i=0; i<4; i++) {
        //     setAnswers([...answers, options[i]]);
        // }
    }, [isSelectedWord]);

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
                    {/* {splitPhrase(answers[indexWord].phrase, answers[indexWord].word).map(string => {
                        <Text></Text>
                    })} */}
                    
                    {isRender && splitPhrase(correctWord.phrase, correctWord.word)[0]}
                    <Text style={styles.word}>{(isRender && correctWord.phrase.includes(correctWord.word)) && correctWord.word}</Text>
                    { isRender && splitPhrase(correctWord.phrase, correctWord.word)[1]}
                    {/* I don't <Text style={styles.word}>believe</Text> in ghosts at all. */}
                </Text>
            </View>

            <View>
                {isRender && answers.map(answer => (
                    <TouchableHighlight 
                        key={answer.translatedWord}
                        style={{
                            ...styles.answerButton, 
                            backgroundColor: isSelectedWord === answer  ? "#30B956" : "#31313E",
                            borderColor: isSelectedWord === answer ? "#38D664" : "#414153",
                        }} 
                        onPress={() => setIsSelectedWord(!isSelectedWord)}
                    >
                        <Text style={styles.answerText}>
                            {answer.translatedWord}
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
                    onPress={() => setIsSelectedWord(!isSelectedWord)} 
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
                {isSelectedWord && <TouchableHighlight style={styles.next} onPress={() => {}}>
                    <View style={styles.nextContainer}>
                        <Text style={styles.textChangeWord}>Próxima</Text>
                        {/* <FontAwesome5 name="arrow-right" size={24} color="#dddddd"/> */}
                        <AntDesign name="arrowright" size={25} color="#dddddd" />
                    </View>
                </TouchableHighlight>}
            </View>
        </View>
    )
}
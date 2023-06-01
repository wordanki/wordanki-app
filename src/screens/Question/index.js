import { useEffect, useState, useRef, useCallback } from 'react'

import { View, FlatList, Dimensions } from 'react-native'

import { SwiperFlatList } from 'react-native-swiper-flatlist'

import * as Speech from 'expo-speech';

import { Issue } from '../../components/Issue'

import Word from '../../database/models/Word';

import { styles } from './styles'

import { generateWordFrequency } from '../../utils/generateWordFrequency'

import { splitedPhrase } from '../../utils/splitedPhrase'

let time

export default function Profile({ navigation }) {
    const [nextWord, setNextWord] = useState(false)
    const [data, setData] = useState([])
    const [color, setColor] = useState(true);
    const [timeoutEvent, setTimeoutEvent] = useState();
    // const [review, setReview] = useState();
    const [revised, setRevised] = useState(false);

    const flatListRef = useRef()
    const issueRefs = useRef([])

    useEffect(() => {
        (async () => {

            const frequency = generateWordFrequency(99)

            const word =
                await Word.findOneByNextReview() || 
                await Word.findOneByFrequencyOrNext(frequency) || 
                await Word.findOneByFrequencyOrBefore(frequency)

            // var words
            // if(words = await Word.findOneByNextReview()) {
            //     setReview(true);
            // } else {
            //     words = await Word.findOneByNext()
            //     setReview(false);
            // }
            var revisedWord;
            var word;
            if(await Word.findOneByNextReview() && !revised) {
                word = await Word.findOneByNextReview();
                revisedWord = true;
            } else {
                word = await Word.findOneByNext();
                revisedWord = false;
            }
            setRevised(revisedWord);
            // const word = !revised ? await Word.findOneByNextReview() || await Word.findOneByNext() : await Word.findOneByNext();



            const options = await Word
                .findByClassRandomlyAndDifferentOfTranslationWithLimit(word.class, word.portuguese, 3)

            const wordPosition = Math.floor(Math.random() * 4)

            options.splice(wordPosition, 0, {
                english: word.english,
                portuguese: word.portuguese
            })

            const newData = [...data, {
                id: word.id,
                hits: word.hits,
                next_repetition: word.next_repetition,
                previous_repetition: word.previous_repetition,
                correctAsnwerIndex: wordPosition,
                answers: options.map(option => option.portuguese),
                phrase: splitedPhrase(word.phrases[0].english, revisedWord),
                translatedPhrase: splitedPhrase(word.phrases[0].portuguese)
            }]

            if(newData.length > 10) {
                newData.shift()
            }

            setData(newData)
            setColor(!color)
        })()
    }, [nextWord])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => { Speech.stop(); clearTimeout(time); })
    }, [navigation])

    useEffect(() => {
        if (data.length > 1) {
            // setTimeoutEvent(
                time = setTimeout(() => {
                    flatListRef.current.scrollToIndex({ 
                        index: data.length - 1, 
                        animated: true 
                    })
                }, 5000)
            // )
        }
    }, [data])

    const onViewableItemsChanged = useRef(({ changed }) => {
        changed.forEach(element => {
            const cell = issueRefs.current[element.key]

            if (cell) element.isViewable ? cell.play() : cell.stop()
        })
    })

    const renderItems = ({ item }) => (
        <View style={styles.container}>
            <Issue
                key={item.id}
                data={item}
                nextWord={nextWord}
                setNextWord={setNextWord}
                bgColor={"#222228"}
                review={revised}
                ref={IssueRef => (issueRefs.current[item.id] = IssueRef)}
            />
        </View>
    )

    return (
        <View style={{ backgroundColor: "#222228" }}>
            <SwiperFlatList
                ref={flatListRef}
                vertical={true}
                data={data}
                renderItem={renderItems}
                keyExtractor={item => item.id}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
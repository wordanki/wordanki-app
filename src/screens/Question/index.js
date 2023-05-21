import { useEffect, useState, useRef, useCallback } from 'react'

import { View, FlatList, Dimensions } from 'react-native'

import { SwiperFlatList } from 'react-native-swiper-flatlist'

import * as Speech from 'expo-speech';

import { Issue } from '../../components/Issue'

import Word from '../../database/models/Word';

import { styles } from './styles'

import { splitedPhrase } from '../../utils/splitedPhrase'

export default function Profile({ navigation }) {
    const [nextWord, setNextWord] = useState(false)
    const [data, setData] = useState([])

    const flatListRef = useRef()
    const issueRefs = useRef([])

    useEffect(() => {
        (async () => {
            const word = await Word.findOneByNextReview() || await Word.findOneByNext()

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
                phrase: splitedPhrase(word.phrases[0].english),
                translatedPhrase: splitedPhrase(word.phrases[0].portuguese)
            }]

            if(newData.length > 10) {
                newData.shift()
            }

            setData(newData)
        })()
    }, [nextWord])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => Speech.stop())
    },
    [navigation])

    useEffect(() => {
        if (data.length > 1) {
            setTimeout(() => {
                flatListRef.current.scrollToIndex({ 
                    index: data.length - 1, 
                    animated: true 
                })
            }, 2000)
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
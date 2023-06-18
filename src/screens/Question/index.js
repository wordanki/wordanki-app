import { useEffect, useState, useRef, useCallback } from 'react'

import { View } from 'react-native'
import * as Speech from 'expo-speech'

import { FlashList } from "@shopify/flash-list"

import { SwiperFlatList } from 'react-native-swiper-flatlist'

import { Issue } from '../../components/Issue'
import { useGlobal } from '../../hooks/global'

import Word from '../../database/models/Word'

import { wordsQuantiyPer100 } from '../../config/algorithm'
import { generateWordFrequency } from '../../utils/generateWordFrequency'
import { splitedPhrase } from '../../utils/splitedPhrase'

import { styles } from './styles'

let time = null

export default function Profile({ navigation }) {
    const [nextWord, setNextWord] = useState(false)
    const [isNewWord, setIsNewWord] = useState(false)

    const [data, setData] = useState([])
    const [color, setColor] = useState(true)
    const [clicked, setClicked] = useState([])

    const flatListRef = useRef()
    const issueRefs = useRef([])

    const { level, setLevel } = useGlobal()

    useEffect(() => {
        (async () => {
            let word = null
            let frequency = 0
            let newWord = false

            switch (!isNewWord) {
                case true:
                    word = await Word.findOneByNextReview()
                    if (word) break
                    
                default:
                    frequency = generateWordFrequency(level)
                    word = await Word.findOneByFrequencyOrNext(frequency) || await Word.findOneByFrequencyOrBefore(frequency)
                    newWord = true
            }

            if (!word) return
            setIsNewWord(!newWord)

            const options = await Word
                .findByClassRandomlyAndDifferentOfTranslationWithLimit(word.class, word.portuguese, 3)

            const wordPosition = Math.floor(Math.random() * 4)

            options.splice(wordPosition, 0, {
                english: word.english,
                portuguese: word.portuguese
            })

            setClicked([...clicked, null])

            // let newData = data
            // newData[data.length].clicked = clicked[data.length]

            // newData.push({
            //     isNewWord,
            //     id: word.id,
            //     hits: word.hits,
            //     next_repetition: word.next_repetition,
            //     previous_repetition: word.previous_repetition,
            //     correctAsnwerIndex: wordPosition,
            //     answers: options.map(option => option.portuguese),
            //     level: Math.floor(frequency / wordsQuantiyPer100),
            //     phrase: splitedPhrase(word.phrases[0].english, true),
            //     translatedPhrase: splitedPhrase(word.phrases[0].portuguese, true),
            //     clicked: null,
            // })

            const newData = [...data, {
                isNewWord,
                id: word.id,
                hits: word.hits,
                next_repetition: word.next_repetition,
                previous_repetition: word.previous_repetition,
                correctAsnwerIndex: wordPosition,
                answers: options.map(option => option.portuguese),
                level: Math.floor(frequency / wordsQuantiyPer100),
                phrase: splitedPhrase(word.phrases[0].english, true),
                translatedPhrase: splitedPhrase(word.phrases[0].portuguese, true),
            }]

            // if(newData.length >= 3) {
            //     newData.shift()
            // }

            setData(newData)
            setColor(!color)
        })()
    }, [nextWord])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            Speech.stop()
            clearTimeout(time)
        })
    }, [navigation])

    useEffect(() => {

        if (data.length > 1 && flatListRef) {
            time = setTimeout(() => {
                try {
                    flatListRef.current.scrollToIndex({
                        index: data.length - 1,
                        animated: true
                    })
                } catch(error) {}
                
            }, 5000)
        }
    }, [data])

    const onViewableItemsChanged = useRef(({ changed }) => {
        clearTimeout(time)
        changed.forEach(element => {
            const cell = issueRefs.current[element.key]

            if (cell) element.isViewable ? cell.play("auto") : cell.isScroll()
        })
    })

    const renderItems = useCallback(({ item, index }) => (
        <View style={styles.container}>
            <Issue
                key={item.id}
                data={item}
                level={level}
                setLevel={setLevel}
                bgColor={"#222228"}
                nextWord={nextWord}
                setNextWord={setNextWord}
                clicked={clicked}
                setClicked={setClicked}
                indexData={index}
                ref={IssueRef => (issueRefs.current[item.id] = IssueRef)}
            />
        </View>
    ), [data])
    
    if (!data.length) return <View />


    return (
        <View style={styles.container}>
            <FlashList
                ref={flatListRef}
                data={data}
                vertical={true}
                renderItem={renderItems}
                estimatedItemSize={400}
                keyExtractor={item => item.id}
                decelerationRate='normal'
                pagingEnabled
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                }}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
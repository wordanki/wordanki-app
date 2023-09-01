import { useEffect, useState, useRef, useCallback } from 'react'

import { View, BackHandler  } from 'react-native'
import * as Speech from 'expo-speech'

import { FlashList } from "@shopify/flash-list"

import { Issue } from '../../components/Issue'
import { Loading } from '../../components/Loading'
import { FinishScreen } from '../../components/FinishScreen'

import { useGlobal } from '../../hooks/global'

import Word from '../../database/models/Word'

import { uploadDatabase } from '../../database/connection'

import { wordsQuantiyPer100 } from '../../config/algorithm'
import { generateWordFrequency } from '../../utils/generateWordFrequency'
import { splitedPhrase } from '../../utils/splitedPhrase'

import { styles } from './styles'

let time = null

export default function Question({ navigation, route }) {
    const [nextWord, setNextWord] = useState(false)
    const [isNewWord, setIsNewWord] = useState([0, 2].includes(route.params.type))

    const [data, setData] = useState()

    const flatListRef = useRef()
    const issueRefs = useRef([])

    const { level } = useGlobal()

    const goToLast = () => {
        flatListRef?.current?.scrollToIndex({
            index: data.length - 1,
            animated: true
        })
    }

    const handleBackButtonClick = () => {
        navigation.replace("Main")
        return true
      }
      
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick)

        return () => {
          BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick)
        }
      }, [])

    useEffect(() => {
        (async () => {
            let word = null
            let frequency = 0
            let newWord = false

            switch (isNewWord) {
                case true:
                    word = await Word.findOneByNextReview()

                    if (word) break

                    if (route.params.type === 0) {
                        if (!data) setData([])

                        return
                    }
                default:
                    frequency = generateWordFrequency(level)
                    word = await Word.findOneByFrequencyOrNext(frequency) || await Word.findOneByFrequencyOrBefore(frequency)
                    newWord = true
            }

            if (!word) {
                if (!data) setData([])

                return
            }

            if (route.params.type === 2) setIsNewWord(newWord)

            const options = await Word
                .findByClassRandomlyAndDifferentOfTranslationWithLimit(word.class, word.translated_content, 3)

            const wordPosition = Math.floor(Math.random() * 4)

            options.splice(wordPosition, 0, {
                content: word.content,
                translated_content: word.translated_content
            })

            const newData = [...(data || []), {
                id: word.id,
                hits: word.hits,
                isNewWord: newWord,
                clickedAnswerIndex: null,
                correctAsnwerIndex: wordPosition,
                next_repetition: word.next_repetition,
                previous_repetition: word.previous_repetition,
                answers: options.map(option => option.translated_content),
                level: Math.floor(frequency / wordsQuantiyPer100),
                phrase: splitedPhrase(word.phrases[0].content, true),
                translatedPhrase: splitedPhrase(word.phrases[0].translated_content, true),
            }]

            setData(newData)
        })()
    }, [nextWord])

    useEffect(() => {
        if (data?.length > 1 && flatListRef) time = setTimeout(() => goToLast(), 6000)
    }, [data])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            Speech.stop()
            clearTimeout(time)

            // uploadDatabase({
            //     level,
            //     seen_words: 500
            // })
        })
    }, [navigation])

    const onViewableItemsChanged = useRef(({ changed }) => {
        clearTimeout(time)

        changed.forEach(element => {
            const cell = issueRefs.current[element.key]

            if (cell) element.isViewable ? cell.play() : cell.scroll()
        })
    })

    const renderItems = useCallback(({ item }) => (
        <View style={styles.container}>
            <Issue
                key={item.id}
                data={item}
                nextWord={nextWord}
                setNextWord={setNextWord}
                goToLast={goToLast}
                ref={IssueRef => (issueRefs.current[item.id] = IssueRef)}
            />
        </View>
    ), [data])

    if (!data) return <Loading />

    if (!data.length) return <FinishScreen learning={route.params.type} />

    return (
        <View style={styles.container}>
            <FlashList
                ref={flatListRef}
                data={data}
                vertical={true}
                pagingEnabled={true}
                renderItem={renderItems}
                estimatedItemSize={400}
                keyExtractor={item => item.id}
                decelerationRate='normal'
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
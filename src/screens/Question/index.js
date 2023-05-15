import { useEffect, useState, useRef } from 'react'

import { View, FlatList, Dimensions } from 'react-native'

import * as Speech from 'expo-speech';

import { Issue } from '../../components/Issue'

import Word from '../../database/models/Word';

import { styles } from './styles'

import { splitedPhrase } from '../../utils/splitedPhrase'

export default function Profile({ navigation }) {
    const [nextWord, setNextWord] = useState(false)
    const [data, setData] = useState([])

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
            }];

            if(newData.length > 10) {
                newData.shift();
            }

            setData(newData);
        })()
    }, [nextWord])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => Speech.stop())
    },
        [navigation])

    const mediaRefs = useRef([])

    const onViewableItemsChanged = useRef(({ changed }) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]

            console.log(element)
            if (cell) {
                if (element.isViewable) {
                    cell.play()
                } else {
                    cell.stop()
                }
            }
        })
    })

    return (
        <View style={{ backgroundColor: "#222228" }}>
            <FlatList
                data={data}
                windowSize={10}
                initialNumToRender={0}
                maxToRenderPerBatch={10}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 0
                }}
                renderItem={({ item, index }) => (
                    <View style={styles.container}>
                        <Issue
                            key={item.id}
                            data={item}
                            nextWord={nextWord}
                            setNextWord={setNextWord}
                            ref={IssueRef => (mediaRefs.current[item.id] = IssueRef)}
                        />
                    </View>
                )}
                pagingEnabled
                keyExtractor={item => item.id}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
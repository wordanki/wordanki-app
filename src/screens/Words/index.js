import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import WordScreen from '../../database/models/WordScreen'

import { styles } from "./styles"

import WordContainer from '../../components/WordContainer'

export default function Words({ route }) {
    const [searchInput, setSearchInput] = useState('')
    const [words, setWords] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadWords()
    }, [])

    const loadWords = async () => {
        if(loading) return

        setLoading(true)
        
        let moreWords = await WordScreen.loadWords(page)
        setWords([...words, ...moreWords])

        setPage(page + 1)
        setLoading(false)
        console.log(moreWords)
    }

    const renderWords = () => {
        return words.map(item => {
            return (
                <WordContainer 
                    key={item.word_frequency}
                    word={item.word_english} 
                    translation={item.word_portuguese}
                    description="Descrição da palavra"
                    originalPhrase="The house is Beautiful"
                    translatedPhrase="A casa é bonita"
                />
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerSearchTopic}>
                <Ionicons name="search" size={22} color="#bbbbbb" style={{marginLeft: 15}}/>
                <TextInput
                    style={styles.searchTopic}
                    onChangeText={(value) => setSearchInput(value)}
                    value={searchInput}
                    placeholder={"Pesquisar tópico"}
                    placeholderTextColor={"#bbbbbb"}
                />
            </View>

            <FlatList
                style={styles.containerWords}
                showsVerticalScrollIndicator={false}
                data={words}
                keyExtractor={item => item.word_frequency}
                renderItem={({ item }) => {
                    return (
                        <WordContainer 
                            word={item.word_english} 
                            translation={item.word_portuguese}
                            description="Descrição da palavra"
                            originalPhrase={item.phrase_english}
                            translatedPhrase={item.phrase_portuguese}
                        />
                    )
                }}
                onEndReached={loadWords}
                onEndReachedThreshold={0.2}
                ListFooterComponent={<FooterList load={loading} />}
            />
        </View>
    )
}

function FooterList({ load }) {
    if(!load) return null
    return (
        <View style={{marginBottom: 16}}>
            <ActivityIndicator size={24} color="#888899" />
        </View>
    )
}


// word: props.word,
// translation: props.translation,
// description: props.description,
// wordPhrase: props.originalPhrase,
// translatedPhrase: props.translatedPhrase
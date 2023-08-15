import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles"

import WordContainer from '../../components/WordContainer'

export default function Words({ route }) {
    const [searchInput, setSearchInput] = useState('');

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
            <ScrollView style={styles.containerWords} showsVerticalScrollIndicator={false}>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
                <WordContainer></WordContainer>
            </ScrollView>
        </View>
    )
}
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles"

import Topic2 from "../../components/Topic2";

export default function Categories({ route }) {

    // const topics = ['Viagens', 'Escola', 'Trabalho', 'Tecnologia'];
    const topics = [
        {
            title: "Viagem",
            img: require("../../assets/img_topics/Viagem.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Trabalho",
            img: require("../../assets/img_topics/Trabalho.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Escola",
            img: require("../../assets/img_topics/Escola.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Casa",
            img: require("../../assets/img_topics/Casa.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Tecnologia",
            img: require("../../assets/img_topics/Tecnologia.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Saúde",
            img: require("../../assets/img_topics/Saúde.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Alimentação",
            img: require("../../assets/img_topics/Alimentação.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Natureza",
            img: require("../../assets/img_topics/Natureza.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Família",
            img: require("../../assets/img_topics/Família.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Tempo",
            img: require("../../assets/img_topics/Tempo.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Esportes",
            img: require("../../assets/img_topics/Esportes.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
        {
            title: "Compras",
            img: require("../../assets/img_topics/Compras.jpg"),
            numberWords: 25,
            viewedWords: 12,
            pendingReviews: 6,
        },
    ];

    // const colors = ['7087AF', '70AF7A', '8470AF', 'AFAD70'];
    // const colors = ['444B55', '444B55', '444B55', '444B55'];
    // const imgSources = ['../../assets/img_topics/Viagens.png', '../../assets/img_topics/Escola.png', '../../assets/img_topics/Trabalho.png', '../../assets/img_topics/Tecnologia.png'];

    const renderTopics = (search) => {
        return topics.map((topic, index) => {
            if(search == '' || topic.title.toLocaleLowerCase().includes(search.toLowerCase())) {
                let imgSource = topic[index];
                return (
                    <Topic2 key={index} ima={topic.img} title={topic.title} navigation={useNavigation()} numberWords={topic.numberWords} viewedWords={topic.viewedWords} pendingReviews={topic.pendingReviews} />
                );
            }
        })
    }

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
            <ScrollView style={styles.containerTopics} showsVerticalScrollIndicator={false}>
                {renderTopics(searchInput)}
            </ScrollView>
        </View>
    );

}
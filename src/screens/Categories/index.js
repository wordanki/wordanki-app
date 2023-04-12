import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'; 

import { styles } from "./styles"

import Topic2 from "../../components/Topic2";

export default function Categories({ route }) {

    // const topics = ['Viagens', 'Escola', 'Trabalho', 'Tecnologia'];
    const topics = [
        {
            title: "Viagens",
            img: require("../../assets/img_topics/Viagens.png")
        },
        {
            title: "Escola",
            img: require("../../assets/img_topics/Escola.png")
        },
        {
            title: "Trabalho",
            img: require("../../assets/img_topics/Trabalho.png")
        },
        {
            title: "Tecnologia",
            img: require("../../assets/img_topics/Tecnologia.png")
        }
    ];
    // const colors = ['7087AF', '70AF7A', '8470AF', 'AFAD70'];
    const colors = ['444B55', '444B55', '444B55', '444B55'];
    const imgSources = ['../../assets/img_topics/Viagens.png', '../../assets/img_topics/Escola.png', '../../assets/img_topics/Trabalho.png', '../../assets/img_topics/Tecnologia.png'];

    const renderTopics = (search) => {
        return topics.map((topic, index) => {
            if(search == '' || topic.title.toLocaleLowerCase().includes(search.toLowerCase())) {
                let imgSource = topic[index];
                return (
                    <Topic2 key={index} ima={topic.img} title={topic.title} navigation={useNavigation()}/>
                );
            }
        })
    }

    const [searchInput, setSearchInput] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.containerSearchTopic}>
                    <FontAwesome name="search" size={22} color="#bbbbbb" style={{marginLeft: 15}} />
                    <TextInput
                        style={styles.searchTopic}
                        onChangeText={(value) => setSearchInput(value)}
                        value={searchInput}
                        placeholder={"Pesquisar tópico"}
                        placeholderTextColor={"#bbbbbb"}
                    />
                </View>
                {renderTopics(searchInput)}
            </ScrollView>
        </View>
    );

}
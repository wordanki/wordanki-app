import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import { styles } from "./styles"

import TopicContainer from "../../components/topicContainer";
// import TopicContainer2 from "../../components/topicContainer2";

export default function Categories({ route }) {

    const topics = ['Viagens', 'Escola', 'Trabalho', 'Tecnologia'];
    // const colors = ['7087AF', '70AF7A', '8470AF', 'AFAD70'];
    const colors = ['444B55', '444B55', '444B55', '444B55'];

    const renderTopics = (search) => {
        return topics.map((topic, index) => {
            if(search == '' || topic.toLocaleLowerCase().includes(search.toLowerCase())) {
                return (
                    <TopicContainer key={index} topic={topic} width={"100%"} marginTop={20} marginLeft={0} bgcolor={colors[index]} image={'../../assets/img_topics/Escola.png'} />
                    // <TopicContainer2/>
                );
            }
        })
    }

    const [searchInput, setSearchInput] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.containerSearchTopic}>
                    {/* <Text style={styles.title}>Tópicos</Text> */}
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
        )

}
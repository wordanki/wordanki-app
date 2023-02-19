import React from 'react';
import { Text, View, TouchableHighlight, ImageBackground, ScrollView } from 'react-native';

import TopicContainer from '../topicContainer'

import { styles } from './styles';

export default function Topics() {
    return (
        <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Estude por tópicos</Text>
            <Text style={styles.seeMore}>Ver mais</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.topics}>
            <TopicContainer topic={'Trabalho'} width={300} marginTop={10} marginLeft={20} bgcolor={'444444'}/>
            <TopicContainer topic={'Escola'} width={300} marginTop={10} marginLeft={20} bgcolor={'444444'}/>
        </ScrollView>
        </>
    );
}
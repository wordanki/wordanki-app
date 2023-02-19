import React from 'react';
import { Text, View, TouchableHighlight, ImageBackground, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import TopicContainer from '../topicContainer'

import { styles } from './styles';

export default function Topics() {
    return (
        <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Estude por tópicos</Text>
            <FontAwesome5 name="arrow-right" size={24} color="#dddddd" />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.topics}>
            <TopicContainer/>
            <TopicContainer/>
        </ScrollView>
        </>
    );
}
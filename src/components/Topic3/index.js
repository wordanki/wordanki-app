import React from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'

import { styles } from "./styles"

export default function TopicContainer( props ) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Palavras vistas:</Text>
                <Text style={styles.viewedWords}>{props.viewedWords} / {props.numberWords}</Text>
            </View>
        </View>
    );
}
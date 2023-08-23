import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles'

export default function WordContainer2( props ) {
    const [clicked, setClicked] = useState(false)
    const navigation = useNavigation()

    const viewWord = () => {
        navigation.navigate("Word", {
            word: props.word,
            translation: props.translation,
            description: props.description,
            originalPhrase: props.originalPhrase,
            translatedPhrase: props.translatedPhrase
        })
    }

    return (
        <TouchableHighlight
            onPress={viewWord}
            style={styles.container}
            underlayColor={"#424248"}
        >
            <View style={styles.inerContainer}>
                <View style={styles.content}>
                    <Text style={styles.word}>{props.word}</Text>
                    <View style={[styles.iconContainer, { marginHorizontal: 16 }]}>
                        <FontAwesome5 name="arrow-right" size={15} color="#ccffdd" />
                    </View>
                    <Text style={styles.translation}>{props.translation}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name="chevron-right" size={20} color="#bbccff" />
                </View>
            </View>
        </TouchableHighlight>
    );
}
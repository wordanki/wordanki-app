import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export default function TopicContainer( props ) {
    const [clicked, setClicked] = useState(false);

    return (
        <TouchableHighlight
            onPress={() => {setClicked(!clicked)}}
            style={styles.button}
            underlayColor={"#424248"}
        >
            <View style={styles.container}>
                <View style={styles.basicInfo}>
                    <Text style={styles.word}>House</Text>
                    <Text style={styles.translation}>Casa</Text>
                    <Ionicons name="chevron-down" size={20} color="#888888" style={styles.icon}/>
                </View>
                { clicked && 
                    <View style={styles.info}>
                        <Text style={styles.title}>Exemplo de frase</Text>
                        <View style={[styles.infoContainer, {borderColor: "#195D7D"}]}>
                            <Text style={styles.text}>I travel twice a month.</Text>
                            <Text style={[styles.text, {marginTop: 15}]}>Eu viajo duas vezes por mês.</Text>
                        </View>
                        <Text style={[styles.title, {marginTop: 15}]}>Definição</Text>
                        <View style={[styles.infoContainer, {borderColor: "#308046"}]}>
                            <Text style={styles.text}>Go from one place to another, typically over a distance of some length.</Text>
                        </View>
                    </View>
                }
            </View>
        </TouchableHighlight>
    );
}
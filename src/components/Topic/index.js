import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import Images from '../../assets/img_topics'

import { styles } from './styles';

export default function TopicContainer( props ) {

    // const img = `../../assets/img_topics/${props.topic}.png`;
    const img = `../../assets/img_topics/Viagens.png`;
    return (
        <TouchableHighlight 
            onPress={() => {}}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Image
                    source={require(img)}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Viagens</Text>
                    <View style={styles.textContainer}>
                        <View style={[styles.dot, {backgroundColor: "#14DC28"}]}></View>
                        <Text style={styles.text}>Palavras vistas: 256</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={[styles.dot, {backgroundColor: "#00B2FF"}]}></View>
                        <Text style={styles.text}>Revisões pendentes: 64</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Estudar</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}
import React from 'react';
import { Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

export default function Topics() {
    return (
        <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Estude por tópicos</Text>
            <FontAwesome5 name="arrow-right" size={24} color="#dddddd" />
        </View>
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img_topics/viagem.png')} resizeMode="cover" style={styles.imageContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.titleTopic}>Viagens</Text>
                <View style={styles.containerBottom}>
                    <View style={styles.info}>
                        <View style={[styles.dotInfo, {backgroundColor: "#14DC28"}]}></View>
                        <Text style={styles.textInfo}>Palavras{"\n"}vistas: 256</Text>
                    </View>
                    <View style={styles.info}>
                        <View style={[styles.dotInfo, {backgroundColor: "#00B2FF"}]}></View>
                        <Text style={styles.textInfo}>Revisões{"\n"}pendentes: 64</Text>
                    </View>
                </View>
            </View>
            </ImageBackground>
        </View>
        
        </>
    );
}
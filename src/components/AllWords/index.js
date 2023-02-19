import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import { styles } from './styles';

export default function AllWords() {
    return (
        <>
        <Text style={styles.title}>Todas as palavras</Text>
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.textInfoContainer}>
                    <View style={[styles.dotInfo, {backgroundColor: "#14DC28"}]}></View>
                    <Text style={styles.textInfo}>Palavras vistas</Text>
                </View>
                <Text style={styles.numberInfo}>256/10000</Text>
            </View>
            <View style={[styles.info, {marginTop: 15}]}>
                <View style={styles.textInfoContainer}>
                    <View style={[styles.dotInfo, {backgroundColor: "#00B2FF"}]}></View>
                    <Text style={styles.textInfo}>Revisões pendentes</Text>
                </View>
                <Text style={styles.numberInfo}>64</Text>
            </View>
            <TouchableHighlight style={styles.studyButton}>
                <Text style={styles.studyText}>Estudar</Text>
            </TouchableHighlight>
        </View>
        </>
    );
}
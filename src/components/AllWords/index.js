import React from 'react';

import { Text, View, TouchableHighlight,  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

export default function AllWords() {
    const navigation = useNavigation()

    const handleStudy = () => {
        navigation.navigate('Question')
    }

    return (
        <>
        <Text style={styles.title}>Todas as palavras</Text>
        {/* <LinearGradient style={styles.container} colors={['#3E5287', '#3E7587']}> */}
        <LinearGradient style={styles.container} colors={['#1B578Fdd', '#1B738Fdd']}>
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
            <TouchableHighlight onPress={handleStudy} style={styles.studyButtonContainer}>
                <View style={styles.studyButton}>
                    <Text style={styles.studyText}>Estudar</Text>
                </View>
            </TouchableHighlight>
        </LinearGradient>
        </>
    );
}
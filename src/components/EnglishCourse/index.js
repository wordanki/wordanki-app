import React from 'react';
import { Text, View, TouchableHighlight, Image, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

export default function KeepStudying() {
    return (
        <>
        <Text style={styles.title}>Curso de inglês</Text>
        <TouchableHighlight onPress={() => Linking.openURL('https://reactnative.dev')} style={styles.container}>
            <LinearGradient 
                style={styles.gradient}
                colors={['#1B578F', '#1B738F']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <Image source={require('../../assets/image-course.png')} style={styles.imageCourse} resizeMode={'contain'}/>
                <Text style={styles.textCourse}>Conheça o curso a Jornada Do Autodidata em Inglês e ganhe 40% de desconto</Text>
                <FontAwesome5 name="arrow-right" size={24} color="#dddddd"/>
            </LinearGradient>
        </TouchableHighlight>
        </>
    );
}
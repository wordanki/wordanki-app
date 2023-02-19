import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

export default function KeepStudying() {
    return (
        <>
        <Text style={styles.title}>Curso de inglês</Text>
        <View style={styles.container}>
            <Image source={require('../../assets/image-course.png')} style={styles.imageCourse} resizeMode={'contain'}/>
            <Text style={styles.textCourse}>Conheça o curso a Jornada Do Autodidata em Inglês e ganhe 40% de desconto</Text>
            <FontAwesome5 name="arrow-right" size={24} color="#dddddd"/>
        </View>
        </>
    );
}
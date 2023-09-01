import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import { ProgressBar, MD3Colors } from 'react-native-paper';

import { transparentize } from 'polished'

import Timeline from 'react-native-timeline-flatlist'


import { styles } from "./styles"

import Topic2 from "../../components/Topic2";
import { COLORS } from '../../theme';

export default function Categories({ route }) {
    const data = [
        { time: '1', title: 'Nível 1', description: '1 palavras aprendida 🔥' },
        { time: '2', title: 'Nível 2', description: '10 palavras aprendidas 🔥' },
        { time: '2', title: 'Nível 3', description: '30 palavras aprendidas 🔥' },
        { time: '4', title: 'Nível 4', description: '50 palavras aprendidas 🔥' },
        { time: '5', title: 'Nível 5', description: '250 palavras aprendidas 🔥' }
    ]

    return (
        <View style={styles.container}>
                    <View style={{width: "100%", height: 4, borderRadius: 2, backgroundColor: "#ffffff22"}}></View>

                    <View style={styles.statisticContainer}>
                        <Text style={styles.wordsText}>120 palavras vistas</Text>
                        <Text style={styles.levelText}>Nível {50}</Text>

                        <View style={styles.levelBar}>
                        <ProgressBar progress={0.5} color={transparentize(0.35, COLORS.GREEN_PRIMARY)} />
                        </View>
                    </View>

            <Timeline
                style={styles.list}
                data={data}
                circleSize={20}
                circleColor={transparentize(0.5, COLORS.ORANGE)}
                lineColor={COLORS.WHITE}
                timeContainerStyle={styles.timeContainer}
                timeStyle={styles.time}
                descriptionStyle={{ color: 'gray' }}
                innerCircle={'dot'}
                separator={false}
                detailContainerStyle={styles.detailContainer}
                columnFormat='two-column'
            />
        </View>
    );

}
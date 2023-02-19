import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function DailyGoal() {
    const value = 30;

    return (
        <>
        <Text style={styles.title}></Text>
        <View style={styles.dailyGoalContainer}>
            <Text style={styles.dailyGoalText}>Meta diária:
                
            </Text>
            <View style={styles.dailyGoalBar}>
                <View style={[styles.completedBar, {width: `${value}%`}]}></View>
                <Text style={{color: "#ffffff"}}> {value}/100</Text>
            </View>
        </View>
        </>
    );
}


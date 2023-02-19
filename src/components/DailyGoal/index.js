import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function DailyGoal() {
    const value = 64;

    return (
        <>
        <Text style={styles.title}>Meta diária</Text>
        <View style={styles.dailyGoalBar}>
            <View style={[styles.completedBar, {width: `${value}%`}]}></View>
            <Text style={styles.dailyGoalText}>{value}/100</Text>
        </View>
        </>
    );
}


import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { StackedBarChart } from "react-native-chart-kit"
import { SegmentedButtons } from 'react-native-paper'

import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import Statistic from '../../database/models/Statistic'

import Topic3 from "../../components/Topic3";

import { styles, defaultSpacing } from "./styles"
import { COLORS } from '../../theme';

const data = [
    50,
    25,
    10,
    85,
    5,
    17,
    74
]

export default function Profile({ route }) {
    const [value, setValue] = useState('')

    const isFocused = useIsFocused()

    useEffect(() => {
        const loadData = async () => {
            const [reviews, seen] = await Promise.all([
                Statistic.getQuantityByType(1, 0),
                Statistic.getQuantityByType(1, 1)
            ])

            console.log("R ",reviews)
            console.log(seen)
        }

        if (isFocused) loadData()
    }, [isFocused])

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.filterText}>Você aprendeu 30 palavras hoje! </Text>

            <View style={styles.filter}>
                <SegmentedButtons
                    style={styles.filterActions}
                    value={value}
                    onValueChange={setValue}
                    density='high'
                    buttons={[
                        {
                            value: 'walk',
                            label: 'Hoje',
                        },
                        {
                            value: 'train',
                            label: 'Semana',
                        },
                        { value: 'drive', label: 'Mês' },
                    ]}
                />

                <StackedBarChart
                    data={{
                        labels: ["Jan", "Fev"],
                        legend: ["L1", "L2"],
                        data: [
                          [60, 60],
                          [30, 30]
                        ],
                        barColors: [COLORS.BLUE, COLORS.GREEN_PRIMARY]
                    }}
                    width={Dimensions.get("window").width - defaultSpacing * 4}
                    height={220}
                    decimalPlaces={0}
                    hideLegend
                    chartConfig={{
                        backgroundGradientFrom: COLORS.WHITE,
                        backgroundGradientTo: COLORS.WHITE,
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, .1)`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${.5})`
                    }}
                    bezier
                />
            </View>

            <View style={styles.info}>
                <Ionicons
                    name="information-circle-sharp"
                    size={32}
                    color={COLORS.ORANGE}
                />

                <Text style={styles.infoText}>Informações adicionais </Text>
            </View>

            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <View style={styles.dataType}>
                        <MaterialCommunityIcons
                            name="pencil"
                            size={26}
                            color={COLORS.BLUE}
                        />

                        <Text style={styles.dataText}>Novas palavras</Text>
                    </View>

                    <Text style={styles.dataContent}>542</Text>
                </View>

                <View style={styles.data}>
                    <View style={styles.dataType}>
                        <MaterialIcons
                            name="search"
                            size={26}
                            color={COLORS.BLUE}
                        />

                        <Text style={styles.dataText}>Revisões</Text>
                    </View>

                    <Text style={styles.dataContent}>542</Text>
                </View>

                <View style={[styles.data, { borderBottomWidth: 0 }]}>
                    <View style={styles.dataType}>
                        <MaterialCommunityIcons
                            name="clock-outline"
                            size={26}
                            color={COLORS.BLUE}
                        />

                        <Text style={styles.dataText}>Início</Text>
                    </View>

                    <Text style={styles.dataContent}>542</Text>
                </View>
            </View>
        </ScrollView>
    )
}
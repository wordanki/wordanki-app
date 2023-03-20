import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit";

import { styles } from "./styles"

export default function Profile({ route }) {
    const [viewedWords, setViewedWords] = useState(true);
    const [revisedWords, setRevisedWords] = useState(true);

    const [viewedWordsData, setViewedWordsData] = useState([50, 100, 60, 120, 60, 20, 0, 2, 40, 50, 70, 20, 30, 40, 80, 90, 110, 130, 50, 60, 80, 20, 30, 15, 12, 10, 30, 40, 20, 70]);
    const [revisedWordsData, setRevisedWordsData] = useState([120, 30, 30, 60, 160, 20, 30, 40, 50, 80, 90, 70, 20, 30, 50, 80, 90, 100, 120, 70, 10, 30, 30, 80, 120, 130, 0, 10, 20, 80]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.profileContainer}>
                <View style={styles.user}>
                    <Text style={styles.username}>Pedro Henrique</Text>
                    <Text style={styles.email}>pedrohenriquefesi@gmail.com</Text>
                </View>
                <View style={styles.photo}></View>
            </View>
            <View style={styles.statisticContainer}>
                <Text style={styles.title}>Estatísticas</Text>
                <View style={styles.graphic}>

                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [{
                            data: viewedWordsData
                        },
                        {
                            data: revisedWordsData
                        }],
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={160}
                    // withHorizontalLines={false}
                    yAxisInterval={10}
                    yLabelsOffset={10}
                    xLabelsOffset={-5}
                    withVerticalLines={false}
                    chartConfig = {{
                        backgroundGradientFrom: "#1E2923",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#08130D",
                        backgroundGradientToOpacity: 0,
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(20, 220, 40, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        strokeWidth: 2, // optional, default 3
                        barPercentage: 0.5,
                        useShadowColorFromDataset: false, // optional
                        style: {

                        },
                        propsForDots: {
                            r: "2",
                        }
                    }}
                    bezier
                    style={{
                        borderRadius: 15,
                    }}
                />

                </View>
                <View style={styles.descriptionContainer}>
                    <TouchableHighlight
                        style={[styles.descriptionButton, {marginRight: 20}]}
                        onPress={() => setViewedWords(!viewedWords)}
                    >
                        <View style={[styles.description, {backgroundColor: viewedWords ? "#4E4E53" : "#38383E"}]}>
                            <View style={[styles.dot, {borderColor: "#14DC28", backgroundColor: viewedWords ? "#14DC28" : "transparent"}]}></View>
                            <Text style={styles.descriptionText}>Plavras vistas</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.descriptionButton}
                        onPress={() => setRevisedWords(!revisedWords)}
                    >
                        <View style={[styles.description, {backgroundColor: revisedWords ? "#4E4E53" : "#38383E"}]}>
                            <View style={[styles.dot, {borderColor: "#00B2FF", backgroundColor: revisedWords ? "#00B2FF" : "transparent"}]}></View>
                            <Text style={styles.descriptionText}>Palavras revisadas</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.topicsContainer}>
                <Text style={styles.title}>Tópicos estudados</Text>
                <View style={styles.topics}></View>
                <View style={styles.viewMoreContainer}>
                    <Text style={styles.viewMore}>Ver mais</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={[styles.button, {backgroundColor: "#2574A0"}]}>
                    <Text style={styles.buttonText}>Compartilhar</Text>
                    <Ionicons name="share-social-outline" size={25} color="#dddddd" />
                </View>
                <View style={[styles.button, {backgroundColor: "#B24139", marginLeft: 20}]}>
                    <Text style={styles.buttonText}>Sair</Text>
                    <Ionicons name="exit-outline" size={25} color="#dddddd" />
                </View>
            </View>
            <View style={{height: 30}}></View>
        </ScrollView>
    )
}
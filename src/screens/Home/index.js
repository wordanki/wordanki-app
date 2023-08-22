import { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import {
    CopilotProvider,
    CopilotStep,
    walkthroughable,
    useCopilot
  } from "react-native-copilot";


import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useIsFocused } from '@react-navigation/native'

import Topic from '../../components/Topic'
import LinkCard from '../../components/LinkCard'

import Word from '../../database/models/Word'

import { styles } from "./styles"

const CopilotText = walkthroughable(Text);

const topics = [
    {
        title: "Viagem",
        img: require("../../assets/img_topics/Viagem.jpg")
    },
    {
        title: "Escola",
        img: require("../../assets/img_topics/Escola.jpg")
    },
    {
        title: "Trabalho",
        img: require("../../assets/img_topics/Trabalho.jpg")
    },
    {
        title: "Tecnologia",
        img: require("../../assets/img_topics/Tecnologia.jpg")
    }
];

export default function Home({ route }) {
    const [all, setAll] = useState(0)
    const [seen, setSeen] = useState(0)
    const [reviews, setReviews] = useState(0)

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const { start } = useCopilot()

    useEffect(() => {
        if (isFocused) {
            Word.getQuantity().then(response => setAll(response))
            Word.getNoSeenQuantity().then(response => setSeen(response))
            Word.getReviewsQuantity().then(response => setReviews(response))
        }
    }, [isFocused])

    return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View>
                    <CopilotStep text="This is a hello world example!" order={1} name="hello">
                        <CopilotText style={styles.title}>Meta diária</CopilotText>
                    </CopilotStep>

                    <View style={styles.dailyGoalBar}>
                        <View style={[styles.completedBar, { width: `${64}%` }]}></View>

                        <CopilotStep text="This is a hello world example!" order={2} name="hellso">
                        <CopilotText style={styles.dailyGoalText}>{64} / 100</CopilotText>
                    </CopilotStep>
                        
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Estudo de vocabulário</Text>

                    <LinearGradient style={styles.allWordsContainer} colors={['#465baF', '#1B699F', '#1B88bF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                        <View style={styles.info}>
                            <View style={styles.textInfoContainer}>
                                <View style={[styles.dotInfo, { backgroundColor: "#30B956" }]}></View>
                                <Text style={styles.textInfo}>Palavras vistas</Text>
                            </View>

                            <Text style={styles.numberInfo}>{`${seen} / ${all}`}</Text>
                        </View>

                        <View style={[styles.info, { marginTop: 16 }]}>
                            <View style={styles.textInfoContainer}>
                                <View style={[styles.dotInfo, { backgroundColor: "#00B2FF" }]} />
                                <Text style={styles.textInfo}>Revisões pendentes</Text>
                            </View>

                            <Text style={styles.numberInfo}>{reviews}</Text>
                        </View>

                        <TouchableHighlight onPress={() =>  start()/*navigation.navigate("Question")*/} style={styles.studyButtonContainer}>
                            <View style={styles.studyButton}>
                                <Text style={styles.studyText}>Estudar</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>

                <View>
                    <Text style={styles.title}>Tópicos recentes</Text>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.topics}
                    >
                        {topics.map((topic, index) => (
                            <Topic
                                key={index}
                                index={index}
                                ima={topic.img}
                                title={topic.title}
                                navigation={navigation}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={{ height: 16 }} />
            </ScrollView>
    )
}
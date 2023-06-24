import { useState, useEffect } from 'react'

import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useIsFocused } from '@react-navigation/native'

import Topic from '../../components/Topic'
import LinkCard from '../../components/LinkCard'

import Word from '../../database/models/Word'

import { styles } from "./styles"

const topics = [
    {
        title: "Viagens",
        // img: require("../../assets/img_topics/Viagens.png")
    },
    {
        title: "Escola",
        // img: require("../../assets/img_topics/Escola.png")
    },
    {
        title: "Trabalho",
        // img: require("../../assets/img_topics/Trabalho.png")
    },
    {
        title: "Tecnologia",
        // img: require("../../assets/img_topics/Tecnologia.png")
    }
];

export default function Home({ route }) {
    const [wordData, setWordData] = useState({
        all: 0,
        seen: 0,
        reviews: 0
    })

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        if (!isFocused) return

        (async () => {
            const all = await Word.getQuantity()
            const seen = await Word.getNoSeenQuantity()
            const reviews = await Word.getReviewsQuantity()

            setWordData({
                all,
                seen,
                reviews
            })
        })()
    }, [isFocused])

    return (
        <ScrollView style={styles.container}>
            {/* <View>
                <Text style={styles.title}>Meta diária</Text>

                <View style={styles.dailyGoalBar}>
                    <View style={[styles.completedBar, { width: `${64}%` }]}></View>
                    <Text style={styles.dailyGoalText}>{64}/100</Text>
                </View>
            </View> */}

            <View>
                <Text style={styles.title}>Todas as palavras</Text>

                <LinearGradient style={styles.allWordsContainer} colors={['#344baF', '#1B719F']}>
                    <View style={styles.info}>
                        <View style={styles.textInfoContainer}>
                            <View style={[styles.dotInfo, { backgroundColor: "#30B956" }]}></View>
                            <Text style={styles.textInfo}>Palavras vistas</Text>
                        </View>

                        <Text style={styles.numberInfo}>{`${wordData.seen}/${wordData.all}`}</Text>
                    </View>

                    <View style={[styles.info, { marginTop: 15 }]}>
                        <View style={styles.textInfoContainer}>
                            <View style={[styles.dotInfo, { backgroundColor: "#00B2FF" }]} />
                            <Text style={styles.textInfo}>Revisões pendentes</Text>
                        </View>

                        <Text style={styles.numberInfo}>{wordData.reviews}</Text>
                    </View>

                    <TouchableHighlight onPress={() => navigation.navigate("Question")} style={styles.studyButtonContainer}>
                        <View style={styles.studyButton}>
                            <Text style={styles.studyText}>Estudar</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>

            {/* <View>
                <Text style={styles.title}>Tópicos recentes</Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.topics}
                >
                    {topics.map((topic, index) => (
                        <Topic 
                            key={index} 
                            ima={topic.img} 
                            title={topic.title} 
                            navigation={navigation} 
                        />
                    ))}
                </ScrollView>
            </View> */}

            <LinkCard 
                title="Sua opinião"
                link="https://forms.gle/QmV6CNqEfdBDJvjF8"
                img="feedback.png"
                colors={['#84e', '#94b']}
                text="Nos dê um feedback sobre o aplicativo para que possamos melhorá-lo!" 
            />

            <View style={{ height: 20 }} />
        </ScrollView>
    )
}
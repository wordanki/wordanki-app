import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

import Topic from '../../components/Topic'
import EnglishCourse from '../../components/EnglishCourse'

import Word from '../../database/models/Word'
// import Phrase from '../../database/models/Phrase'

import { styles } from "./styles"
import { useEffect } from 'react'

export default function Home({ route }) {
    const navigation = useNavigation();

    const handleStudy = async () => {
        try {
            const data = await Word.findAll();

            navigation.navigate(data.length ? "Question" : "DownloadPhrases");
        } catch(error) {
            console.log(error);
        }   
    }

    const topics = [
        {
            title: "Viagens",
            img: require("../../assets/img_topics/Viagens.png")
        },
        {
            title: "Escola",
            img: require("../../assets/img_topics/Escola.png")
        },
        {
            title: "Trabalho",
            img: require("../../assets/img_topics/Trabalho.png")
        },
        {
            title: "Tecnologia",
            img: require("../../assets/img_topics/Tecnologia.png")
        }
    ];

    const renderTopics = () => {
        return topics.map((topic, index) => {
            return (<Topic key={index} ima={topic.img} title={topic.title} navigation={navigation}/>)
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Meta diária</Text>

                <View style={styles.dailyGoalBar}>
                    <View style={[styles.completedBar, { width: `${64}%` }]}></View>
                    <Text style={styles.dailyGoalText}>{64}/100</Text>
                </View>
            </View>

            <View>
                <Text style={styles.title}>Todas as palavras</Text>

                <LinearGradient style={styles.allWordsContainer} colors={['#1B578Fdd', '#1B738Fdd']}>
                    <View style={styles.info}>
                        <View style={styles.textInfoContainer}>
                            <View style={[styles.dotInfo, { backgroundColor: "#14DC28" }]}></View>
                            <Text style={styles.textInfo}>Palavras vistas</Text>
                        </View>

                        <Text style={styles.numberInfo}>256/10000</Text>
                    </View>

                    <View style={[styles.info, { marginTop: 15 }]}>
                        <View style={styles.textInfoContainer}>
                            <View style={[styles.dotInfo, { backgroundColor: "#00B2FF" }]} />
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
            </View>

            <View>
                <Text style={styles.title}>Tópicos recentes</Text>

                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.topics}
                >
                    {renderTopics()}
                </ScrollView>
            </View>

            <EnglishCourse />

            <View style={{ height: 20 }} />
        </ScrollView>
    )
}
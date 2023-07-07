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
    const [all, setAll] = useState(0)
    const [seen, setSeen] = useState(0)
    const [reviews, setReviews] = useState(0)

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        if (!isFocused) return

        Word.getQuantity().then(response => setAll(response))
        Word.getNoSeenQuantity().then(response => setSeen(response))
        Word.getReviewsQuantity().then(response => setReviews(response))
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
                <Text style={styles.title}>Estudo de vocabulário</Text>

                <LinearGradient style={styles.allWordsContainer} colors={['#465baF', '#1B699F', '#1B88bF']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                    <View style={styles.info}>
                        <View style={styles.textInfoContainer}>
                            <View style={[styles.dotInfo, { backgroundColor: "#30B956" }]}></View>
                            <Text style={styles.textInfo}>Palavras vistas</Text>
                        </View>

                        <Text style={styles.numberInfo}>{`${seen}/${all}`}</Text>
                    </View>

                    <View style={[styles.info, { marginTop: 16 }]}>
                        <View style={styles.textInfoContainer}>
                            <View style={[styles.dotInfo, { backgroundColor: "#00B2FF" }]} />
                            <Text style={styles.textInfo}>Revisões pendentes</Text>
                        </View>

                        <Text style={styles.numberInfo}>{reviews}</Text>
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

            <Text style={styles.title}>Sobre o MVP do Wordanki</Text>
            <LinearGradient 
                style={styles.MVPcontainer}
                colors={['#438288', '#458979']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.MVPtext}>
                    Esta não é a versão final do aplicativo. Lançamos o MVP (Produto Mínimo Viável) com o objetivo de obter avaliações e sugestões que nos ajudarão a aprimorar a experiência do usuário na versão final. Portanto, é possível que ocorram traduções incorretas de frases, as quais serão corrigidas nas próximas atualizações.
                </Text>
            </LinearGradient>

            <LinkCard 
                title="Avalie o aplicativo"
                link="https://forms.gle/QmV6CNqEfdBDJvjF8"
                img="feedback.png"
                colors={['#84e', '#94b']}
                text="Avalie o MVP do aplicativo para que possamos melhorar a versão final" 
            />

            <View style={{ height: 16 }} />
        </ScrollView>
    )
}
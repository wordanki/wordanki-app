import { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import {
    CopilotProvider,
    CopilotStep,
    walkthroughable,
    useCopilot
} from "react-native-copilot"

import { useTheme, FAB, AnimatedFAB } from "react-native-paper"

import { transparentize } from 'polished'

import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import { ProgressBar, MD3Colors } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useIsFocused } from '@react-navigation/native'

import { Loading } from '../../components/Loading'
import Word from '../../database/models/Word'

import { styles } from "./styles"
import { COLORS } from '../../theme';

const CopilotText = walkthroughable(Text);

export default function Home({ route }) {
    const [seen, setSeen] = useState(0)
    const [reviews, setReviews] = useState(0)

    const [isOpen, setIsOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const { start } = useCopilot()

    const handleLearn = type => navigation.navigate("Question", { type })

    useEffect(() => {
        const loadData = async () => {
            try {
                const [seen, reviews] = await Promise.all([
                    Word.getNoSeenQuantity(),
                    Word.getReviewsQuantity()
                ])
    
                setSeen(seen)
                setReviews(reviews)
            } catch(error) {} finally {
                setIsLoaded(true)
            }
        }

        if (isFocused) loadData()
    }, [isFocused])

    if (!isLoaded) return <Loading />

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.infoText}>Você já aprendeu</Text>

                        <View style={styles.infoMainText}>
                            <Text style={styles.infoQuantity}>{seen}</Text>
                            <Text style={styles.infoText}>palavras! 👏</Text>
                        </View>
                    </View>

                    <Image source={require("../../assets/trofeu.png")} style={styles.infoImg} />
                </View>

                <View style={styles.studyContainer}>
                    <View style={styles.reviewHeader}>
                        <View style={styles.reviewContent}>
                            <Text style={styles.reviewTitle}>Hmm...</Text>
                            <Text style={styles.reviewText}>Parece que há {reviews} revisões pendentes 🔍</Text>
                        </View>

                        <Image resizeMode='contain' source={require("../../assets/revisao.png")} style={styles.reviewImg} />
                    </View>

                    <View style={styles.reviewItems}>
                        <View style={styles.progressBar}>
                            <ProgressBar style={styles.progressBar} progress={1} color={transparentize(0.35, COLORS.BLUE)} />
                        </View>

                        <TouchableOpacity onPress={() => handleLearn(0)} style={styles.reviewButton}>
                            <Text style={styles.reviewButtonText}>REVISAR</Text>

                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={32}
                                color={COLORS.BLUE}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.studyContainer}>
                    <View style={styles.reviewHeader}>
                        <View style={styles.reviewContent}>
                            <Text style={styles.reviewTitle}>Isso aí!</Text>
                            <Text style={styles.reviewText}>Continue aumentando seu vocabulário ✏️</Text>
                        </View>

                        <Image resizeMode='contain' source={require("../../assets/estudo.png")} style={styles.studyImg} />
                    </View>

                    <View style={styles.reviewItems}>
                        <View style={styles.progressBar}>
                            <ProgressBar progress={1} color={transparentize(0.35, COLORS.GREEN_PRIMARY)} />
                        </View>

                        <TouchableOpacity onPress={() => handleLearn(1)} style={styles.reviewButton}>
                            <Text style={styles.studyButtonText}>ESTUDAR</Text>

                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={32}
                                color={COLORS.GREEN_PRIMARY}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => handleLearn(2)} style={styles.studyAndReviewButton}>
                    <Text style={styles.studyAndReviewButtonText}>Estudar e Revisar</Text>

                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={32}
                        color={COLORS.GRAY_PRIMARY}
                    />
                </TouchableOpacity>

                <View style={styles.bottomSize} />
            </ScrollView>

            {/* <FAB.Group
                open={isOpen}
                label={!isOpen && "Estudar"}
                icon={isOpen ? "close" : "pencil"}
                fabStyle={ styles.fab}    
                visible={true}
                iconMode
                color={COLORS.GREEN_PRIMARY}
                actions={[
                    {
                        icon: "magnify",
                        label: "Revisar",
                        style: styles.fab,
                        color: COLORS.BLUE,
                        onPress: () => {

                        },
                    },
                    {
                        icon: "pencil",
                        label: "Estudar",
                        style: styles.fab,
                        color: COLORS.GREEN_PRIMARY,
                        onPress: () => {

                        },
                    },
                    {
                        icon: "plus",
                        label: "Estudar e Revisar",
                        style: styles.fab,
                        color: COLORS.ORANGE,
                        onPress: () => {

                        },
                    },
                ]}
                onStateChange={({ open }) => setIsOpen(open)}
            /> */}
        </>
    )
}
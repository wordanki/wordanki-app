import { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons'

import ProgressBar from "react-native-animated-progress"

import Word from '../../database/models/Word'
import Phrase from '../../database/models/Phrase'

import data from '../../assets/data.json'

import { styles } from "./styles"
import { COLORS } from '../../theme'

export default function DownloadPhrases({ route }) {
    const [progress, setProgress] = useState(0)
    const [isCompleted, setIsCompleted] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        (async () => {
            const words = await Word.findAll()
            const wordss = await Phrase.findAll()

            console.log(words.length, wordss.length)

            let counter = 0;

            for (let index = 0; index < data.length; index++) {
                const id = await Word.create({
                    english: data[index][0].words.english,
                    portuguese: data[index][0].words.portuguese,
                    class: data[index][0].class
                })

                for (let jindex = 0; jindex < data[index].length; jindex++) {
                    await Phrase.create({
                        english: data[index][jindex].phrases.english,
                        portuguese: data[index][jindex].phrases.portuguese,
                        word_id: id
                    })

                    counter++;

                    setProgress(counter * 100 / (data.length * data[0].length))
                }
            }

            setIsCompleted(true)
        })()
    }, [])

    const handleContinue = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/study-progress.png')}
                    style={styles.image}

                />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Estamos salvando suas palavras em inglês...</Text>

                <View>
                    <ProgressBar
                        progress={progress}
                        height={7}
                        backgroundColor={COLORS.GREEN}
                    />
                </View>

                <TouchableOpacity onPress={handleContinue} disabled={!isCompleted} style={[styles.button, { backgroundColor: isCompleted ? COLORS.GREEN_PRIMARY : COLORS.GRAY_PRIMARY }]}>
                    <Text style={styles.buttonText}>Estudar</Text>
                    <AntDesign name="arrowright" size={22} color={COLORS.WHITE} />
                </TouchableOpacity>
            </View>
        </View>
    );

}
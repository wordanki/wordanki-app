import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import AppIntroSlider from 'react-native-app-intro-slider'

import { useGlobal } from '../../hooks/global'
import localStorage from '../../helpers/localStorage'

import { COLORS } from "../../theme"

import { styles } from "./styles"

const slides = [
    {
        key: 'one',
        title: 'Bem-vindo ao Wordanki',
        text: 'Aprenda milhares de palavras em inglês de forma rápida e eficiente',
        image: require('../../assets/logo.png'),
        sizeImage: 200,
        backgroundColor: '#3AAD5A',
    },
    {
        key: 'two',
        title: 'Disponível Offline',
        text: 'Continue estudando mesmo quando não estiver conectado',
        image: require('../../assets/airplane.png'),
        sizeImage: 150,
        backgroundColor: '#0A7CB1',
    },
    {
        key: 'three',
        title: 'Repetição Espaçada',
        text: 'Estude com algoritmos eficientes para um melhor aprendizado',
        image: require('../../assets/algorithm.png'),
        sizeImage: 150,
        backgroundColor: '#8367D0',
    }
]

export default function Welcome({ route }) {
    const navigation = useNavigation()
    const { setFirstTime } = useGlobal()

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
                <Text style={styles.title}>{item.title}</Text>

                <Image 
                    source={item.image} 
                    style={{...styles.image, height: item.sizeImage}} 
                    resizeMode='contain'
                />

                <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }

    const renderNextButton = () => (
        <View style={styles.buttonCircle}>
            <Feather
                name={'arrow-right'}
                size={28}
                color={COLORS.WHITE}
            />
        </View>
    )

    const renderDoneButton = () => (
        <View style={styles.buttonCircle}>
            <Feather
                name={'check'}
                size={28}
                color={COLORS.WHITE}
            />
        </View>
    )

    const onDone = async () => {
        localStorage.storeData("user.first-time", false)

        setFirstTime(false)

        navigation.replace('Login')
    }

    return (
        <AppIntroSlider
            style={styles.container}
            data={slides}
            onDone={onDone}
            renderItem={renderItem}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
        />
    )
}
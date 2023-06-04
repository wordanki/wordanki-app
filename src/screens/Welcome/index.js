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
        text: 'Estude de maneira rápida não importa onde esteja.',
        image: require('../../assets/logo.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Disponível Offline',
        text: 'Continue estudando mesmo quando não estiver conectado.',
        image: require('../../assets/airplane.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Repetição Espaçada',
        text: 'Aprenda com algortimos eficientes para uma melhor experiência.',
        image: require('../../assets/algorithm.png'),
        backgroundColor: '#22bcb5',
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
                    style={styles.image} 
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
        await localStorage.storeData("@settings/first-time", true)

        setFirstTime(false)

        navigation.navigate('Main')
    }

    return (
        <AppIntroSlider
            data={slides}
            onDone={onDone}
            renderItem={renderItem}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
        />
    )
}
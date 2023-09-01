import {
    View,
    Text,
    Image,
    Share,
    TouchableOpacity,
    Platform,
    Linking,
} from 'react-native'

import { BeautifulName } from "beautiful-name"

import { useNavigation } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import { useAuth } from '../../hooks/auth'

import {
    DrawerContentScrollView,
} from '@react-navigation/drawer'

import { UserPhoto } from '../UserPhoto'

import { ButtonDrawer } from '../ButtonDrawer'

import { COLORS } from '../../theme'
import { styles } from './styles'

const phrases = [
    "Não conte horas trabalhadas, mas metas alcançadas.",
    "Cada escolha que você faz tem um resultado.",
    "Caminhos difíceis levam a destinos incríveis.",
    "Oportunidades não acontecem, você as cria.",
    "Quem não tenta, não erra, mas também não evolui.",
    "Qual é a graça de viver em pesadelos e morrer com sonhos?",
    "Sentimentos são algo que você tem e não algo que você é."
]

export const Drawer = props => {
    const navigation = useNavigation()
    const { user, isLogged } = useAuth()

    const userName = "Estudante"//user ? new BeautifulName(user.name).firstName : "Estudante";

    const handleShare = async () => {
        Share.share({
            message: 'Também quer aprender inglês de uma maneira rápida e eficiente? 🚀🚀\n\n Baixe o Wordanki na Play Store: ❤️❤️\n\nhttps://play.google.com/store/apps/details?id=com.wordanki.app ',
        })
    }

    const handleReview = async () => {
        if (Platform.OS === "android") {
            Linking.openURL(
                `https://play.google.com/store/apps/details?id=com.wordanki.app&showAllReviews=true`
            )
        } else if (Platform.OS === "ios") {
            Linking.openURL(
                `https://apps.apple.com/app/apple-store/id570060128?action=write-review`
            )
        }
    }

    const handleLogin = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}

                contentContainerStyle={{ backgroundColor: COLORS.BGCOLOR_DARK }}>

                <View style={styles.profileContainer}>
                    <UserPhoto size='HIGHER' />

                    <View style={styles.userContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.username}>
                                {`Olá, ${userName}! 👋`}
                            </Text>

                            <Text style={styles.usermail}>
                                "{phrases[new Date().getDay()]}"
                            </Text>

                            {/* {user ? (
                                <Text style={styles.usermail}>
                                    {user.email}
                                </Text>
                            ) : (
                                <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                                    <Text style={styles.loginButtonText}>Salvar meu progresso</Text>

                                    <MaterialIcons
                                        name="keyboard-arrow-right"
                                        size={25}
                                        color={COLORS.BLACK_SECONDARY}
                                    />
                                </TouchableOpacity>
                            )} */}
                        </View>
                    </View>

                    {/* <View style={{width: "100%", height: 4, borderRadius: 2, backgroundColor: "#ffffff22"}}></View> */}

                    {/* <View style={styles.statisticContainer}>
                        <Text style={styles.wordsText}>120 palavras vistas</Text>
                        <Text style={styles.levelText}>Nível {level}</Text>

                        <View style={styles.levelBar}>
                            <View style={[styles.completedBar, { width: `${level}%` }]}></View>
                        </View>
                    </View> */}
                </View>

                <View style={styles.buttonsContainer}>
                    {/* <ButtonDrawer iconName={"analytics-outline"} text={"Ver progresso"} handle={handleShare} /> */}
                    <ButtonDrawer iconName={"share-social-outline"} text={"Compartilhar app"} handle={handleShare} />
                    <ButtonDrawer iconName={"star-outline"} text={"Avaliar app"} handle={handleReview} />
                    {/* <ButtonDrawer iconName={"exit-outline"} text={"Sair do app"} handle={handleShare} /> */}
                </View>
            </DrawerContentScrollView>
        </View>
    );
};
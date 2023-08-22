import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'

import { useAuth } from '../../hooks/auth'

import { googleAuthUrl } from '../../config/google'

import api from '../../services/api'

import LogoImage from '../../assets/logo_blue.png'
import GoogleImage from '../../assets/logo_google.png'
import AppleImage from '../../assets/logo_apple_gray.png'

import { styles } from "./styles"

export default function Login() {
    const navigation = useNavigation()
    const { signIn } = useAuth()

    const handleWithoutLogin = () => {
        navigation.replace('Main')
    }

    const handleGoogleLogin = async () => {
        await signIn()
        navigation.replace('Main')
    }

    const handleAppleLogin = async () => {
        try {

        } catch (error) {

        }
    }

    const openPrivacyPolitics = async () => {
        await WebBrowser.openBrowserAsync('https://wordanki.com/politica-de-privacidade')
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Image 
                    source={LogoImage}
                    style={styles.image} 
                    resizeMode='contain'
                />

                <Text style={styles.text}>
                    Entre com uma conta para não perder seu progresso de aprendizado!
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableHighlight onPress={handleGoogleLogin} style={styles.button}>
                        <View style={styles.contentButton}>
                            <Image 
                                source={GoogleImage}
                                style={styles.imageButton} 
                                resizeMode='contain'
                            />

                            <Text style={styles.textButton}>Continuar com Google</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={handleAppleLogin} style={styles.button}>
                        <View style={styles.contentButton}>
                            <Image 
                                source={AppleImage}
                                style={styles.imageButton} 
                                resizeMode='contain'
                            />
                            
                            <Text style={styles.textButton}>Continuar com Apple</Text>
                        </View>
                    </TouchableHighlight>

                    <Text onPress={handleWithoutLogin} style={styles.withoutRegister}>Continuar sem registro</Text>
                </View>

                <Text style={styles.textFooter}>
                    Ao usar o Wordanki, você confirma que leu e concorda com nossos 

                    {" "}

                    <Text onPress={openPrivacyPolitics} style={{textDecorationLine: "underline"}}>
                        termos de uso
                    </Text> 
                    
                    {" e "}

                    <Text onPress={openPrivacyPolitics} style={{textDecorationLine: "underline"}}>
                        política de privacidade
                    </Text>.
                </Text>
            </View>
        </View>
    )
}
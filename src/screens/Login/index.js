import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as WebBrowser from 'expo-web-browser'

import { AntDesign } from '@expo/vector-icons'

import { Loading } from '../../components/Loading'

import { useAuth } from '../../hooks/auth'

import LogoImage from '../../assets/conecte-se.png'
import GoogleImage from '../../assets/logo_google.png'
import AppleImage from '../../assets/logo_apple_gray.png'

import { styles } from "./styles"
import { COLORS } from '../../theme'

export default function Login2() {
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()
    const { signIn } = useAuth()

    const handleExitButton = () => {
        navigation.replace("Main")
    }

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true)

            await signIn()
            navigation.replace('Main')
        } catch (error) { } finally {
            setIsLoading(false)
        }
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
            <TouchableOpacity onPress={() => handleExitButton()} style={styles.exitButton}>
                <AntDesign name="close" size={32} color={COLORS.BLACK_SECONDARY} />
            </TouchableOpacity>

            <View style={styles.container}>
                <Image
                    source={LogoImage}
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.text}>
                    Entre com uma conta para não perder seu progresso de aprendizado! 🚀
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => handleGoogleLogin()} style={styles.button}>
                        <View style={styles.contentButton}>
                            {isLoading ? <Loading /> : (
                                <>
                                    <Image
                                        source={GoogleImage}
                                        style={styles.imageButton}
                                        resizeMode='contain'
                                    />

                                    <Text style={styles.textButton}>Continuar com Google</Text>
                                </>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleExitButton()}>
                        <Text style={styles.withoutRegister}>Continuar sem registro</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={openPrivacyPolitics}>
                    <Text style={styles.textFooter}>
                        Termos de uso e política de privacidade
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
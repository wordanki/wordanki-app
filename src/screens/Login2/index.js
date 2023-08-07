import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'

import { styles } from "./styles"

export default function Login2() {
    const imgLogo = require('../../assets/logo_blue.png')
    const imgGoogle = require('../../assets/logo_google.png')
    const imgApple = require('../../assets/logo_apple_gray.png')

    const navigation = useNavigation()

    const handleExitButton = () => {
        
    }

    const handleGoogleLogin = async () => {
        try {

        } catch (error) {

        }
    }

    const handleAppleLogin = async () => {
        try {

        } catch (error) {

        }
    }

    const openURL = async url => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        }
    }

    return (
        <View style={styles.page}>
            <View onPress={() => handleExitButton} style={styles.exitButton}>
                <Ionicons name="close" size={18} color="#ffffff" />
            </View>

            <View style={styles.container}>
                <Image 
                    source={imgLogo}
                    style={styles.image} 
                    resizeMode='contain'
                />

                <Text style={styles.text}>
                    Entre com uma conta para não perder seu progresso de aprendizado!
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableHighlight onPress={() => handleGoogleLogin()} style={styles.button}>
                        <View style={styles.contentButton}>
                            <Image 
                                source={imgGoogle}
                                style={styles.imageButton} 
                                resizeMode='contain'
                            />
                            <Text style={styles.textButton}>Continuar com Google</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => handleAppleLogin()} style={styles.button}>
                        <View style={styles.contentButton}>
                            <Image 
                                source={imgApple}
                                style={styles.imageButton} 
                                resizeMode='contain'
                            />
                            <Text style={styles.textButton}>Continuar com Apple</Text>
                        </View>
                    </TouchableHighlight>

                    <Text onPress={() => handleExitButton} style={styles.withoutRegister}>Continuar sem registro</Text>
                </View>

                <Text style={styles.textFooter}>
                    Ao usar o Wordanki, você confirma que leu e concorda com nossos <Text onPress={() => openURL("https://wordanki.com/")} style={{textDecorationLine: "underline"}}>termos de uso</Text> e <Text onPress={() => openURL("https://wordanki.com/")} style={{textDecorationLine: "underline"}}>política de privacidade</Text>.
                </Text>
            </View>
        </View>
    )
}
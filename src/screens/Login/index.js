import { useState, useEffect } from 'react'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as Facebook from 'expo-auth-session/providers/facebook'

import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithCredential
} from 'firebase/auth'

import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { Alert } from '../../components/Alert'

import { auth } from '../../config/firebase'

import * as googleConfig from '../../config/google'
import * as facebookConfig from '../../config/facebook'

import { TextInput } from '../../components/TextInput'

import { COLORS } from "../../theme"

import { styles } from "./styles"

WebBrowser.maybeCompleteAuthSession()

const handleGoogleLogin = async access_token => {
    try {
        const credential = GoogleAuthProvider.credential(
            null,
            access_token
        )

        await signInWithCredential(auth, credential)
    } catch (error) {
        console.log(error)
    }
}

const handleFacebookLogin = async () => {
    try {
        const credential = FacebookAuthProvider.credential(
            facebookResponse.params.access_token
        )

        await signInWithCredential(auth, credential)
    } catch (error) {
        console.log(error)
    }
}

export default function Login({ route }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [isVisible, setIsVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState({ type: 'success', message: '' })

    const navigation = useNavigation()

    const [, googleResponse, googlePromptAsync] = Google.useAuthRequest({
        clientId: googleConfig.clientId
    })

    const [, facebookResponse, facebookPromptAsync] = Facebook.useAuthRequest({
        clientId: facebookConfig.clientId
    })

    useEffect(() => {
        googleResponse?.type === 'success' && handleGoogleLogin(googleResponse.params.access_token)
        facebookResponse?.type === 'success' && handleFacebookLogin(facebookResponse.params.access_token)
    }, [googleResponse, facebookResponse])

    const handleLogin = async () => {
        setIsLoading(true)

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setIsVisible(true)

            setError({
                type: 'error',
                message: 'Email ou senha inválido! Por favor, tente novamente.'
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Alert
                visible={isVisible}
                setIsVisible={setIsVisible}
                message={error.message}
                type={error.type}
            />

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.welcomeText}>Bem-vindo</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.spacing}>
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            value={email}
                            fontAwesomeIconName="user"
                            onChangeText={(value) => setEmail(value)}
                        />
                    </View>

                    <View style={styles.spacing}>
                        <TextInput
                            isSecure
                            label="Senha"
                            value={password}
                            placeholder="Senha"
                            fontAwesomeIconName="lock"
                            onChangeText={(value) => setPassword(value)}
                        />
                    </View>

                    <View style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogin}
                        style={[
                            styles.button,
                            styles.spacing,
                            { backgroundColor: COLORS.GREEN_PRIMARY }
                        ]}>
                            {isLoading ? (
                                <AntDesign
                                    name="loading1"
                                    size={18}
                                    color={COLORS.WHITE}
                                />
                            ) : (

                                <Text style={styles.buttonText}>Iniciar sessão</Text>
                            )}
                    </TouchableOpacity>

                    <View style={[styles.loginServices, styles.spacing]}>
                        <TouchableOpacity onPress={() => facebookPromptAsync()}>
                            <FontAwesome
                                name="facebook"
                                size={22}
                                color={COLORS.BLUE}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => googlePromptAsync()}>
                            <FontAwesome
                                name="google"
                                size={22}
                                color={COLORS.RED}
                            />
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() => twitterPromptAsync({ useProxy })}>
                    <FontAwesome
                        name="twitter"
                        size={22}
                        color={COLORS.BLUE}
                    />
                </TouchableOpacity> */}
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={[
                            styles.button,
                            styles.spacing,
                            // { borderWidth: 1, borderColor: COLORS.BLUE }
                        ]}
                    >
                        <Text style={[styles.buttonText, { color: COLORS.GRAY_SECONDARY }]}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
import { useState } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AntDesign } from '@expo/vector-icons'

import { auth } from '../../config/firebase'

import { Alert } from '../../components/Alert'
import { TextInput } from '../../components/TextInput'

import { COLORS } from "../../theme"

import { styles } from "./styles"

const getErrorMessage = errorCode => {
    switch (errorCode.substr(5)) {
        case 'ERROR_EMAIL_ALREADY_IN_USE':
        case 'account-exists-with-different-credential':
        case 'email-already-in-use':
          return 'Email já está sendo utilizado! Efetue o login.';
        case 'ERROR_WRONG_PASSWORD':
        case 'wrong-password':
          return 'Wrong email/password combination.';
        case 'ERROR_USER_NOT_FOUND':
        case 'user-not-found':
          return 'No user found with this email.';
        case 'ERROR_USER_DISABLED':
        case 'user-disabled':
          return 'User disabled.';
        case 'ERROR_TOO_MANY_REQUESTS':
        case 'operation-not-allowed':
          return 'Too many requests to log into this account.';
        case 'ERROR_OPERATION_NOT_ALLOWED':
        case 'operation-not-allowed':
          return 'Server error, please try again later.';
        case 'ERROR_INVALID_EMAIL':
        case 'invalid-email':
          return 'Email address is invalid.';
        default:
          return 'Login failed. Please try again.';
      }
}

export default function Signup({ route }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [isVisible, setIsVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState({ type: 'success', message: '' })

    const navigation = useNavigation()

    const handleRegister = async () => {
        setIsLoading(true)

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            setIsVisible(true)

            setError({
                type: 'success',
                message: 'Usuário cadastrado com sucesso! Por favor, confirme seu email e efetue o login.'
            })
        } catch (error) {
            setIsVisible(true)

            setError({
                type: 'error',
                message: getErrorMessage(error.code)
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
                handleSuccess={() => navigation.navigate('Login')}
                type={error.type}
            />

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.welcomeText}>Registrar</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.spacing}>
                        <View style={styles.spacing}>
                            <TextInput
                                label="Nome completo"
                                value={email}
                                placeholder="Nome completo"
                                fontAwesomeIconName="user"
                                onChangeText={(value) => setEmail(value)}
                            />
                        </View>

                        <View style={styles.spacing}>
                            <TextInput
                                label="Email"
                                value={email}
                                placeholder="Email"
                                fontAwesomeIconName="user"
                                onChangeText={(value) => setEmail(value)}
                            />
                        </View>
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

                    <View style={styles.spacing}>
                        <View style={styles.spacing}>
                            <TextInput
                                isSecure
                                label="Confirma senha"
                                placeholder="Confirma senha"
                                fontAwesomeIconName="lock"
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={handleRegister}
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

                            <Text style={styles.buttonText}>Registrar</Text>
                        )}
                    </TouchableOpacity>

                    {/* <View style={[styles.loginServices, styles.spacing]}>
                    <FontAwesome 
                        name="facebook" 
                        size={22} 
                        color={COLORS.BLUE} 
                    />
                    
                    <FontAwesome 
                        name="google" 
                        size={22} 
                        color={COLORS.RED} 
                    />

                    <FontAwesome 
                        name="amazon" 
                        size={22} 
                        color={COLORS.BLUE} 
                    />
                </View> */}

                    {/* <TouchableOpacity 
                    onPress={handleRegister}
                    style={[
                        styles.button, 
                        styles.spacing,
                        // {borderWidth: 1, borderColor: COLORS.BLUE}
                    ]}
                >
                    <Text style={[styles.buttonText, {color: COLORS.GRAY_SECONDARY}]}>Voltar</Text>
                </TouchableOpacity> */}
                </View>
            </View>
        </>
    )
}
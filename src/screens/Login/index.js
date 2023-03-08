import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

import { TextInput } from '../../components/TextInput'

import { COLORS } from "../../theme"

import { styles } from "./styles"

export default function Login({ route }) {
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('Main')
    }

    const handleRegister = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.welcomeText}>Bem-vindo</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.spacing}>
                    <TextInput 
                        label="Nome de usuário" 
                        placeholder="Nome de usuário" 
                        fontAwesomeIconName="user"
                    />
                </View>

                <View style={styles.spacing}>
                    <TextInput 
                        isSecure
                        label="Senha" 
                        placeholder="Senha" 
                        fontAwesomeIconName="lock"
                    />
                </View>

                <View style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Esqueci minha senha...</Text>
                </View>

                <TouchableOpacity 
                    onPress={handleLogin}
                    style={[
                        styles.button, 
                        styles.spacing,
                        {backgroundColor: COLORS.BLUE}
                    ]}>
                    <Text style={styles.buttonText}>Iniciar sessão</Text>
                </TouchableOpacity>

                <View style={[styles.loginServices, styles.spacing]}>
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
                </View>

                <TouchableOpacity 
                    onPress={handleRegister}
                    style={[
                        styles.button, 
                        styles.spacing,
                        {borderWidth: 1, borderColor: COLORS.BLUE}
                    ]}
                >
                    <Text style={[styles.buttonText, {color: COLORS.GRAY_SECONDARY}]}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
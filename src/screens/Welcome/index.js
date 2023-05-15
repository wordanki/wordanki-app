import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Logo } from '../../components/Logo'

import { COLORS } from "../../theme"

import { styles } from "./styles"

export default function Welcome({ route }) {
    const navigation = useNavigation()

    const handleStartApp = async () => {
        const isNotFirstTime = await AsyncStorage.getItem("@settings/not-first-time")

        // if (isNotFirstTime) {
            navigation.navigate("Main")
        // } else {
            // navigation.navigate('DownloadPhrases')
        // }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo size="HIGHER" />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Junte-se a nós!</Text>
                <Text style={styles.obsText}>* Aplicação com foco apenas em falantes do português.</Text>
                {/* <Text style={styles.subTitle}>Entrar com a minha conta</Text> */}

                <TouchableOpacity onPress={handleStartApp} style={styles.button}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Entrar no App</Text>

                        <AntDesign 
                            name="right" 
                            size={15} 
                            color={COLORS.WHITE} 
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
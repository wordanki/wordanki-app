import { View, Text, TouchableOpacity, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../theme'

export const FinishScreen = ({ learning }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={require("../../assets/check-mark.png")}
                />

                <Text style={styles.title}>Parabéns!</Text>
                <Text style={styles.text}>{learning ? "Você aprendeu todas as 2000 palavras! 👏👏👏" : "Você revisou todas as palavras! 👏👏👏"}</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                        <MaterialIcons
                                name="keyboard-arrow-left"
                                size={32}
                                color={COLORS.GREEN_PRIMARY}
                            />

                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
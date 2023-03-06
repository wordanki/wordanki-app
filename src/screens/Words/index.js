import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles"

import WordContainer from '../../components/WordContainer'

export default function Words({ route }) {
    return (
        <View style={styles.container}>
            <WordContainer></WordContainer>
        </View>
    )
}
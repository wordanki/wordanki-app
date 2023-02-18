import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from "./styles"

export default function Home({ route }) {
    return (
        <View style={styles.container}>     
            <Text style={styles.title}>HOME PAGE</Text>
        </View>
    )
}
import { View, Text } from 'react-native'

import { styles } from "./styles"

export default function Profile({ route }) {
    return (
        <View style={styles.container}>     
            <Text style={styles.title}>PROFILE PAGE</Text>
        </View>
    )
}
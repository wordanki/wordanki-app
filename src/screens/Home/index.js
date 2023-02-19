import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import DailyGoal from '../../components/DailyGoal'
import AllWords from '../../components/AllWords'
import Topics from '../../components/Topics'

import { styles } from "./styles"

export default function Home({ route }) {
    return (
        <View style={styles.container}>     
            <DailyGoal/>
            <AllWords/>
            <Topics/>
        </View>
    )
}
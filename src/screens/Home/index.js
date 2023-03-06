import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import DailyGoal from '../../components/DailyGoal'
import AllWords from '../../components/AllWords'
import Topics from '../../components/Topics'
import EnglishCourse from '../../components/EnglishCourse'

import { styles } from "./styles"

export default function Home({ route }) {
    return (
        <ScrollView style={styles.container}>     
            <DailyGoal/>
            <AllWords/>
            <Topics/>
            <EnglishCourse/>
            <View style={{height: 20}}></View>
        </ScrollView>
    )
}
import { View, Text, ScrollView } from 'react-native'

import { styles } from "./styles"

import TopicContainer from "../../components/topicContainer"

export default function Categories({ route }) {

    const topics = ['Viagens', 'Escola', 'Trabalho', 'Tecnologia'];
    const colors = ['7087AF', '70AF7A', '8470AF', 'AFAD70'];
    // const colors = ['444444', '444444', '444444', '444444'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tópicos</Text>
            <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>     
                {topics.map((topic, index) => (
                    <TopicContainer topic={topic} width={"100%"} marginTop={20} marginLeft={0} bgcolor={colors[index]}/>
                ))}
            </ScrollView>
        </View>
        )

}
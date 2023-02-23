import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles"

export default function Profile({ route }) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.profileContainer}>
                <View style={styles.user}>
                    <Text style={styles.username}>Pedro Henrique</Text>
                    <Text style={styles.email}>pedrohenriquefesi@gmail.com</Text>
                </View>
                <View style={styles.photo}></View>
            </View>
            <View style={styles.statisticContainer}>
                <Text style={styles.title}>Estatísticas</Text>
                <View style={styles.graphic}></View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.description}>
                        <View style={[styles.dot, {backgroundColor: "#14DC28"}]}></View>
                        <Text style={styles.descriptionText}>Plavras vistas</Text>
                    </View>
                    <View style={styles.description}>
                        <View style={[styles.dot, {backgroundColor: "#00B2FF"}]}></View>
                        <Text style={styles.descriptionText}>Revisões feitas</Text>
                    </View>
                </View>
            </View>
            <View style={styles.topicsContainer}>
                <Text style={styles.title}>Tópicos estudados</Text>
                <View style={styles.topics}></View>
                <View style={styles.viewMoreContainer}>
                    <Text style={styles.viewMore}>Ver mais</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={[styles.button, {backgroundColor: "#2574A0"}]}>
                    <Text style={styles.buttonText}>Compartilhar</Text>
                    <Ionicons name="share-social-outline" size={25} color="#dddddd" />
                </View>
                <View style={[styles.button, {backgroundColor: "#B24139", marginLeft: 20}]}>
                    <Text style={styles.buttonText}>Sair</Text>
                    <Ionicons name="exit-outline" size={25} color="#dddddd" />
                </View>
            </View>
            <View style={{height: 30}}></View>
        </ScrollView>
    )
}
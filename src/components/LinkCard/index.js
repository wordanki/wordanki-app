import { Text, View, TouchableHighlight, Image } from 'react-native'

import * as WebBrowser from 'expo-web-browser'

import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'

const images = [
    {
        name: "logo.png",
        img: require("../../assets/logo.png")
    },
    {
        name: "image-course.png",
        // img: require("../../assets/image-course.png")
    },
    {
        name: "feedback.png",
        img: require('../../assets/feedback.png')
    }
]

export default function LinkCard({ title, text, img, link, colors }) {
    const image = images.find(image => image.name === img).img

    const openLink = async () => {
        await WebBrowser.openBrowserAsync(link)
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <TouchableHighlight underlayColor='#fff' onPress={openLink} style={styles.container}>
                <LinearGradient
                    style={styles.gradient}
                    colors={colors}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode='contain'
                    />

                    <Text style={styles.text}>{text}</Text>

                    <FontAwesome5 name="arrow-right" size={24} color="#dddddd" />
                </LinearGradient>
            </TouchableHighlight>
        </View>
    )
}
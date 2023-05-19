import { Text, View, TouchableHighlight, Image, Linking } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import ImageCourseImg from '../../assets/image-course.png'
import Feedback from '../../assets/feedback.png'

import { styles } from './styles'

const images = [
    {
        name: "image-course.png",
        img: ImageCourseImg
    },
    {
        name: "feedback.png",
        img: Feedback
    }
]

export default function LinkCard({ title, text, img, link, colors }) {
    const image = images.find(image => image.name === img).img

    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <TouchableHighlight onPress={() => Linking.openURL(link)} style={styles.container}>
                <LinearGradient
                    style={styles.gradient}
                    colors={colors}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Image 
                        source={image} 
                        style={styles.imageCourse} 
                        resizeMode={'contain'} 
                    />

                    <Text style={styles.textCourse}>{text}</Text>

                    <FontAwesome5 name="arrow-right" size={24} color="#dddddd" />
                </LinearGradient>
            </TouchableHighlight>
        </View>
    )
}
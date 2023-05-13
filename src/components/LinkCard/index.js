import { Text, View, TouchableHighlight, Image, Linking } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import ImageCourseImg from '../../assets/image-course.png'
import GoogleFormsImg from '../../assets/google-forms.png'

import { styles } from './styles'

const images = [
    {
        name: "image-course.png",
        img: ImageCourseImg
    },
    {
        name: "google-forms.png",
        img: GoogleFormsImg
    }
]

export default function LinkCard({ title, text, img, colors }) {
    const image = images.find(image => image.name === img).img

    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <TouchableHighlight onPress={() => Linking.openURL('https://reactnative.dev')} style={styles.container}>
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
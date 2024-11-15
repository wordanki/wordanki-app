import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const borderRadius = 40
const defaultSpacing = 20

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3AAD5A"
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        marginVertical: 32
    },
    text: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        textAlign: 'center',
        maxWidth: "90%"
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
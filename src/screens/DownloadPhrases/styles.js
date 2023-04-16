import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222228",
        paddingHorizontal: defaultSpacing,
        justifyContent: 'center'
    },
    imageContainer: {
        marginTop: -defaultSpacing * 6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: defaultSpacing * 4
    },  
    image: {
        height: '70%',
        resizeMode: 'contain',
    },  
    content: {
        marginTop: -defaultSpacing * 6
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: defaultSpacing * 2
    },
    button: {
        marginTop: defaultSpacing * 4,
        height: 50,
        borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        marginRight: defaultSpacing / 2,
        fontSize: 15,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
})
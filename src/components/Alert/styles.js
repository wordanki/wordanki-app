import { StyleSheet } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -defaultSpacing / 1.5,
        marginBottom: defaultSpacing / 1.5
    },  
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius * 5,
        width: '100%',
    },
    message: {
        marginBottom: defaultSpacing * 1.5,
        fontSize: 15,
        textAlign: 'center'
    },
    button: {
        width: '30%',
        backgroundColor: COLORS.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius
    },
    buttonText: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
})
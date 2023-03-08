import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const borderRadius = 40
const defaultSpacing = 20

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.BLACK_PRIMARY,
        justifyContent: "flex-end"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "flex-end",
        padding: defaultSpacing * 2
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.WHITE
    },
    content: {
        width: "100%",
        height: "65%",
        padding: defaultSpacing * 2,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        backgroundColor: COLORS.BLACK_TERTIARY
    },
    spacing: {
        marginBottom: defaultSpacing
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginTop: -(defaultSpacing / 4),
        marginBottom: defaultSpacing * 2
    },
    forgotPasswordText: {
        color: COLORS.GRAY_PRIMARY
    },
    button: {
        paddingVertical: defaultSpacing / 1.5,
        borderRadius: borderRadius / 4,
        alignItems: "center"
    },
    buttonText: {
        color: COLORS.WHITE,
        fontWeight: "bold"
    },
    loginServices: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})
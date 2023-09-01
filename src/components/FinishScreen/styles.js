import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../theme'

import { transparentize } from 'polished'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BGCOLOR_DARK,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    content: {
        // padding: 16,
        alignItems: "center",
    },
    image: {
        height: 160,
        resizeMode: "contain",
        marginBottom: 16 * 3,
        marginTop: -16
    },
    title: {
        fontSize: 28,
        fontWeight: "500",
        color: COLORS.BLACK_SECONDARY,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16
    },
    text: {
        fontSize: 24,
        color: COLORS.GRAY_PRIMARY,
        textAlign: "center"
    },
    button: {
        width: "60%",
        height: "auto",
        // backgroundColor: transparentize(0.85, COLORS.GREEN_PRIMARY),
        borderRadius: 10,
        marginTop: 16 * 3,
        flexDirection: "row",
        alignItems: "center"
    },
    textButton: {
        fontSize: 16,
        fontWeight: "500",
        color: COLORS.GREEN_PRIMARY,
        marginLeft: 8,
    }
})
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
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: "100%",
        height: "45%",
        padding: defaultSpacing * 2,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        backgroundColor: COLORS.BLACK_TERTIARY
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.WHITE
    }, 
    subTitle: {
        fontSize: 15,
        marginVertical: defaultSpacing * 1.5,
        color: COLORS.GRAY_PRIMARY
    },
    obsText: {
        fontSize: 14,
        fontWeight: "bold",
        color: COLORS.RED,
        marginTop: defaultSpacing / 5
    }, 
    button: {
        borderRadius,
        maxWidth: "60%",
        // alignSelf: "flex-end",
        paddingHorizontal: defaultSpacing * 1.5,
        paddingVertical: defaultSpacing / 2,
        backgroundColor: COLORS.BLUE
    }, 
    buttonText: {
        color: COLORS.WHITE
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})
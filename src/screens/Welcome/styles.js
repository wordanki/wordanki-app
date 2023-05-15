import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const borderRadius = 40
const defaultSpacing = 20

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.BGCOLOR_DARK,
        justifyContent: "flex-end"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: "100%",
        height: "35%",
        padding: defaultSpacing * 2,
        borderTopLeftRadius: borderRadius / 1.5,
        borderTopRightRadius: borderRadius / 1.5,
        backgroundColor: "#fff1"
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
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff8",
        marginTop: defaultSpacing
    }, 
    button: {
        // marginTop: 40,
        width: "100%",
        borderRadius,
        position: "absolute",
        bottom: 40,
        left: 40,
        // maxWidth: "60%",
        // alignSelf: "flex-end",
        paddingHorizontal: defaultSpacing * 0.5,
        paddingVertical: defaultSpacing / 2,
        backgroundColor: COLORS.GREEN_PRIMARY + "bb"
    }, 
    buttonText: {
        color: COLORS.WHITE,
        fontSize: 20,
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})
import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

const defaultSpacing = 16

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "#eeeeee",
        marginTop: 20,
        marginLeft: defaultSpacing,
    },
    container: {
        flex: 1,
        height: 120,
        borderRadius: 15,
        marginTop: 10,
        marginLeft: defaultSpacing,
        marginRight: defaultSpacing,
    },
    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: defaultSpacing,
    },
    image: {
        width: 70,
        height: 70,
    },
    text: {
        width: "45%",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 21,
    }
});
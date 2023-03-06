import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "auto",
        borderRadius: 12,
        marginTop: 20,
        overflow: "hidden",
    },
    container: {
        backgroundColor: "#2C2C33",
    },
    basicInfo: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    word: {
        fontSize: 20,
        color: "#ffffff",
        marginLeft: 15,
    },
    translation: {
        fontSize: 20,
        color: "#dddddd",
        marginRight: 40,
    },
    icon: {
        position: "absolute",
        top: 6,
        right: 6,
    },
    info: {
        height: "auto",
        padding: 15,
    },
    title: {
        fontSize: 18,
        color: "#eeeeee",
    },
    infoContainer: {
        width: "100%",
        height: "auto",
        padding: 15,
        marginTop: 10,
        borderRadius: 12,
        borderWidth: 2
    },
    text: {
        fontSize: 16,
        color: "#dddddd",
    }
});
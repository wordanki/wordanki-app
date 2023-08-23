import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        borderRadius: 10,
        marginBottom: 16,
    },
    inerContainer: {
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#2C2C33",
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16,
    },
    iconContainer: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "#ffffff08",
        justifyContent: "center",
        alignItems: "center",
    },
    word: {
        fontSize: 20,
        color: "#ccffdd",
    },
    translation: {
        fontSize: 20,
        color: "#bbccff",
    },
});
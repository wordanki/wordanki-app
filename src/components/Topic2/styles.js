import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        marginBottom: 16,
        borderRadius: 15,
    },
    innerContainer: {
        width: "100%",
        height: "auto",
        borderRadius: 15,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 140,
    },
    infoContainer: {
        width: "100%",
        height: "auto",
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: "#4F585F",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        color: "#fff",
        marginBottom: 5,
    },
    textContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 12,
    },
    text: {
        fontSize: 18,
        color: "#eeeeee",
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 8,
        backgroundColor: "#30B956",
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontSize: 18,
        color: "#ffffff",
    }
});

// 3D4C56
// 14DC28
// 00B2FF
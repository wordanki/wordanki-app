import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        width: 220,
        height: "auto",
        marginRight: 16,
        marginTop: 10,
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
        height: 120,
    },
    infoContainer: {
        width: "100%",
        height: "auto",
        paddingHorizontal: 12,
        paddingBottom: 12,
        backgroundColor: "#4F585F",
    },
    title: {
        fontSize: 20,
        color: "#eeeeee",
        marginVertical: 8,
    },
    textContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 12,
    },
    text: {
        fontSize: 15,
        color: "#eeeeee",
    },
    button: {
        width: 120,
        height: 30,
        borderRadius: 15,
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
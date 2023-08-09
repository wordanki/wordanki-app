import { StyleSheet } from "react-native"

const borderRadius = 10
const defaultSpacing = 16

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        borderRadius: borderRadius,
        marginBottom: defaultSpacing,
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: defaultSpacing,
        borderRadius: borderRadius,
        backgroundColor: "#3B3E48",
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffffbb"
    }
})
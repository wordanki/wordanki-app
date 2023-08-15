import { StyleSheet } from "react-native"

const borderRadius = 10
const defaultSpacing = 16

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: defaultSpacing,
        backgroundColor: "#222228",
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffffbb"
    }
})
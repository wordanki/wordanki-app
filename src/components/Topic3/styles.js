import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#2F343E",
        // backgroundColor: "transparent",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 16,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    title: {
        fontSize: 22,
        color: "#dddddd",
    },
    textContainer: {
        alignItems: "flex-end",
    },
    text: {
        fontSize: 15,
        color: "#bbbbbb",
        marginBottom: 4,
    },
    viewedWords: {
        fontSize: 20,
        color: "#dddddd",
    }
})
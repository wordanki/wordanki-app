import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        padding: 16,
        backgroundColor: "#222228"
    },
    translations: {
        width: "100%",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#2F343E",
        borderRadius: 12,
    },
    originalWord: {
        fontSize: 18,
        color: "#dddddd",
    },
    translatedWord: {
        fontSize: 18,
        color: "#dddddd",
    },
    title: {
        fontSize: 20,
        color: "#eeeeee",
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        width: "100%",
        height: "auto",
        padding: 16,
        backgroundColor: "#2F343E",
        borderRadius: 12,
    },
    textDescription: {
        fontSize: 16,
        color: "#dddddd",
    },
    phrases: {
        width: "100%",
        height: "auto",
        padding: 16,
        backgroundColor: "#2F343E",
        borderRadius: 12,
    },
    phrase: {
        width: "100%",
        height: "auto",
        
    },
    originalPhrase: {
        fontSize: 16,
        color: "#eeeeee",
        marginBottom: 10,
    },
    translatedPhrase: {
        fontSize: 16,
        color: "#eeeeee",
    }
})
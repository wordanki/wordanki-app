import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
        backgroundColor: "#222228",
    },
    containerSearchTopic: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: "#ffffff14",
        borderWidth: 1,
        borderColor: "#ffffff28",
        borderRadius: 25,
    },
    searchTopic: {
        flex: 1,
        fontSize: 18,
        color: "#ffffff",
        paddingHorizontal: 15,
    },
    containerWords: {
        width: "100%",
        height: "auto",
    },
})
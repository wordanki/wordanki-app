import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222228",
        paddingHorizontal: 16,
    },
    containerSearchTopic: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 16,
        backgroundColor: "#ffffff14",
        borderWidth: 1,
        borderColor: "#ffffff28",
        borderRadius: 25,
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 20,
    },
    searchTopic: {
        flex: 1,
        fontSize: 20,
        color: "#ffffff",
        paddingHorizontal: 15,
    }
})
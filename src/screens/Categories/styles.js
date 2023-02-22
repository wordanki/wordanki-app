import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222228",
        paddingHorizontal: 20,
    },
    containerSearchTopic: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: "#ffffff33",
        borderRadius: 20,
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 20,
    },
    searchTopic: {
        flex: 1,
        fontSize: 20,
        color: "#ffffff",
        paddingVertical: 5,
        paddingHorizontal: 15,
    }
})
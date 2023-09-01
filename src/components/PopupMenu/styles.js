import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    containerIcon: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    popup: {
        borderRadius: 10,
        backgroundColor: "#2F343E",
        position: "absolute",
        top: 40,
        right: 16,
        paddingHorizontal: 12,
    },
    popupItem: {
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#ffffff44"
    },
    popupText: {
        marginRight: 8,
        fontSize: 16,
        color: "#eeeeee",
    }
})
import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 20,
    },
});
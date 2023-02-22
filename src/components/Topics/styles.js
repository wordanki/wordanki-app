import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        color: "#eeeeee",
    },
    seeMoreContainer: {
        paddingVertical: 3,
    },
    seeMore: {
        fontSize: 15,
        color: "#dddddd",
    },
});
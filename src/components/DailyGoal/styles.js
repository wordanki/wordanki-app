import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 20,
        marginLeft: 20,
    },
    dailyGoalBar: {
        flex: 1,
        height: 25,
        backgroundColor: "#ffffff22",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 12.5,
        justifyContent: "center",
    },
    completedBar: {
        height: "100%",
        backgroundColor: "#30B956",
        borderTopLeftRadius: 12.5,
        borderBottomLeftRadius: 12.5,
    },
    dailyGoalText: {
        color: "#dddddd",
        fontSize: 15,
        position: "absolute",
        left: 15,
        fontWeight: "bold",
    },
});
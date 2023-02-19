import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    dailyGoalContainer: {
        width: "100%",
        height: 60,
        backgroundColor: "#8DA7CE33",
        borderRadius: 15,
        padding: 8,
        justifyContent: "space-between",
    },
    dailyGoalText: {
        color: "#dddddd",
        fontSize: 15,
    },
    dailyGoalBar: {
        width: "100%",
        height: 20,
        backgroundColor: "#ffffff22",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
    },
    completedBar: {
        height: "100%",
        backgroundColor: "#30B956",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
});
import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 20,
        marginLeft: 20,
    },
    container: {
        flex: 1,
        height: 140,
        backgroundColor: "#1B728F",
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    imageCourse: {
        width: 100,
    },
    textCourse: {
        width: "45%",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 24,
    }
});
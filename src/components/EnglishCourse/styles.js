import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 140,
        backgroundColor: "#3E5287dd",
        borderRadius: 15,
        marginTop: 20,
    },
    imageContainer: {
        // width: "100%",
        height: "100%",
        borderRadius: 15,
        overflow: "hidden",
    },
    innerContainer: {
        height: "100%",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#58367Abb",
    },
    containerLeft: {
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        color: "#ffffff",
    },
    text: {
        fontSize: 20,
        color: "#dddddd",
    },
    containerRight: {
        justifyContent: "flex-end",
    },
    info: {
        width: 100,
        height: 30,
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: "#ffffff19",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },
    dotInfo: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    numberInfo: {
        fontSize: 20,
        color: "#ffffff",
    },
});
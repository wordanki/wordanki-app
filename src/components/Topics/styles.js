import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 20,
    },
    container: {
        width: "100%",
        height: 140,
        backgroundColor: "#3E5287dd",
        borderRadius: 15,
        marginTop: 10,
    },
    imageContainer: {
        // width: "100%",
        height: "100%",
        borderRadius: 15,
        overflow: "hidden",
    },
    innerContainer: {
        height: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "space-between",
        backgroundColor: "#58367Abb",
    },
    titleTopic: {
        fontSize: 25,
        color: "#ffffff",
    },
    containerBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        width: "50%",
        flexDirection: "row",
        alignItems: "center",
    },
    dotInfo: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 12,
    },
    textInfo: {
        fontSize: 15,
        color: "#ffffff",
    },
});
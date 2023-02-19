import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        height: 140,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 15,
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
        // backgroundColor: "#58367Abb",
        borderRadius: 15,
    },
    containerTop: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    titleTopic: {
        fontSize: 25,
        color: "#ffffff",
    },
    totalWords: {
        fontSize: 15,
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
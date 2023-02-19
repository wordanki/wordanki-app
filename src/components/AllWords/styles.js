import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#3E5287dd",
        borderRadius: 15,
        marginTop: 10,
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 20,
    },
    info: {
        width: "100%",
        height: 60,
        borderRadius: 12,
        backgroundColor: "#ffffff19",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },
    textInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dotInfo: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    textInfo: {
        fontSize: 18,
        color: "#ffffff",
        marginLeft: 12,
    },
    numberInfo: {
        fontSize: 20,
        color: "#dddddd",
    },
    studyButton: {
        width: "100%",
        height: 50,
        borderRadius: 30,
        backgroundColor: "#30B956",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    studyText: {
        fontSize: 24,
        color: "#ffffff",
    }
});
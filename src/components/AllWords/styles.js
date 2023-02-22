import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTS } from "../../theme"

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "#eeeeee",
        marginTop: 20,
        marginLeft: 20,
    },
    container: {
        flex: 1,
        // backgroundColor: "#3E5287",
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
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
    studyButtonContainer: {
        width: "100%",
        height: 45,
        borderRadius: 30,
        marginTop: 22.5,
        // shadowColor: "#0008",
        // shadowOffset: {
        //     width: 2,
        //     height: 4,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    studyButton: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "#30B956",
    },
    studyText: {
        fontSize: 24,
        color: "#ffffff",
    }
});
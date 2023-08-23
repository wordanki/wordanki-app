import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#222228",
        paddingHorizontal: 16,
    },
    // profileContainer: {
    //     width: "100%",
    //     marginTop: 20,
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     paddingBottom: 30,
    //     borderBottomWidth: 3,
    //     borderBottomColor: "#ffffff22",
    // },
    // user: {
    //     height: 60,
    //     justifyContent: "space-between",
    // },
    // username: {
    //     fontSize: 25,
    //     color: "#CCDDFF",
    // },
    // email: {
    //     fontSize: 15,
    //     color: "#ffffff",
    // },
    // photo: {
    //     width: 60,
    //     height: 60,
    //     backgroundColor: "#bbbbbb",
    //     borderRadius: 30,
    // },
    statisticContainer: {
        marginTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#ffffff22",
    },
    title: {
        fontSize: 20,
        color: "#eeeeee",
    },
    graphic: {
        width: "100%",
        height: 160,
        backgroundColor: "#ffffff00",
        marginTop: 20,
        borderRadius: 15,
        // padding: 20,
    },
    timeContainer: {
        width: "100%",
        height: 30,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    timeButton: {
        flex: 1,
        borderRadius: 20,
        marginRight: 16,
    },
    time: {
        flex: 1,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff11",
    },
    timeText: {
        fontSize: 15,
        color: "#dddddd",
        fontWeight: "bold",
    },
    descriptionContainer: {
        width: "100%",
        height: 40,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionButton: {
        flex: 1,
        borderRadius: 20,
    },
    description: {
        flex: 1,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    descriptionText: {
        fontSize: 13,
        fontWeight: "500",
        color: "#dddddd",
        marginLeft: 8,
    },
    topicsContainer: {
        marginTop: 20,
    },
    topics: {
        width: "100%",
        height: "auto",
        marginTop: 20,
    },
    viewMoreContainer: {
        padding: 5,
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
    },
    viewMore: {
        fontSize: 20,
        color: "#dddddd",
    },
    buttonsContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    button: {
        flex: 1,
        height: "100%",
        borderRadius: 20,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
    }
})
import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#222228",
        paddingHorizontal: 20,
    },
    profileContainer: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 30,
        borderBottomWidth: 3,
        borderBottomColor: "#ffffff22",
    },
    user: {
        height: 60,
        justifyContent: "space-between",
    },
    username: {
        fontSize: 25,
        color: "#CCDDFF",
    },
    email: {
        fontSize: 15,
        color: "#ffffff",
    },
    photo: {
        width: 60,
        height: 60,
        backgroundColor: "#bbbbbb",
        borderRadius: 30,
    },
    statisticContainer: {
        marginTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 3,
        borderBottomColor: "#ffffff22",
    },
    title: {
        fontSize: 25,
        color: "#eeeeee",
    },
    graphic: {
        width: "100%",
        height: 150,
        backgroundColor: "#ffffff22",
        marginTop: 20,
        borderRadius: 15,
    },
    descriptionContainer: {
        width: 300,
        height: 30,
        backgroundColor: "#ffffff22",
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    description: {
        flexDirection: "row",
        alignItems: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    descriptionText: {
        fontSize: 15,
        color: "#dddddd",
        marginLeft: 12,
    },
    topicsContainer: {
        marginTop: 30,
        paddingBottom: 15,
        borderBottomWidth: 3,
        borderBottomColor: "#ffffff22",
    },
    topics: {
        width: "100%",
        height: 150,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: "#ffffff22",
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
import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20
const maxWidth = windowWidth * 0.8

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#222228",
        width: windowWidth,
        padding: 20,
    },
    questionContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    soundButton: {
        marginRight: 20,
    },
    question: {
        flex: 1,
        color: COLORS.WHITE,
        fontSize: 30,
    },
    word: {
        color: "#30B956",
        fontWeight: 'bold'
    },
    answerButton: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 20,
    },
    answerText: {
        color: "#dddddd",
        fontSize: 22,
    },
    translation: {
        marginTop: 20,
        borderWidth: 3,
        width: "100%",
        borderColor: "#58585B",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15, 
    },
    translationText: {
        fontSize: 22,
        color: COLORS.WHITE,
    },
    buttonsContainer: {
        width: "100%",
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
    },
    next: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
    },
    nextContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#434348",
        borderRadius: 100,
    },
    textChangeWord: {
        fontSize: 20,
        color: "#dddddd",
        marginRight: 10,
    }
})
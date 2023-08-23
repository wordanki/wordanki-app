import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        padding: 16,
        backgroundColor: "#222228"
    },
    title: {
        fontSize: 20,
        color: "#eeeeee",
        marginBottom: 16,
    },
    input: {
        width: "100%",
        height: "auto",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#ffffff22",
        borderWidth: 1,
        borderColor: "#ffffff88",
        borderRadius: 12,
        fontSize: 16,
        color: "#eeeeee",
    },
    buttonContainer: {
        width: 200,
        maxWidth: "80%",
        height: "auto",
        borderRadius: 12,
        marginTop: 32,
        marginLeft: "auto",
        marginRight: "auto",
    },
    button: {
        width: "100%",
        height: "auto",
        borderRadius: 9999,
        padding: 10,
        backgroundColor: COLORS.GREEN_PRIMARY,
    },
    textButton: {
        fontSize: 20,
        textAlign: "center",
        color: "#ffffff",
    }
})
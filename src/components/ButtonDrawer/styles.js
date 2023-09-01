import { StyleSheet } from "react-native"
import { COLORS } from "../../theme"

const borderRadius = 10
const defaultSpacing = 16

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: defaultSpacing,
        backgroundColor: COLORS.BGCOLOR_DARK,
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.BLACK_SECONDARY
    }
})
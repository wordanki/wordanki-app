import { StyleSheet } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
    container: { 
        flexDirection: "row", 
        flexWrap: "wrap" 
    },
    innerHiddenWord: {
        width: "100%",
        height: 16,
        left: 0,
        top: 4,
        position: "absolute",
        backgroundColor: COLORS.WHITE + 14
    },
    hiddenWord: {
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.TRANSPARENT
    }
})
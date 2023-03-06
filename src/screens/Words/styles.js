import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#222228",
        paddingHorizontal: 20,
    },
})
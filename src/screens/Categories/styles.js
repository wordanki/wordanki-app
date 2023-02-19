import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222228",
      paddingHorizontal: 20,
    },
    title: {
      color: COLORS.WHITE,
      fontSize: 20,
      marginTop: 20,
    },
})
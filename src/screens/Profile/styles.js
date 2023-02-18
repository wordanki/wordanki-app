import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_PRIMARY,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: COLORS.WHITE
  }
})
import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: defaultSpacing,
    paddingTop: defaultSpacing * 2,
    paddingBottom: defaultSpacing / 2.5,
    backgroundColor: COLORS.BLACK_PRIMARY,
    borderBottomWidth: 1,
    borderColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 16
  }
})

export { styles }
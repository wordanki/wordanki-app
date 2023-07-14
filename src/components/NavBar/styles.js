import { StyleSheet, Dimensions, NativeModules, Platform } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : NativeModules.StatusBarManager.HEIGHT

const borderRadius = 10
const defaultSpacing = 20

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: COLORS.BLACK_TERTIARY,
    flexDirection: "column",
  },
  innerContainer: {
    height: 50,
    width: "100%",
    paddingHorizontal: defaultSpacing,
    marginTop: STATUSBAR_HEIGHT,

    borderBottomWidth: 0.5,
    borderBottomColor: "#fff4",

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ActionButtonContainer: {
    // width: windowWidth / 3
  },
  textContainer: {
    backgroundColor: "#ffffff22",
    width: 180,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },  
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15
  }
})

export { styles }
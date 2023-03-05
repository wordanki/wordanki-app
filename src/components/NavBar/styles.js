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
    width: windowWidth,
    backgroundColor: COLORS.BLACK_TERTIARY,

    // shadowColor: "#ffffffbb",
    // shadowOffset: {
    //     width: 0,
    //     height: 4,
    // },
    // shadowOpacity: 0.30,
    // shadowRadius: 4.65,
    // elevation: 8,

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
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },  
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 18
  }
})

export { styles }
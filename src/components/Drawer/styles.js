import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowHeight= Dimensions.get('window').height

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_TERTIARY
  },
  profileContainer: {
    paddingHorizontal: defaultSpacing, 
    paddingVertical: defaultSpacing,
    borderBottomWidth: 1, 
    borderColor: COLORS.WHITE + '25'
  },
  username: {
    marginTop: 10,
    color: COLORS.WHITE,
    fontSize: 18,
    fontFamily: 'Roboto',
    marginBottom: 5,
  },
  usermail: {
    color: COLORS.WHITE,
    fontFamily: 'Roboto',
    marginRight: 5,
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: defaultSpacing / 2
  },  
  levelText: {
    color: COLORS.WHITE
  },
  version: {
    fontSize: 12,
    color: COLORS.WHITE
  },
  drawerListContainer: {
    flex: 1, 
    paddingTop: 10
  },
  logoContainer: {
    top: -windowHeight / 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 250,
    width: 150,
    opacity: .1
  },
  footer: {
    borderTopWidth: 1, 
    borderTopColor: COLORS.WHITE + '25',
    borderBottomWidth: .5, 
    borderBottomColor: COLORS.WHITE + '22',
    backgroundColor: COLORS.BLACK_TERTIARY
  },
  footerButtonContainer: {
    paddingHorizontal: defaultSpacing,
    paddingVertical: defaultSpacing
  },
  footerButton: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  footerButtonText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    marginLeft: 10,
    color: COLORS.WHITE
  }
})
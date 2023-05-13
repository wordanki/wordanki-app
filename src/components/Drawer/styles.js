import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_TERTIARY
  },
  profileContainer: {
    padding: 20, 
    borderBottomWidth: .5, 
    borderColor: COLORS.WHITE
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
  drawerListContainer: {
    flex: 1, 
    // backgroundColor: '#fff', 
    paddingTop: 10
  },
  footer: {
    padding: 20, 
    borderTopWidth: .5, 
    borderTopColor: '#ccc',
    backgroundColor: COLORS.BLACK_TERTIARY
  },
  footerButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15
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
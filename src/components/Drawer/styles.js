import { StyleSheet, Dimensions } from 'react-native'

import { transparentize } from 'polished'

import { COLORS, FONTS } from "../../theme"

const windowHeight= Dimensions.get('window').height

const borderRadius = 10
const defaultSpacing = 16

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BGCOLOR_DARK
  },
  profileContainer: {
    height: "auto",
    padding: defaultSpacing,
    paddingBottom: defaultSpacing,
    // backgroundColor: "#2F2F35",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.WHITE
  },
  userContainer: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: defaultSpacing / 2,
    marginBottom: defaultSpacing / 1.5
  },
  textContainer: {
    height: "auto",
    justifyContent: "space-between",
  },
  username: {
    color: COLORS.BLACK_SECONDARY,
    fontSize: 22,
    marginVertical: defaultSpacing,
    fontWeight: "500",
  },
  usermail: {
    fontSize: 15,
    color: COLORS.BLACK_SECONDARY,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  loginButtonText: {
    fontSize: 15,
    color: COLORS.BLACK_SECONDARY
  },
  statisticContainer: {
    height: "auto",
    width: "100%",
    // marginBottom: defaultSpacing,
  },
  wordsText: {
    fontSize: 20,
    color: "#dddddd",
    marginVertical: defaultSpacing,
    fontWeight: "500"
  },
  levelText: {
    fontSize: 16,
    color: "#dddddd",
    marginBottom: 5,
    fontWeight: "500"
  },
  levelBar: {
    width: "100%",
    height: 12,
    backgroundColor: "#ffffff22",
    borderRadius: 6,
    overflow: "hidden",
  },
  completedBar: {
    height: "100%",
    backgroundColor: COLORS.GREEN_PRIMARY,
  },
  buttonsContainer: {
    // borderBottomWidth: 1,
    // borderBottomColor: "#00000022",
    paddingVertical: defaultSpacing * 0.5,
    // backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.WHITE,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  version: {
    fontSize: 12,
    color: COLORS.WHITE
  },
})
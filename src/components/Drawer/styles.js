import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowHeight= Dimensions.get('window').height

const borderRadius = 10
const defaultSpacing = 16

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_TERTIARY
  },
  profileContainer: {
    height: "auto",
    padding: defaultSpacing,
    backgroundColor: "#38383E",
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  userContainer: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: defaultSpacing,
  },
  textContainer: {
    height: "auto",
    justifyContent: "space-between",
  },
  username: {
    color: COLORS.WHITE,
    fontSize: 18,
    marginBottom: defaultSpacing,
    fontWeight: "500",
  },
  usermail: {
    color: COLORS.WHITE,
    marginRight: 5,
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
    padding: defaultSpacing,
    paddingTop: defaultSpacing,
  },
  version: {
    fontSize: 12,
    color: COLORS.WHITE
  },
})
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
    paddingBottom: defaultSpacing * 1.5,
    backgroundColor: "#2F2F35",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff22",
  },
  userContainer: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textContainer: {
    height: "auto",
    justifyContent: "space-between",
  },
  username: {
    color: COLORS.WHITE,
    fontSize: 20,
    marginVertical: defaultSpacing,
    fontWeight: "500",
  },
  usermail: {
    fontSize: 15,
    color: COLORS.WHITE,
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
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff22",
    paddingVertical: defaultSpacing * 0.5,
  },
  version: {
    fontSize: 12,
    color: COLORS.WHITE
  },
})
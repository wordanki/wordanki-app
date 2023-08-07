import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 16

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.BGCOLOR_DARK
  },
  title: {
    fontSize: 20,
    color: "#eeeeee",
    marginTop: 20,
    marginLeft: defaultSpacing
  },
  dailyGoalBar: {
    flex: 1,
    height: 25,
    backgroundColor: "#ffffff22",
    marginTop: 10,
    marginLeft: defaultSpacing,
    marginRight: defaultSpacing,
    borderRadius: 12.5,
    justifyContent: "center",
    overflow: "hidden"
  },
  completedBar: {
    height: "100%",
    backgroundColor: "#30B956"
  },
  dailyGoalText: {
    color: "#dddddd",
    fontSize: 15,
    position: "absolute",
    left: 15,
    fontWeight: "bold"
  },
  allWordsContainer: {
    flex: 1,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: defaultSpacing,
    marginRight: defaultSpacing,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center"
  },
  info: {
    width: "100%",
    height: 60,
    borderRadius: 12,
    backgroundColor: "#ffffff19",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12
  },
  textInfoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  dotInfo: {
    width: 10,
    height: 10,
    borderRadius: 5
  },
  textInfo: {
    fontSize: 18,
    color: "#ffffff",
    marginLeft: 12
  },
  numberInfo: {
    fontSize: 20,
    color: "#dddddd"
  },
  studyButtonContainer: {
    width: "100%",
    height: 45,
    borderRadius: 30,
    marginTop: 16
  },
  studyButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#30B956"
  },
  studyText: {
    fontSize: 24,
    color: "#ffffff"
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginLeft: defaultSpacing,
    marginRight: defaultSpacing
  },
})
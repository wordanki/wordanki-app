import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    // backgroundColor: "#222228",
    width: windowWidth,
    padding: 20,
    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    
    // elevation: 5,
  },
  reviewContainer: {
    width: 80,
    height: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#2C9ED288",
    borderWidth: 0,
    borderRightWidth: 0,
    borderColor: "#2C9ED2",
    justifyContent: "center",
    paddingLeft: 10,
    position: "absolute",
    top: 10,
    right: 0,
  },
  reviewText: {
   fontSize: 13,
   color: "#ffffff",
  },
  questionContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    // backgroundColor: "#fff4"
  },
  soundButton: {
    marginRight: 10,
  },
  question: {
    flex: 1,
    color: COLORS.WHITE,
    fontSize: 30,
  },
  word: {
    color: "#30B956",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  answerButton: {
    width: "100%",
    height: 45,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: "#0A7CB1"
  },
  answerButtonContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 3,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: 'center',
  },
  answerText: {
    color: "#dddddd",
    fontSize: 22,
  },
  translation: {
    marginTop: 20,
    borderWidth: 3,
    width: "100%",
    borderColor: "#444855",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    minHeight: 100,
    justifyContent: "center"
  },
  translationText: {
    fontSize: 20,
    color: "#dddddd",
  },
  translationWord: {
    color: "#2C9ED2",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  next: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  nextContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#434348",
    borderRadius: 100,
    overflow: "hidden",
  },
  textChangeWord: {
    fontSize: 20,
    color: "#dddddd",
    marginRight: 10,
  },
  progressBarContainer: {
    height: 5,
    width: windowWidth,
    backgroundColor: "ffffff11",
    position: "absolute",
    left: 0,
    top: 1,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#ffffff88",
    position: "absolute",
    left: 0,
    top: 0,
  },
  arrowContainer: {
    height: 60,
    width: windowWidth,
    position: "absolute",
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: 1,
    backgroundColor: "#ffffff22",
  }
})
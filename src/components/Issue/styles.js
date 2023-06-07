import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height - 50

const screenHeight = windowHeight - 40

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: windowHeight,
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.BLACK_PRIMARY
  },
  tagContainer: {
    height: 20,
    // width: 30,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#2C9ED288",
    paddingHorizontal: 8,
    position: "absolute",
    top: 10,
    left: 0,
  },
  tagText: {
   fontSize: 10,
   color: "#ffffff",
  },
  questionContainer: {
    height: "auto",
    // maxHeight: screenHeight * .2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  question: {
    flex: 1,
    color: COLORS.WHITE,
    fontSize: 30,
    marginLeft: defaultSpacing,
    overflow: "scroll",
  },
  word: {
    color: "#30B956",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  answersContainer: {
    height: "auto",
    // maxHeight: screenHeight * .6,
    justifyContent: 'center',
    marginBottom: 30,
    overflow: "scroll",
  },  
  answerButtonContainer: {
    justifyContent: "center",
    alignItems: 'center',
  },
  answerButton: {
    height: defaultSpacing * 2.1,
    borderRadius: borderRadius * 1.2,
    marginBottom: defaultSpacing,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#0A7CB1",
    borderWidth: 2,
  },
  answerText: {
    color: "#dddddd",
    fontSize: 22
  },
  translation: {
    height: "auto",
    // maxHeight: screenHeight * .2,
    borderWidth: 1,
    borderColor: "#fff2",
    backgroundColor: "#fff1",
    borderRadius: borderRadius * 1.2,
    justifyContent: 'center',
    paddingVertical: defaultSpacing / 1.5,
    paddingHorizontal: defaultSpacing / 1.5,
    overflow: "scroll",
  },
  translationLabel: {
    fontSize: 15,
    color: "#2C9ED2",
    marginBottom: defaultSpacing / 3,
  },
  translationText: {
    fontSize: 25,
    color: "#dddddd",
    height: "auto",
  },
  translationWord: {
    color: "#2C9ED2",
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  progressBarContainer: {
    top: 1,
    left: 0,
    height: 5,
    width: windowWidth,
    backgroundColor: COLORS.WHITE + 11,
    position: "absolute"
  },
  progressBar: {
    height: "100%",
    backgroundColor: COLORS.WHITE + 88
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
    backgroundColor: "red",
  }
})
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
    width: 30,
    height: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#2C9ED288"
  },
  tagText: {
   fontSize: 8,
   color: "#ffffff",
  },
  questionContainer: {
    height: screenHeight * .2,
    maxHeight: screenHeight * .2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  question: {
    flex: 1,
    color: COLORS.WHITE,
    fontSize: 30,
    marginLeft: defaultSpacing
  },
  word: {
    color: "#30B956",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  answersContainer: {
    height: screenHeight * .6,
    maxHeight: screenHeight * .6,
    justifyContent: 'center'
  },  
  answerButtonContainer: {
    borderRadius: borderRadius * 1.5,
    justifyContent: "center",
    alignItems: 'center',
  },
  answerButton: {
    height: defaultSpacing * 2.1,
    borderRadius: borderRadius * 1.5,
    marginBottom: defaultSpacing,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#0A7CB1"
  },
  answerText: {
    color: "#dddddd",
    fontSize: 22
  },
  translation: {
    height: screenHeight * .2,
    maxHeight: screenHeight * .2,
    borderWidth: .1,
    borderColor: "#fff1",
    borderRadius: borderRadius / 1.5,
    justifyContent: 'center',
    paddingHorizontal: defaultSpacing / 1.5
  },
  translationText: {
    fontSize: 25,
    color: "#dddddd"
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
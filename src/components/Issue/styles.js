import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height - 51.5

const screenHeight = windowHeight - 40

const borderRadius = 10
const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: windowHeight,
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: COLORS.BLACK_PRIMARY,
    overflow: "hidden"
  },
  tagContainer: {
    height: 20,
    // width: 30,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#266E91",
    paddingHorizontal: 5,
    position: "absolute",
    top: 8,
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
    marginBottom: 24,
  },
  question: {
    flex: 1,
    color: "#dddddd",
    fontSize: 24,
    marginLeft: 16,
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
    marginBottom: 16,
    overflow: "scroll",
  },  
  answerButtonContainer: {
    height: defaultSpacing * 2,
    width: "100%",
    borderRadius: borderRadius * 1.2,
    marginBottom: 16,
  },
  answerButton: {
    height: "100%",
    width: "100%",
    borderRadius: borderRadius * 1.2,
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 2,
  },
  answerText: {
    color: "#dddddd",
    fontSize: 20
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
    paddingLeft: defaultSpacing / 1.5,
    overflow: "scroll",
  },
  translationLabel: {
    fontSize: 16,
    color: "#44AEDF",
    marginBottom: defaultSpacing / 2,
  },
  translationText: {
    fontSize: 20,
    lineHeight: 24,
    color: "#dddddd",
  },
  translationWord: {
    color: "#44AEDF",
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  containerHiddenWord: {
    // height: 10,
    // position: "relative"
  },
  innerHiddenWord: {
    width: "100%",
    height: 18,
    backgroundColor: "#fff1",
    borderRadius: 5,
    position: "absolute",
    left: 0,
    top: 3
  },
  hiddenWord: {
    fontSize: 20,
    lineHeight: 24,
    color: "transparent",
  },
  progressBarContainer: {
    top: 0,
    left: 0,
    height: 4,
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
  topLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: 1,
    backgroundColor: "#fff8",
  }
})
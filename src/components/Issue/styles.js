import { StyleSheet, Dimensions, StatusBar } from 'react-native'

import { transparentize } from 'polished'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
export const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: defaultSpacing,
    overflow: "hidden"
  },
  tagContainer: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: transparentize(0.85, COLORS.BLUE),
    paddingHorizontal: defaultSpacing,
    paddingVertical: defaultSpacing / 4,
    borderRadius,
    maxWidth: defaultSpacing  * 4,
    marginBottom: defaultSpacing
  },
  tagText: {
    fontSize: 10,
    color: COLORS.BLUE
    },
  questionContainer: {
    height: "auto",
    // maxHeight: screenHeight * .2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    shadowColor: COLORS.WHITE,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  question: {
    flex: 1,
    color: COLORS.BLACK_SECONDARY + 'bb',
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
    marginBottom: 20,
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
    fontSize: 20
  },
  translation: {
    height: "auto",
    // maxHeight: screenHeight * .2,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.WHITE,
    borderRadius: borderRadius * 1.2,
    justifyContent: 'center',
    paddingVertical: defaultSpacing / 1.5,
    paddingLeft: defaultSpacing / 1.5,
    overflow: "scroll",
    shadowColor: COLORS.WHITE,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  translationContainer: {
    backgroundColor: transparentize(0.85, COLORS.BLACK_SECONDARY),
    maxWidth: defaultSpacing * 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: defaultSpacing / 2,
    paddingHorizontal: defaultSpacing,
    paddingVertical: defaultSpacing / 4,
    borderRadius
  },
  translationLabel: {
    fontSize: 10,
    color: COLORS.BLACK_SECONDARY,
  },
  translationText: {
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.BLACK_SECONDARY + 'bb',
  },
  translationWord: {
    color: "#44AEDF",
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  progressBarContainer: {
    top: 0,
    left: 0,
    height: 3,
    width: windowWidth,
    backgroundColor: COLORS.BLACK_SECONDARY + 11,
    position: "absolute"
  },
  progressBar: {
    height: "100%",
    backgroundColor: COLORS.BLACK_SECONDARY + "bb"
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
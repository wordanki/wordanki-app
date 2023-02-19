import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20
const maxWidth = windowWidth * 0.8

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BGCOLOR_DARK,
    width: windowWidth,
    alignItems: 'center'
  },
  questionContainer: {
    width: maxWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  question: {
    color: COLORS.WHITE,
    marginTop: defaultSpacing * 2,
    marginBottom: defaultSpacing * 2,
    fontSize: 30
  },
  word: {
    color: COLORS.PINK,
    fontWeight: 'bold'
  },
  answerButton: {
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius,
    paddingVertical: 10,
    width: maxWidth,
    alignItems: 'center',
    marginBottom: defaultSpacing
  },
  answerText: {
    color: COLORS.WHITE,
    fontSize: 16,
  },
  translation: {
    marginTop: defaultSpacing,
    borderWidth: 1,
    width: maxWidth,
    borderColor: COLORS.WHITE,
    borderRadius,
    paddingVertical: defaultSpacing
  },
  translationText: {
    fontSize: 16,
    color: COLORS.WHITE,
    paddingHorizontal: defaultSpacing
  }
})
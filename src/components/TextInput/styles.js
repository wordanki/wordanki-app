import { StyleSheet } from 'react-native'

import { COLORS } from "../../theme"

const borderRadius = 40
const defaultSpacing = 20

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    color: COLORS.WHITE
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    paddingVertical: defaultSpacing / 2,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_PRIMARY
  },
  textInput: {
    color: COLORS.GRAY_PRIMARY,

    marginLeft: defaultSpacing / 2,
    width: "80%"
  },
  eyesButton: {
    marginLeft: defaultSpacing / 2,
  }
})
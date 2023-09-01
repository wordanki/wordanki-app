import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
  page: {
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: COLORS.BGCOLOR_DARK,
    position: "relative",
  },
  exitButton: {
    // backgroundColor: "#dde1e8",
    position: "absolute",
    top: 60,
    left: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "85%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  image: {
    height: 160,
    width: 160,
  },
  text: {
    width: 300,
    maxWidth: "100%",
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.BLACK_SECONDARY,
    textAlign: "center",
  },
  buttonsContainer: {
    width: 250,
    maxWidth: "90%",
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 12,
    marginBottom: 20,
  },
  contentButton: {
    flex: 1,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BGCOLOR_DARK,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: "#dde1e8",
  },
  imageButton: {
    width: 20,
    height: "100%",
    marginRight: 10,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "500",
    color: "#777777",
  },
  withoutRegister: {
    textAlign: "center",
    // textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "500",
    color: "#777777",
  },
  textFooter: {
    width: 300,
    maxWidth: "100%",
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.GRAY_PRIMARY,
    textAlign: "center",
    textDecorationLine: "underline"
  }
})
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  page: {
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#222228",
    position: "relative",
  },
  exitButton: {
    width: 24,
    height: 24,
    backgroundColor: "#606870",
    position: "absolute",
    top: 80,
    right: 40,
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
    color: "#b8c0d0",
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
    backgroundColor: "#303036",
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: "#535966",
  },
  imageButton: {
    width: 20,
    height: "100%",
    marginRight: 15,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "500",
    color: "#a8b2bb",
  },
  withoutRegister: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "500",
    color: "#a8b2bb",
  },
  textFooter: {
    width: 300,
    maxWidth: "100%",
    fontSize: 12,
    fontWeight: "500",
    color: "#a0a7ae",
    textAlign: "center",
  }
})
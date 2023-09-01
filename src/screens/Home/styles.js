import { StyleSheet, Dimensions } from 'react-native'

import { transparentize } from 'polished'

import { COLORS, FONTS } from "../../theme"
import { border } from 'polished'

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
export const defaultSpacing = 16

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.BGCOLOR_DARK,
    padding: defaultSpacing
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: defaultSpacing,
  },
  infoImg: {
    width: 60,
    height: 60,
    marginRight: defaultSpacing * 1.5
  },
  infoText: {
    fontSize: 20,
    backgroundColor: transparentize(0.85, COLORS.GREEN_PRIMARY),
    color: COLORS.BLACK_SECONDARY,
    borderRadius,
    paddingLeft: defaultSpacing / 2
  },
  infoMainText: {
    flexDirection: "row",
    alignItems: "center"
  },  
  infoQuantity: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: defaultSpacing / 2,
    marginLeft: defaultSpacing
  },
  reviewImg: {
    width: 90,
    height: 90,
    alignSelf: "flex-start"
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },  
  reviewContent: {
    maxWidth: 150
  },
  reviewTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: defaultSpacing / 2
  },
  reviewText: {
    color: COLORS.GRAY_PRIMARY
  },
  reviewItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: defaultSpacing
  },
  progressBar: {
    width: 150
  },  
  reviewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: defaultSpacing / 2,
    borderRadius: borderRadius * 2
  },
  reviewButtonText: {
    textAlign: "center",
    color: transparentize(0.25, COLORS.BLUE),
    fontWeight: "bold",
    marginRight: defaultSpacing / 4
  },
  studyContainer: {
    borderRadius,
    paddingVertical: defaultSpacing,
    paddingHorizontal: defaultSpacing,
    marginTop: defaultSpacing * 2,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.WHITE,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  studyHeader: {
    flexDirection: "row",
    alignItems: "center"
  },  
  studyContent: {
    maxWidth: 150
  },
  studyHeaderTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: defaultSpacing / 2
  },
  studyHeaderSubtitle: {
    color: COLORS.GRAY_PRIMARY
  },
  studyImg: {
    width: 110,
    height: 110,
    alignSelf: "flex-start"
  },
  studyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: defaultSpacing * 2,
    backgroundColor: COLORS.GREEN_PRIMARY,
    paddingVertical: defaultSpacing / 2,
    borderRadius: borderRadius * 2
  },
  studyButtonText: {
    textAlign: "center",
    color: transparentize(0.25, COLORS.GREEN_PRIMARY),
    fontWeight: "bold",
    marginRight: defaultSpacing / 4
  },
  bottomSize: {
    height: windowWidth / 8 + defaultSpacing
  },
  fab: {
    borderRadius,
    backgroundColor: COLORS.WHITE,
  },
  studyAndReviewButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: defaultSpacing * 2
  },
  studyAndReviewButtonText: {
    textAlign: "center",
    color: COLORS.GRAY_PRIMARY,
    marginRight: defaultSpacing / 4,
    fontSize: 16,
    fontWeight: "500"
  }
})
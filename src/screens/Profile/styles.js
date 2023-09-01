import { StyleSheet, Dimensions } from 'react-native'

import { transparentize } from 'polished'

import { COLORS, FONTS } from "../../theme"

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
    filter: {
        backgroundColor: COLORS.WHITE,
        padding: defaultSpacing,
        borderRadius,
        shadowColor: COLORS.WHITE,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    filterText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: defaultSpacing
    },  
    filterActions: {
        marginBottom: defaultSpacing
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: defaultSpacing,
        borderRadius,
        backgroundColor: transparentize(0.85, COLORS.ORANGE),
        paddingHorizontal: defaultSpacing / 2
    },
    infoText: {
        color: COLORS.ORANGE,
        marginLeft: defaultSpacing / 2
    },
    dataContainer: {
        backgroundColor: COLORS.WHITE,
        // borderWidth: 1,
        paddingHorizontal: defaultSpacing,
        borderRadius,
        shadowColor: COLORS.WHITE,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },  
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: defaultSpacing / 2,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BGCOLOR_DARK
    },
    dataType: {
        flexDirection: "row",
        alignItems: "center"
    },
    dataText: {
        marginLeft: defaultSpacing / 2
    },  
    dataContent: {

    }
})
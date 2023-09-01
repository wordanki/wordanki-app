import { StyleSheet, Dimensions } from 'react-native'

import { transparentize } from 'polished'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
export const defaultSpacing = 16

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BGCOLOR_DARK,
        paddingHorizontal: defaultSpacing
    },
    list: {
        flex: 1,
        marginTop: 20
    },
    time: {
        textAlign: 'center', 
        backgroundColor: transparentize(0.85, COLORS.ORANGE), 
        color: COLORS.ORANGE, 
        padding: 5, 
        borderRadius: borderRadius
    },
    timeContainer: {
        minWidth: defaultSpacing * 2
    },
    detailContainer: {
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.WHITE,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingHorizontal: defaultSpacing / 2,
        borderRadius,
        marginBottom: defaultSpacing * 2
    }
})
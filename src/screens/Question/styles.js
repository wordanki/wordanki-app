import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const windowWidth = Dimensions.get('window').width

const borderRadius = 10
const defaultSpacing = 20
const maxWidth = windowWidth * 0.8

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK_PRIMARY
    }
})
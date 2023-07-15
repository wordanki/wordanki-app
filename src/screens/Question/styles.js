import { StyleSheet, Dimensions, StatusBar } from 'react-native'

import { COLORS, FONTS } from "../../theme"

const statusBarHight = StatusBar.currentHeight

const borderRadius = 10
const defaultSpacing = 20

const height = Dimensions.get('window').height - 49 - (statusBarHight < 24 ? statusBarHight : 0) 
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: COLORS.BLACK_PRIMARY
    }
})
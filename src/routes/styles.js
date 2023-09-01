import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTS } from "../theme"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    tabBarStyle: {
        elevation: 0,
        shadowOpacity: 0,
        height: 70,
        borderTopWidth: 0,
    },
    tabBarItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarIconStyle: {
        flex: 0,
        width: 20,
        height: 20
    },
    tabBarLabelStyle: {
        fontFamily: FONTS.REGULAR,
        fontSize: 13,
        marginLeft: 16
    },
    globalTabContainer: {
        backgroundColor: COLORS.BLACK_PRIMARY,
    },
    tabsContainer: {
        flexDirection: 'row',
        // backgroundColor: COLORS.BLACK_TERTIARY,
        borderTopWidth: 0,
        borderTopColor: "#fff4",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: 'center', 
        height: 70,
        alignItems: 'center', 
        width: windowWidth / 2,
    },
    slidingTabContainer: {
        // ...StyleSheet.absoluteFillObject,
        width: windowWidth / 4,
        alignItems: "center",
    },
    slidingTab: {
        height: 4,
        width: 4,
        borderRadius: 2,
        backgroundColor: "#ffffff88",
        marginBottom: 8
    },  
    icon: {
        borderRadius: 20,
        width: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        marginRight: 8
    },
    buttonAdd: {
        height: 70,
        width: windowWidth / 5,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: COLORS.BLACK_TERTIARY
    },
    viewAdd: {
        height: windowWidth / 8,
        width: windowWidth / 8,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius:  windowWidth / 8  / 2,
        backgroundColor: COLORS.RED,
        position: 'relative'
    },
    containerAdd: {
        height: windowWidth / 8,
        width: windowWidth / 8,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 12, 
        marginTop: 2
    }
})
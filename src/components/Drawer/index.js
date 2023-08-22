import {
    View,
    Text,
    Image,
    ImageBackground,
    Share,
    TouchableOpacity,
} from 'react-native'

import * as Linking from 'expo-linking';

import { Platform } from 'react-native'

import * as StoreReview from 'expo-store-review'

import ProgressBar from "react-native-animated-progress"

import { useAuth } from '../../hooks/auth'

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import { UserPhoto } from '../UserPhoto'

import { ButtonDrawer } from '../ButtonDrawer'

import { useGlobal } from '../../hooks/global'

import { maxLevel } from '../../config/algorithm'

import { COLORS } from '../../theme'
import { styles } from './styles'

export const Drawer = props => {
    const { user } = useAuth()

    console.log(user)

    const { informations, level } = useGlobal()

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Baixe o Wordanki na Play Store\n\nhttps://play.google.com/store/apps/details?id=com.wordanki.app ',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) { }
    }

    const handleReview = async () => {
        if (Platform.OS === "android") {
            Linking.openURL(
                `https://play.google.com/store/apps/details?id=com.wordanki.app&showAllReviews=true`
            )
        } else if (Platform.OS === "ios") {
            Linking.openURL(
                `https://apps.apple.com/app/apple-store/id570060128?action=write-review`
            )
        }
    }

    const handleLogout = async () => {
        // await signOut()
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}

                contentContainerStyle={{ backgroundColor: COLORS.BLACK_TERTIARY }}>

                <View style={styles.profileContainer}>
                    <UserPhoto imageUri={user?.picture} size='HIGHER' />

                    <View style={styles.userContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.username}>
                                {user?.name}
                            </Text>

                            <Text style={styles.usermail}>
                                {user?.email}
                            </Text>
                        </View>
                    </View>

                    {/* <View style={{width: "100%", height: 4, borderRadius: 2, backgroundColor: "#ffffff22"}}></View> */}

                    {/* <View style={styles.statisticContainer}>
                        <Text style={styles.wordsText}>120 palavras vistas</Text>
                        <Text style={styles.levelText}>Nível {level}</Text>

                        <View style={styles.levelBar}>
                            <View style={[styles.completedBar, { width: `${level}%` }]}></View>
                        </View>
                    </View> */}
                </View>

                <View style={styles.buttonsContainer}>
                    <ButtonDrawer iconName={"settings-outline"} text={"Configurações"} handle={handleShare} />
                    <ButtonDrawer iconName={"share-social"} text={"Compartilhar"} handle={handleShare} />
                    <ButtonDrawer iconName={"star-outline"} text={"Avaliar"} handle={handleReview} />
                    <ButtonDrawer iconName={"exit-outline"} text={"Sair"} handle={handleShare} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
};
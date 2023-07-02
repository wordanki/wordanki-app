import {
    View,
    Text,
    Image,
    ImageBackground,
    Share,
    TouchableOpacity,
} from 'react-native'

import Icon, { IconType } from "react-native-dynamic-vector-icons"
import ProgressBar from "react-native-animated-progress"

// import { useAuthentication } from '../../hooks/auth'

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import { UserPhoto } from '../UserPhoto'

import { useGlobal } from '../../hooks/global'

import { maxLevel } from '../../config/algorithm'

import { COLORS } from '../../theme'
import { styles } from './styles'

export const Drawer = props => {
    // const { user, signOut } = useAuthentication()
    const { informations: { version }, level } = useGlobal()

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'WORDANKI HHHHHH',
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

    const handleLogout = async () => {
        // await signOut()
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}

                contentContainerStyle={{ backgroundColor: COLORS.BLACK_TERTIARY }}>

                <ImageBackground style={styles.profileContainer}>
                    {/* <UserPhoto imageUri={user?.photoURL} size='HIGHER' /> */}

                    {/* <Text style={styles.username}>
                        {user?.displayName}
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.usermail}>
                            {user?.email}
                        </Text>
                    </View> */}

                    <View style={styles.levelContainer}>
                        <Text style={styles.levelText}>Nível {level}/{maxLevel}</Text>

                        {/* <Text style={styles.version}>
                            {version}
                        </Text> */}
                    </View>

                    <ProgressBar progress={level} backgroundColor={COLORS.GREEN_PRIMARY} />
                </ImageBackground>
            </DrawerContentScrollView>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    resizeMode='contain'
                    source={require('../../assets/logo.png')}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={handleShare} style={styles.footerButtonContainer}>
                    <View style={styles.footerButton}>
                        <Icon
                            name="share-social-outline"
                            type={IconType.Ionicons}
                            size={20}
                            color={COLORS.WHITE}
                        />

                        <Text style={styles.footerButtonText}>
                            Convide um amigo
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={handleShare} style={styles.footerButtonContainer}>
                    <View style={styles.footerButton}>
                        <Icon
                            name="setting"
                            type={IconType.AntDesign}
                            size={20}
                            color={COLORS.WHITE}
                        />

                        <Text style={styles.footerButtonText}>
                            Configurações
                        </Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        </View>
    );
};
import {
    View,
    Text,
    ImageBackground,
    Share,
    TouchableOpacity,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { UserPhoto } from '../UserPhoto'

import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { COLORS } from '../../theme'
import { styles } from './styles'

export const Drawer = props => {
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

    const handleLogout = () => {

    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}

                contentContainerStyle={{ backgroundColor: COLORS.BLACK_TERTIARY }}>

                <ImageBackground style={styles.profileContainer}>
                    <UserPhoto size='HIGHER' />

                    <Text style={styles.username}>
                        Anderson Barbosa
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.usermail}>
                            anderson@gmail.com
                        </Text>
                    </View>
                </ImageBackground>

                <View style={styles.drawerListContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

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

                <TouchableOpacity onPress={handleLogout} style={styles.footerButtonContainer}>
                    <View style={styles.footerButton}>
                        <Icon
                            name="exit-outline"
                            type={IconType.Ionicons}
                            size={20}
                            color={COLORS.WHITE}
                        />

                        <Text style={styles.footerButtonText}>
                            Sair
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
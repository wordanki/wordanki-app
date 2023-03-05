import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import avatarImg from '../../assets/avatar.png'

import { COLORS } from '../../theme'

import { styles } from './styles'

const SIZES = {
    SMALL: {
        containerSize: 32,
        avatarSize: 28
    },
    NORMAL: {
        containerSize: 36,
        avatarSize: 30
    },
    HIGHER: {
        containerSize: 70,
        avatarSize: 62
    }
}

const DEFAULT_AVATAR = Image.resolveAssetSource(avatarImg).uri

export const UserPhoto = ({ imageUri, size = 'NORMAL' }) => {
    const { containerSize, avatarSize } = SIZES[size]

    return (
        <LinearGradient 
            colors={[COLORS.ORANGE, COLORS.RED]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.9, y: 1 }}
            style={[
                styles.container,
                {
                    width: containerSize,
                    height: containerSize,
                    borderRadius: containerSize / 2
                }
            ]}
        >
            <Image 
                source={{ uri: imageUri || DEFAULT_AVATAR  }} 
                style={[
                    styles.avatar,
                    {
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize / 2
                    }
                ]}
            />
        </LinearGradient>
    )
}
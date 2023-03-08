import { Image } from 'react-native'

import logoImg from '../../assets/logo.png'

const SIZES = {
    SMALL: 28,
    NORMAL: 30,
    HIGHER: 200
}

export const Logo = ({ size = 'NORMAL' }) => {
    const imageSize = SIZES[size]

    return (
        <Image 
        source={{ uri: Image.resolveAssetSource(logoImg).uri  }} 
        style={[
            {
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize / 2
            }
        ]}
    />
    )
}
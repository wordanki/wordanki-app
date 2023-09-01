import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

import { COLORS } from '../../theme'

import { styles } from './styles'

export const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={30} animating={true} color={COLORS.GRAY_PRIMARY} />
        </View>
    )
}
import { useState } from 'react'
import { View, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, Modal, Share } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles'
import { COLORS } from '../../theme'

export default function PopupMenu() {
    const [visible, setVisible] = useState(false)
    const options = [
        'Reportar erro',
        'Compartilhar aplicativo'
    ]

    const navigation = useNavigation();

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

    return (
        <>
            <TouchableOpacity style={styles.containerIcon} onPress={() => setVisible(true)}>
                <SimpleLineIcons name="options-vertical" size={18} color={COLORS.GRAY_SECONDARY} />
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView style={{flex: 1}} onTouchEnd={() => setVisible(false)}>
                    <View style={styles.popup}>
                        <TouchableOpacity style={[styles.popupItem, { borderBottomWidth: 1 }]} onPress={() => navigation.navigate("Report")}>
                            <Text style={styles.popupText}>Reportar erro</Text>
                            <Octicons name="report" size={18} color="#eeeeee" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.popupItem} onPress={handleShare}>
                            <Text style={styles.popupText}>Compartilhar app</Text>
                            <Entypo name="share" size={18} color="#eeeeee" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    )
}
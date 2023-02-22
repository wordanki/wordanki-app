import React from 'react';
import { Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import Images from '../../assets/img_topics'

import { styles } from './styles';

export default function TopicContainer( props ) {

    // const img = `../../assets/img_topics/${props.topic}.png`;
    const img = `../../assets/img_topics/Viagens.png`;
    return (
        <View style={[styles.container, {width: props.width, marginTop: props.marginTop, marginLeft: props.marginLeft}]}>
            <ImageBackground source={require(img)} resizeMode="cover" style={styles.imageContainer}>
                <LinearGradient 
                    colors={[`#${props.bgcolor}00`, `#${props.bgcolor}`]}
                    style={styles.innerContainer}
                >
                    <View style={styles.containerTop}>
                        <Text style={styles.titleTopic}>{props.topic}</Text>
                        <Text style={styles.totalWords}>400 palavras</Text>
                    </View>
                    <View style={styles.containerBottom}>
                        <View style={styles.info}>
                            {/* <View style={[styles.dotInfo, {backgroundColor: "#14DC28"}]}></View> */}
                            <Text style={styles.textInfo}>Palavras{"\n"}vistas: 256</Text>
                        </View>
                        <View style={styles.info}>
                            {/* <View style={[styles.dotInfo, {backgroundColor: "#00B2FF"}]}></View> */}
                            <Text style={styles.textInfo}>Revisões{"\n"}pendentes: 64</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}
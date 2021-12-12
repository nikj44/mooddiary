import React from 'react'
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {emoData} from '../data/data';

const Main = () => {

    const RenderCard = ({item}) => {
        return(
            <View>
            <Text>hik</Text>
            {/* <Image style={styles.emoImage} source={item.emopic} /> */}
            <Text style={styles.text}>{item.text}</Text>
            <Text>He;llo</Text>
            </View>
        )
    }

    return (
        <View style={styles.View}>
        <LinearGradient colors={['#ffafbd','#ffc3a0']} style={styles.linearGradientScreen}>
        <FlatList 
            data={emoData} 
            renderItem={RenderCard}
            keyExtractor={item => item.emoNumber} />
        </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    linearGradientScreen: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
    },
    View: {
        flexDirection: 'column',
        flex: 1,
    },
    emoImage: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        marginTop: 50
    }
})

export default Main
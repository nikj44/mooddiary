import React from 'react'
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import emoData from '../data/data';

const Main = () => {

    const RenderCard = ({item}) => {
        return(
            <View style={{backgroundColor: '#00008B', marginHorizontal: 10, alignSelf: 'center', borderRadius: 30, borderColor: 'grey', borderWidth: 5}}>
            <Image style={styles.emoImage} source={item.emopic} />
            <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }

    //This is main
    return (
        <View style={styles.View}>
        <LinearGradient colors={['#ffafbd','#ffc3a0']} style={styles.linearGradientScreen}>
        <FlatList 
            data={emoData} 
            horizontal
            renderItem={RenderCard}
            keyExtractor={item => item.emoNumber} 
            style={{flexDirection: 'row', flex: 1}} 
            />
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
        marginBottom: 10
    },
    View: {
        flex: 1,
    },
    emoImage: {
        height: 200,
        width: 270,
        aspectRatio: 1.2,
        alignSelf: 'center',
        marginTop: 50,
    }
})

export default Main
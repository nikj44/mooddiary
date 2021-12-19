import React from 'react'
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import emoData from '../data/data';

const Main = () => {

    const RenderCard = ({item}) => {
        return(
            <View style={{backgroundColor: 'brown', marginHorizontal: 20, marginTop: 50,}}>
            <Image style={styles.emoImage} source={item.emopic} />
            <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }

    return (
        <View style={styles.View}>
        <LinearGradient colors={['#ffafbd','#ffc3a0']} style={styles.linearGradientScreen}>
        <FlatList 
            data={emoData} 
            horizontal
            renderItem={RenderCard}
            keyExtractor={item => item.emoNumber}
            style={{flexDirection: 'row', flex: 2}} 
            />
        <Text>Hello After</Text>
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
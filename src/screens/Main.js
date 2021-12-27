import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import emoData from '../data/data';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Main = () => {

    const RenderCard = ({item}) => {
        return(
            <TouchableOpacity style={{backgroundColor: '#00008B', marginHorizontal: 10, alignSelf: 'center', borderRadius: 30, borderColor: 'grey', borderWidth: 5}} 
            onPress={()=>plusOne(item.label)}>
            <Image style={styles.emoImage} source={item.emopic} />
            <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    const plusOne = async (label) => {
        try{
            await AsyncStorage.getItem(label)
        }catch {
            await AsyncStorage.setItem(label,'0')
        }
        const labelValue = await AsyncStorage.getItem(label)
        let integer = parseInt(labelValue)
        integer = integer + 1
        const string = integer.toString();
        await AsyncStorage.setItem(label, string)
        alert('Your Mood has been recorded')
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
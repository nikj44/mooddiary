import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Something = () => {
    return (
        <View>
            <Text style={{color: 'blue'}}>Something</Text>
            <View style={styles.button}>
            <Button title='black' color='blue'>
            </Button>
            </View>
        </View>
    )
}

export default Something

const styles = StyleSheet.create({
    button: {
        length: 5,
        borderBottomColor: 'pink',
        borderWidth: 20,
        color: 'pink'
    }
})

import { Text, View, StyleSheet, TextInput  } from 'react-native';
import  {FontAwesome} from '@expo/vector-icons'
import {elevation} from '../common/styles'
import React, { useState } from 'react'

const Search = ({setActiveCategory}) =>  {

    const [input, setInput] = useState("");

    const handleEndEditing = () => {
        console.log(input)
        if(!input) return;
        setActiveCategory(input);
        setInput("");

    }

    return (
        <View style={[styles.container, styles.elevation]} >
            <FontAwesome name="search" size={25}  />
            <TextInput style={styles.input}
            onChangeText={(text) => {
                setInput(text);
                
            }}
            onEndEditing={handleEndEditing}
            placeholder="Restaurantes, food.."
            value={input}
             />
        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        marginVertical: 25,
        padding: 18,
        borderRadius:40

    },
    elevation,
    input: {
        fontSize: 20,
        marginLeft: 10,
    }

})

export default Search;

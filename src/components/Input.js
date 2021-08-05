import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'


export function Input(props) {
    return (
        <View style={ styles.container_input}>
            <TextInput style={styles.inputText} placeholder={props.label} secureTextEntry={props.senha} onChangeText={props.onChangeText}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container_input:{
        marginTop:15,
        width: '80%',
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 5,
        
    },
    inputText:{
        flex: 1,
        height: '100%',
        padding: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        color: 'gray',
        borderRadius: 5,
        fontSize: 17,
        
    },
})
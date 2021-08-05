import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/EvilIcons'

export function Tarefa(props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  
    return (
        <View style={styles.container}>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.tarefa}>{props.name}</Text>
            {/* <View style={styles.separador}></View> */}

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={props.apagar}>
                    <Icon name="trash" size={30} color='gray' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: 320,
        height: 50,
        backgroundColor: '#DEE4E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    tarefa: {
        fontSize: 17,
    },

    button: {
        padding: 10,
        marginRight:15
    },
    checkbox:{
        marginLeft:30,
        marginRight:2
    }
})
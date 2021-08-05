import { tokenizer } from 'acorn';
import { data } from 'browserslist';
import { response } from 'express';
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { Input } from '../components/Input'
import api from '../service/apiIFRN'

export default function Login({navigation}) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(){
        var params = new URLSearchParams();
        params.append('username', login);
        params.append('password', senha);
        

        try {
            const responseToken = await api.post('autenticacao/token/', params);
            const {token} = responseToken.data;
            console.log(token)
            const responseDataUser = await api.get('minhas-informacoes/meus-dados/',{
                headers:{
                    'authorization': 'jwt ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log(responseDataUser.data);
        } catch (error) {
            Alert.alert('Error = ' + error.message);
        }
        
        
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.container_img}>
                <Image style={styles.img_logo} source={require('../img/IF.png')}/>
            </View>
            <Text style={styles.text_titulo}>IFRN.DO</Text>
            <View>
                <Input label='Login' onChangeText = {text => setLogin(text)}/>
                <Input label='Senha' senha={true} onChangeText = {text => setSenha(text)}/>
            </View>
            <View style={styles.container_button}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={[{color:'#FFFFFF'}, {fontSize:17}]}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#1DB863"
    },
    container_img:{
        marginTop:70,

    },
    container_button:{
        marginTop:15,
        width: '80%',
        height: 60,
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        padding: 10,
        backgroundColor: '#666666',
        paddingLeft: 20,
        borderRadius: 5,
    },
    img_logo:{
        
      
    },
    text_titulo:{
        marginBottom:30,
        fontSize:36,
        fontWeight:'700',
        color:'#FFFFFF',
        fontFamily:'Inter'
    },
   
})
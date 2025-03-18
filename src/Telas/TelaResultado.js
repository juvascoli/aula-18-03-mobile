import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';

export default function TelaResultado({route}) {
  const escolha = route.params.escolha
  const link = `api.giphy.com/v1/${escolha}/search`
  console.log(link)

  const[text, setText] =useState("")


  const solicitarDados = async (text) => {
    try {
      const resultado = axios.get(link, {
        Params:{
          api_key: API_KEY,
          q: text
        }
      })
    
    } catch (error) {
      console.log(error)
      
    }

  };
  
  

  return (
    <ImageBackground>
        style={styles.container}
        source={require("../../assets/BG.png")}

        <View style={styles.container}>
          <Ionicons name="chevron-back" color="white" size={40}
          onPress={()=>navigation.goBack()}
          />
          <TextInput
           placeholder='Digite sua pesquisa' 
           style={styles.textInput}
           autoCapitalize='none'
           autoCorrect={false}
           value={text}
           onChangeText={setText}
           ></TextInput>
          <Ionicons
          name="search"
          color="white"
          size={40} 
          onPress={()=>solicitarDados(text)}
          
          />
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  },
  textInput:{
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 10
  }

});

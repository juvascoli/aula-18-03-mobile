import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';

export default function TelaResultado({route}) {
  const escolha = route.params.escolha
  const link = `api.giphy.com/v1/${escolha}/search`
  console.log(link)

  return (
    <ImageBackground>
        style={styles.container}
        source={require("../../assets/BG.png")}

        <View style={styles.container}>
          <Ionicons name="search" color="white" size={40}
          onPress={()=>navigation.goBack()}
          />
          <TextInput placeholder='Digite sua pesquisa' style={styles.textInput}></TextInput>
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

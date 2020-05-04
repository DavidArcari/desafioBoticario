import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';


export default function Cadastro(){

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerTxtIn}>
        <Text style={styles.textLogar}> Informe seu nome, e-mail e senha: </Text>

        <TextInput
          style={styles.inputs}
          placeholder='Nome'
          //onChangeText={text => setState({name: text})}
        />
        <TextInput
          style={styles.inputs}
          placeholder='E-mail'
          //onChangeText={text => setState({email: text})}
        />
        <TextInput
          style={styles.inputs}
          placeholder='Senha'
          //onChangeText={text => setState({senha: text})}
        />
      </View>
      <View>
        <Button 
          title="Cadastrar"
          //onPress={gravarUsuario}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc80'
  },
  containerTxtIn: {
    flex:1,
    justifyContent: 'center'
  },
  containerTxtIn: {
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  textLogar: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputs: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  } 
})
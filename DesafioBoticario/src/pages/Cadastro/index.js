import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet
} from 'react-native';

function fazerCadastro() {
  Keyboard.dismiss();
}

export default function Cadastro(){

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerTxtIn}>
        <Text style={styles.textLogar}> Informe seu nome, e-mail e senha: </Text>

        <TextInput
          style={styles.inputs}
          placeholder='Nome'
        />
        <TextInput
          style={styles.inputs}
          placeholder='E-mail'
        />
        <TextInput
          style={styles.inputs}
          placeholder='Senha'
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button 
          title="Cadastrar"
          onPress={() => fazerCadastro()}
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
    backgroundColor: '#ff9933'
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
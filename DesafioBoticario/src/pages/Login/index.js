import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard
} from 'react-native';


export default function Login({navigation}) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function tentarLogar() {
    if(email == "teste@teste.com" && senha == "123456"){
      Keyboard.dismiss();
      navigation.navigate('Feed')
    }else {
      alert('E-MAIL OU SENHA INVÁLIDA...');
      Keyboard.dismiss();
    }
  }

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerTxtIn}>
        <Text style={styles.textLogar}> Entre com seu E-mail e Senha: </Text>

        <TextInput
          style={styles.inputs}
          placeholder='E-mail'
          onChangeText={texto => setEmail(texto)}
        />
        <TextInput
          style={styles.inputs}
          placeholder='Senha'
          secureTextEntry={true}
          onChangeText={texto => setSenha(texto)}
        />

      </View>

      <View>
        <Button 
          title="Logar"
          onPress={() => tentarLogar()}
        />
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
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
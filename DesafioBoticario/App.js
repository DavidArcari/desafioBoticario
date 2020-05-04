import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import Feed from './src/pages/Feed'

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login}
          options= {{
            title: 'Bem Vindo!',
          }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro}
          options= {{
            title: 'Cadastro',
          }} 
        />
        <Stack.Screen 
          name="Feed" 
          component={Feed}
          options= {{
            title: 'Feed',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

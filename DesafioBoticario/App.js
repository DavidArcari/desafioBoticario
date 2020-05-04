import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Feed from './src/pages/Feed';
import Posts from './src/pages/Posts';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Posts}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Feed" 
            component={Feed}
            options= {{
              title: 'Feed',
              headerStyle: {
                backgroundColor: "#ff9933"
              },
            }} 
          />
          <Stack.Screen 
            name="Login" 
            component={Login}
            options= {{
              title: 'Bem Vindo!',
              headerStyle: {
                backgroundColor: "#ff9933"
              },
            }} 
          />
          <Stack.Screen 
            name="Cadastro" 
            component={Cadastro}
            options= {{
              title: 'Cadastro',
              headerStyle: {
                backgroundColor: "#ff9933"
              },
            }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

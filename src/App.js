import 'react-native-gesture-handler';
import React from 'react';
import { Image, View, } from 'react-native';
import { Splashscreen, Homescreen } from './pages';
import { Logo } from './assets/image';
import Router from './router';
import { NavigationContainer } from '@react-navigation/native';



const App = () =>  {

  return (
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
  );
};


export default App;

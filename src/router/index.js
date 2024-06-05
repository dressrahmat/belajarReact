import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home, Splashscreen, Pesanan, Whistlist, Profile} from "../pages";
import { BottomNavigator } from "../components/molecules";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator  tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown: false}} />
            <Tab.Screen name="Whistlist" component={Whistlist} options={{headerShown: false}} />
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router
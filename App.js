import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App(){
    useEffect (() => {
        SplashScreen.hide();
    },[])
    return(
        <NavigationContainer>
            <StatusBar backgroundColor='transparent' translucent={true}/>
            <Routes/>
        </NavigationContainer>
    )
}
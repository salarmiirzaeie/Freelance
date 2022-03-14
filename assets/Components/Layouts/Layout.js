import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu } from "../Menu";
import Postdetail from "../Postdetail";
import { Home } from "../Home";
import { Login } from "../Login";
import { Stick } from "../Stick";
import { Bookmarks } from "../Bookmarks";
export const Layout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        
        }}
      >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Postdetail" component={Postdetail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Stick" component={Stick} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        
       

       
       
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};

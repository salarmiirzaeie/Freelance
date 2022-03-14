import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Appbar } from "react-native-paper";
import { View } from "react-native";

import {
    
  StyleSheet,
 
  
} from "react-native";
import { Chat } from "./Chat";
export function Stick() {
  

  return (
   
      
     <Chat/>
    
  );
}
const styles = StyleSheet.create({
  time:{
      color:'red'
  }
})
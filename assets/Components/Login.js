import React from 'react';
import { View ,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export const Login = () => {
  return (  <View style={styles.container}>
    
    <Text>rrre</Text>
  </View>);
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    box: {
      width: '100%',
      height: '100%',
    },
    button: {
      marginTop: 50,
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
    },
    buttonText: {
      color: 'red',
      textAlign: 'center',
      fontSize: 24,
    },
  });
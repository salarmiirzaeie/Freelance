import React from "react";
import { StyleSheet, ScrollView ,Text,View} from "react-native";
import {
  
  Appbar,
  List,Divider
 
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
    
    const [expanded, setExpanded] = React.useState(true);
    const navigation=useNavigation()
    const handlePress = () => setExpanded(!expanded);
  
    return (
        
    
    <ScrollView style={styles.scrollvuw}>
    <Appbar.Header style={styles.appbar}>
       
       <Appbar.Content titleStyle={styles.title} title="حساب" />
       
     </Appbar.Header>
      <List.Section style={styles.container}>
       
          <List.Item onPress={()=>{navigation.navigate('Bookmarks')} } titleStyle={styles.title2}  left={props => <List.Icon {...props} icon="chevron-left" />} right={props => <List.Icon {...props} icon="account" />} title="آگهی های من" />
         
          <List.Item onPress={()=>{navigation.navigate('Bookmarks')} }  titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} right={props => <List.Icon {...props} icon="bookmark-outline" />} title="نشان ها و یادداشت ها" />
         
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="بازدید های اخیر" right={props => <List.Icon {...props} icon="eye-check" />} />
         
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="تنظمیات" right={props => <List.Icon {...props} icon="circle-edit-outline" />} />
          <Divider />
          <Divider />
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="پشتیبانی و قوانین" right={props => <List.Icon {...props} icon="cached" />}/>
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title=" درباره فریلنس" right={props => <List.Icon {...props} icon="alert-circle-outline" />}/>
        
      </List.Section>
    </ScrollView>
   
    
    );
  };

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#20509e",
    textAlign:'right',
  },
 title:{
    textAlign:'right',
 },
 title2:{
    textAlign:'right',
 
 },
 
 
});

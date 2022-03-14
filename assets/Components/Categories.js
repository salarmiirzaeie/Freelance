import React from "react";
import { StyleSheet, ScrollView ,Text,View} from "react-native";
import {
  
  Appbar,
  List,Divider
 
} from "react-native-paper";


export const Categories = () => {
    
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    return (
        
    
    <ScrollView style={styles.scrollvuw}>
    <Appbar.Header style={styles.appbar}>
       
       <Appbar.Content titleStyle={styles.title} title="دسته بندی آگهی ها" />
       
     </Appbar.Header>
      <List.Section style={styles.container}>
       
         
         
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="ریاضی" right={props => <List.Icon {...props} icon="circle-edit-outline" />} />
          <Divider />
          <Divider />
          <Divider />
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="تجربی" right={props => <List.Icon {...props} icon="circle-edit-outline" />} />
          <Divider />
          <Divider />
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="فنی وحرفه ای" right={props => <List.Icon {...props} icon="circle-edit-outline" />} />
          <Divider />
          <Divider />
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="هنر" right={props => <List.Icon {...props} icon="circle-edit-outline" />} />
          <Divider />
          <Divider />
          <Divider />
          <List.Item titleStyle={styles.title2} left={props => <List.Icon {...props} icon="chevron-left" />} title="انسانی" right={props => <List.Icon {...props} icon="circle-edit-outline" />} />
       
          
        
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

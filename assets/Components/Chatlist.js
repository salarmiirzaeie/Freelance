import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  
} from "react-native";
import { Searchbar, Appbar,Avatar } from "react-native-paper";
import { dumeyDatachats } from "./Data";
export const Chatlist = () => {
  const [data, setdata] = React.useState(dumeyDatachats);
  const [searchQuery, setsearchquery] = React.useState();
  const onChangeSearch = (query) => {};
const navigation=useNavigation()
  return (
    <ScrollView style={styles.container}>
      
      <Appbar.Header style={styles.appbar} dark={true}>
        <Searchbar
          placeholder="جستجو"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.center}
        />
      </Appbar.Header>

      <View style={styles.carcontainer}>
        {data.map((data, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate("Stick")}
          >
            <View style={styles.bigCard} >
            <View style={styles.cardctnt}>
                <Text style={styles.cardcontent}>{data.title}</Text>

                <Text style={styles.chattime}>
                  {data.time}
                 
                </Text>
              </View>
              <View style={styles.cardctntimg}>
              <Avatar.Image size={70} source={{
                    uri: "https://bestprofilepictures.com/wp-content/uploads/2020/06/Anonymous-Profile-Picture-1024x1024.jpg",
                  }} />
                
              </View>
            
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  appbar: {
    backgroundColor: "#20509e",
  },
  container: {
    backgroundColor: "rgb(236, 236, 236)",
  },
  carcontainer: {
    backgroundColor: "white",

    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  cardstitle: {
    textAlign: "right",
    marginTop: 10,
    marginRight: 10,
    paddingBottom: 5,
  },
  cardctnt: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 1,
    paddingLeft: 8,
    flex:0.8,
  },
  cardctntimg: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
   flex:0.2,
    
  },
  bigCard: {
    display: "flex",
    flexDirection: "row",
    borderTopColor: "lightgray",
    borderTopWidth: 0.8,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.5,
  },
  pic: {
    width: "80%",
    height: 100,
    borderRadius: 6,
  },
  cardcontent: {
    textAlign: "right",
    paddingRight: 6,
    paddingTop: 5,
    fontSize: 18,
  },
  chattime: {
    textAlign: "left",
    paddingRight: 5,
    paddingTop: 20,
    fontSize: 15,
    color: "gray",
  },
});

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
import { Searchbar, Appbar } from "react-native-paper";
import { dumeyData } from "./Data";

export const Bookmarks = () => {
  const [data, setdata] = React.useState(dumeyData);
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
            onPress={() => navigation.navigate("Postdetail",{id:data.id})}
          >
            <View style={styles.bigCard}>
              <View style={styles.cardctnt}>
                <Image
                  style={styles.pic}
                  source={{
                    uri: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F5f0f2b5c-2dec-11e9-8744-e7016697f225?fit=scale-down&source=next&width=700",
                  }}
                />
              </View>
              <View style={styles.cardctnt}>
                <Text style={styles.cardcontent}>{data.title}</Text>

                <Text style={styles.cardcontentdes}>
                  {data.description}
                  {"\n"}
                  {data.time}
                </Text>
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
    paddingRight: 5,
    paddingLeft: 8,
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
    paddingRight: 5,
    paddingTop: 5,
    fontSize: 18,
  },
  cardcontentdes: {
    textAlign: "right",
    paddingRight: 5,
    paddingTop: 25,
    fontSize: 15,
    color: "gray",
  },
});

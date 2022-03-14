import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { dumeyData } from "./Data";
import {
  Appbar,
  Divider,
  List,
  Menu,
  Provider,
  Button,
} from "react-native-paper";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const Postdetail = (props) => {
  const navigation = useNavigation();
  const [data, setdata] = React.useState(dumeyData);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const temp = data;
  const post = temp.find((q) => q.id == props.route.params.id);

  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ScrollView style={{ flex: 0.8 }}>
          <Appbar.Header style={styles.Appbar}>
            <Provider>
              <Menu
                style={styles.Menu}
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon={MORE_ICON} onPress={openMenu} />}
              >
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
              </Menu>
            </Provider>
            <Appbar.Action icon={"bookmark-outline"} onPress={() => {}} />
            <Appbar.Action
              style={styles.right}
              icon={"arrow-right"}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Appbar.Header>
          <Image
            style={styles.pic}
            source={{
              uri: "https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg",
            }}
          />

          <View style={styles.desces}>
            <Text style={styles.cardcontent}>{post.title}</Text>
            <Text style={styles.cardcontentdes}>{post.time}</Text>

            <Divider />
            <List.Item
              title="First Item"
              right={(props) => (
                <Text style={styles.cardcontentdes2}>قیمت</Text>
              )}
            />
            <Divider />
            <Divider />
            <List.Item
              title="First Item"
              right={(props) => (
                <Text style={styles.cardcontentdes2}>برند و مدل</Text>
              )}
            />
            <Divider />
            <Divider />
            <Divider />
            <List.Item
              title="First Item"
              right={(props) => (
                <Text style={styles.cardcontentdes2}>آخرین بروزرسانی آگهی</Text>
              )}
            />
            <Divider />
            <Divider />
            <Text style={styles.cardcontent}>توضیحات</Text>
            <Text style={styles.Description}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.{" "}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.divbtnsend}>
          <Button
            icon="message-text-outline"
            color="#20509e"
            style={styles.buttonsend}
            mode="contained"
            onPress={() =>  navigation.navigate("Stick")}
          >
            چت
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Postdetail;
const styles = StyleSheet.create({
  Appbar: {
    backgroundColor: "transparent",
    zIndex: 50,
  
  },

  container: {},
  right: {
    marginLeft: "auto",
  },
  pic: {
    width: "100%",
    height: 200,
    position: "absolute",
    marginTop: 30,
  },
  desces: {
    position: "relative",
    marginTop: 150,
    marginRight: 10,
  },
  cardcontent: {
    textAlign: "right",
    paddingRight: 5,
    paddingTop: 5,
    fontSize: 18,
  },
  Description: {
    textAlign: "right",
    paddingRight: 5,
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 15,
  },
  cardcontentdes: {
    textAlign: "right",
    paddingRight: 5,
    paddingTop: 5,
    marginBottom: 10,
    fontSize: 14,
    color: "gray",
  },
  cardcontentdes2: {
    textAlign: "right",

    paddingTop: 5,
    marginBottom: 10,
    fontSize: 14,
    color: "gray",
  },
  Menu: {
    zIndex: 100,
  },
  divbtnsend: {
    flex: 0.1,
    width: "90%",
  },
  buttonsend: {
    width: "100%",
    marginTop: 12,
    alignSelf: "center",
  },
});

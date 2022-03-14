import React from "react";import { BottomNavigation, Text } from "react-native-paper";
import { Home } from "./Home";
import { Categories } from "./Categories";
import { Chatlist } from "./Chatlist";
import { Profile } from "./Profile";
import { Addpost } from "./Addpost";


const MusicRoute = () => <Profile />;
const RecentWallet = () => <Chatlist />;
const Posting = () => <Addpost/>;
const AlbumsRoute = () => <Categories />;
const RecentsRoute = () => <Home />;

export const Menu = () => {
  const [index, setIndex] = React.useState(4);
  const [routes] = React.useState([
    { key: "music", title: "حساب", icon: "account", color: "#20509e" },
    { key: "Wallet", title: "چت", icon: "wechat", color: "#20509e" },
    { key: "Post", title: "ثبت آگهی", icon: "plus-circle", color: "#20509e" },
    {key: "albums",title: "دسته بندی",icon: "format-line-weight",color: "#20509e"},
    { key: "recents", title: "خانه", icon: "home", color: "#20509e" },
    
  ]);
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    Wallet: RecentWallet, 
    Post: Posting,
   
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      
    />
  );
};

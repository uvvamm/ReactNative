import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "../screens/Notifications";
import Mystack from "./Mystack";
import { colorsp } from "../constans/colorsp";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
  const {width} = useWindowDimensions();
    return(
      <Drawer.Navigator
        screenOptions={{drawerActiveTintColor: colorsp.secondary,
          
          drawerType: width >= 768 ? "permanent" : 'front',
        }}
      >
        <Drawer.Screen name="stack" component={Mystack} options= {{headerShown: false}} />
        <Drawer.Screen name="Notifications" component={Notifications}/>
      </Drawer.Navigator>  
    );
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Mystack from "./Mystack";
import { FontAwesome } from '@expo/vector-icons';
import { colorsp } from "../constans/colorsp";

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
    return (
        <MyTab.Navigator initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: "center",
                tabBarActiveTintColor: colorsp.secondary,
            }}
            >
            <MyTab.Screen name="Home"component={Home} options={{tabBarIcon: ({color})=>( <FontAwesome name="home" size={24} color={color}/>)}}/>
            <MyTab.Screen name="Profile"component={Profile} options={{tabBarIcon: ({color})=>( <FontAwesome name="user" size={24} color={color}/>)}}/>
            

        </MyTab.Navigator>

    );
}
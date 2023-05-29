import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Mystack from "./Mystack";
import { FontAwesome } from '@expo/vector-icons';
import { colorsp } from "../constans/colorsp";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyTopTab from "./MytopTab";


const MyTab = createBottomTabNavigator();

export default function MyBottomTab(  ) {
    const navigation = useNavigation();
    return (
        <MyTab.Navigator initialRouteName="TopTap"
            screenOptions={{
                headerTitleAlign: "center",
                tabBarActiveTintColor: colorsp.secondary,
            }}
            >
            <MyTab.Screen name="TopTap" 
            component={MyTopTab} 
            options={{
                headerLeft:() =>(
                    <Pressable onPress={() => navigation.openDrawer()}>

                        <FontAwesome 
                        name="align-left" 
                        style={{marginLeft:15}} 
                        size={30} 
                        color={colorsp.secondary}/>

                    </Pressable>
                ),
                headerRight:() =>(
                    <Pressable onPress={() => navigation.navigate('Settings')}>

                        <FontAwesome 
                        name="cog" 
                        style={{marginRight:15}} 
                        size={30} 
                        color={colorsp.secondary}/>
                        
                    </Pressable>
                ), 
             
            
            tabBarIcon: ({color})=>( <FontAwesome name="home" size={24} color={color}/>)}}/>

            <MyTab.Screen name="Profile"component={Profile} options={{tabBarIcon: ({color})=>( <FontAwesome name="user" size={24} color={color}/>)}}/>
            

        </MyTab.Navigator>

    );
}
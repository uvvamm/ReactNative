import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colorsp } from "../constans/colorsp";
import Contacts from '../screens/Contacts';
import Home from '../screens/Home';

const  Tab = createMaterialTopTabNavigator();

export default function MyTopTab(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: {color: colorsp.secondary},
            tabBarIndicatorStyle: {backgroundColor: colorsp.primary},
            tabBarItemStyle: {},
            tabBarStyle: {}
        }}
        tabBarPosition="top" 
        initialRouteName="home">
            <Tab.Screen name="home" component = {Home} />
            <Tab.Screen name="Contacts" component = {Contacts} />
        </Tab.Navigator>
    )
}
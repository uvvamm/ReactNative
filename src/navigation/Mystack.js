import { createStackNavigator } from '@react-navigation/stack';
import {  colorsp } from "../constans/colorsp";
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { View, Text } from 'react-native';
import MyBottomTab from './MyBottomTab';


const HomeStack = createStackNavigator();

function CustomHeader({ title }) {
    return (
      <View
        style={{
          height: 80,
          width: '100%',
          backgroundColor: colorsp.secondary,
          padding: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colorsp.ligth,
          }}
        >
          {title}
        </Text>
      </View>
    );
  }


const myConfig = {
    headerShown: false,
    //title: 'somethings',
    headerTitleAlign: 'center',
    presentation: 'modal', // animacion entre pantallas
    gestureEnabled: true, // desplazar atras por gestos
    keyboardHandlingEnabled: true, // desplazar atras por keyboard handling
    //header: ({navigation, route, options, back}) =>(
      //  <CustomHeader title={route.name}/>
    //),
}
export default function Mystack(){
    return (
        <HomeStack.Navigator
                initialRouteName='Home'
                screenOptions={myConfig}
                >
            
            <HomeStack.Screen name="Root" component={MyBottomTab} ></HomeStack.Screen>

            <HomeStack.Group screenOptions={{headerShown: true}}>
              
            <HomeStack.Screen name="Settings" component={Settings}
              options={{headerBackTitle: 'Home',headerBackTitleVisible: true, headerBackTitleStyle:{color:'red'}, }}
            ></HomeStack.Screen>
            </HomeStack.Group>            
            

        </HomeStack.Navigator>
    );
}
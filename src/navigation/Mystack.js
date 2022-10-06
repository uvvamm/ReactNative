import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from "../constans/colors";
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { View, Text } from 'react-native';


const HomeStack = createStackNavigator();

function CustomHeader({ title }) {
    return (
      <View
        style={{
          height: 80,
          width: '100%',
          backgroundColor: Colors.secondary,
          padding: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.ligth,
          }}
        >
          {title}
        </Text>
      </View>
    );
  }


const myConfig = {
    headerShown: true,
    //title: 'somethings',
    headerTitleAlign: 'center',
    presentation: 'modal', // animacion entre pantallas
    gestureEnabled: true, // desplazar atras por gestos
    keyboardHandlingEnabled: true, // desplazar atras por keyboard handling
    header: ({navigation, route, options, back}) =>(
         <CustomHeader title={route.name}/>
    ),
}
export default function Mystack(){
    return (
        <HomeStack.Navigator
                initialRouteName='Home'
                screenOptions={myConfig}
                >
            <HomeStack.Screen name="Home" component={Home} ></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings} ></HomeStack.Screen>

        </HomeStack.Navigator>
    );
}
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/authScreens/Login";
import SignUp from "../screens/authScreens/SignUp";

const Auth = createStackNavigator();
export default function AuthStack(){
    return(
        <Auth.Navigator
        userToken={{
                header: false,
            }}
        
        >
            <Auth.Screen name="login" component={Login} />
            <Auth.Screen name="Signup" component={SignUp} />
        </Auth.Navigator>
    )
}
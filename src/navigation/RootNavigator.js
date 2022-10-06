import { NavigationContainer } from "@react-navigation/native";
import MyBottomTab from "./MyBottomTab";
import Mystack from "./Mystack";

export default function RootNavigator(){
    return (
        <NavigationContainer>
            <Mystack />
            
        </NavigationContainer>
    );
}
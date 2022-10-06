import { NavigationContainer } from "@react-navigation/native";
import Mystack from "./Mystack";

export default function RootNavigator(){
    return (
        <NavigationContainer>
            <Mystack />
        </NavigationContainer>
    );
}
import { ActivityIndicator, Text ,View } from "react-native";
import { globalStyles } from "../styles/golbal";


export default function Splash(){
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Welcome</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
}
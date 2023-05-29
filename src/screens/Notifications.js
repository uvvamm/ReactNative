import { Text, View } from "react-native";
import { globalStyles } from "../styles/golbal";

export default function Notifications(){
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Notifications</Text>
        </View>
    );
}
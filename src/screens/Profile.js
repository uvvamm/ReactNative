import { View, Text  } from "react-native";
import { globalStyles } from "../styles/golbal";

export default function Profile() {
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>profile</Text>
        </View>
    )
}
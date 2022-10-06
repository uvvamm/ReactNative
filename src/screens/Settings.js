import { View, Text } from "react-native";
import { globalStyles } from "../styles/golbal";

export default function Settings() {
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>settings</Text>
        </View>
    )
}
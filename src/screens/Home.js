import { View, Text, Button  } from "react-native";
import { globalStyles } from "../styles/golbal";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = new useNavigation();
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Home</Text>
            <Button style={globalStyles.button}
                onPress={() =>navigation.navigate("Settings")}
                title="Setting"
            
            >Go </Button>
        </View>
    )
}
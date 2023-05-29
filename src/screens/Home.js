import { View, Text, Button  } from "react-native";
import { globalStyles } from "../styles/golbal";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import Card from "../componentes/Card";

export default function Home() {
    const navigation = new useNavigation();
    const isDrawerOpen = useDrawerStatus();

    return (
        <View style={globalStyles.screenContainer}>
            <Card />
        </View>
    );
    
}
import { View, Text , Button } from "react-native";
import { globalStyles } from "../styles/golbal";
import { useDispatch } from "react-redux";
import { singOut } from "../features/auth/auth";

export default function Profile() {
    const dispatch = useDispatch();
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>profile</Text>
            <Button title="singOut" onPress={ async () => {
                await AsyncStorage.removeItem("@token");
                dispatch(singOut())
            } }/>
        </View>
    )
}
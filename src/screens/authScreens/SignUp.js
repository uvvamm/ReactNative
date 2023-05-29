import { View, Text } from "react-native";
import MyBottom from "../../componentes/MyButton";
import MyInput from "../../componentes/MyInput";
import { globalStyles } from "../../styles/golbal";

export default function SignUp( {navigation}){
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>SignUp</Text>
            <MyInput label={'Email'}/>
            <MyInput label={'Password'} secureTextEntry/>
            <MyBottom title={"SignUp"}/>
            <MyBottom title={"LogIn"} onPress={ () => navigation.navigate("Login")}/>
            
        </View>
    );
}
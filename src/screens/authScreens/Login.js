import { View, Text } from "react-native";
import MyBottom from "../../componentes/MyButton";
import MyInput from "../../componentes/MyInput";
import { globalStyles } from "../../styles/golbal";
import { useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/auth/auth";

export default function Login( {navigation}){
    const [token,setToken] = useState('');
    const  dispatch = useDispatch();
        async function save(value){
            try{ 
                await AsyncStorage.setItem("@token", value);
                dispatch(signIn(value));
                console.log("saved");
                
        }catch(e){
            console.log(e)
        }
    }
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Login</Text>
            <MyInput label={'Email'} value={token} onChangeText={setToken}/>
            <MyInput label={'Password'} secureTextEntry/>
            <MyBottom title={"Sing In"}
                    onPress={() => save(token)}
                />
            <MyBottom title={"Sing Up"} onPress={ () => navigation.navigate("SingUp")}/>
            
        </View>
    );
}
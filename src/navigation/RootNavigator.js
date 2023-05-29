import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MyBottomTab from "./MyBottomTab";
import MyDrawer from "./MyDrawer";
import Mystack from "./Mystack";
import { useSelector,  useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from "../features/auth/auth";
import Splash from "../screens/Splash";

export default function RootNavigator(){
    const {userToken, isLoading} = useSelector(state => state.auth);
    const  dispatch = useDispatch();
    console.log('0');

    useEffect(() => {
        getvalue();
    },[])

    async function getvalue(){
        try{ 
            const value = await AsyncStorage.getItem("@token");
            if (value !== null){
                console.log('data restored',value);
                dispatch(restoreToken(value));
            }else{
            console.log('data not saved');
            dispatch (restoreToken(null));
            }
            
    }catch(e){
        console.log(e)
    }
}

if(isLoading) return <Splash/>;     
    return (
        <NavigationContainer>
            {userToken ? <MyDrawer /> : <AuthStack  />} 
            
        </NavigationContainer>
    );
}
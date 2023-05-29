
import { TextInput, Text, View, StyleSheet,Image } from "react-native";
import { colorsp } from "../constans/colorsp";
import { useSelector } from "react-redux";
import MyBottom from "./MyButton";

export default function Card(){
    const { userToken } = useSelector(state => state.auth);
    function doSomething() {
        console.log('1');
        console.log('2');


    }

    return(
        <View style={styles.card}>
            <View style={styles.row}>
                <Image source={require('../../assets/favicon.png')} style={styles.img}/>
                <Text style={styles.name}>{userToken}</Text>
            </View>
            <MyBottom title={'Add Friend'} onPress={doSomething}/>
        </View>
    );

}


const styles = StyleSheet.create({
    card:{
        backgroundColor:'snow',
        width : '85%',
        padding : 20,
        margin : 10, 
        borderRadius : 10,
        borderWidth : 0.5,
        borderColor: colorsp.primary,  
    },
    img: {
        width: 100,
        height: 100
    },
    row: {
        flexDirection: 'row',
        alingItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    }

});
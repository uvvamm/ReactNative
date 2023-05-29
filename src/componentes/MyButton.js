import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colorsp } from "../constans/colorsp";

export default function MyBottom({ title, onPress }){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText} >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width: '90%',
        height: 45,
        backgroundColor: colorsp.primary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',


    },
    buttonText:{
        color: colorsp.ligth,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
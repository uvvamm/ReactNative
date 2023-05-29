import * as React from 'react';
import {View , Button, StyleSheet } from 'react-native';
import MyInput from './MyInput';
import { colorsp } from '../constans/colorsp';

export default function AddContact({onAddContact}){
    const [name, setName] = React.useState('');
    function handleAdd(){
        setName('');
        onAddContact(name);
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '80%'}}>
            <MyInput label={"Add contact"}
            value={name} onChangeText={setName}
            /> 

            </View>
            <Button title='Add' color={colorsp.primary} onPress={handleAdd}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContext: 'center',
        width: '100%',
        alignItems: 'center',
        width: '100%',
        paddingVertical: '5%',
    },
});
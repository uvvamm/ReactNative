import { useEffect } from "react";
import { View, Text, Button  } from "react-native";
import { globalStyles } from "../styles/golbal";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import AddContact from "../componentes/AddContact";
import ContactList from "../componentes/ContactList";
import * as React from "react"; 


export default function Contacts() {
   
    const [contacts,setContacts] = React.useState(initialContacts);
    function handleAddContact(name){
        setContacts([...contacts,{id:nexid++ , name:name}]);
    }
    function handleDeleteContact(id){
        setContacts(contacts.filter(contact => contact.id !== id));
    }
    function handleChangeContact(contact){
        setContacts(contacts.map(c =>(c.id === contact.id ? contact : c)));
    } 

    return(
        <View style = {globalStyles.simpleContairner}>
            <AddContact onAddContact={handleAddContact} />
            <ContactList  contacts={contacts}
                onChangeContact={handleChangeContact}
                onDeleteContact ={handleDeleteContact}
            />
        </View>
    );

   
    
}
let nexid=3;
const initialContacts = [

    {id:0 , name: 'uva'},
    {id:1 , name: 'bety'},
    {id:2 , name: 'eiden'},
];
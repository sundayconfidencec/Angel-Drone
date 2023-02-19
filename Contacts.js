import React from 'react';
import {View, Text , FlatList} from "react-native";
import Contact from './components/Contact';

function Contacts() {
    const allContact = [
        {name: "Sunday Confidence", phone: "043-565-7661"},
        {name: "helen Edet", phone: "043-565-7662"},
        {name: "kelvin Imoh", phone: "043-565-7663"},
        {name: "Rosey idinam", phone: "043-565-7664"},
        {name: "Martins Hanks", phone: "043-565-7665"},
        {name: "Mureen Donalds", phone: "043-565-7666"},
        {name: "Sam  Lukes", phone: "043-565-7667"},
        {name: "mom", phone: "043-565-7668"},
        {name: "dad", phone: "043-565-7669"},
        {name: "uncle", phone: "043-565-7660"},
        {name: "brother", phone: "043-565-7611"},
        {name: "sister", phone: "043-565-7612"},
        {name: "baby", phone: "043-565-7613"},
        {name: "bestie", phone: "043-565-7614"},
    ]
  return (
    <View>
        <FlatList 
        data={allContact}
        renderItem={({item}) =>{
            return <Contact name={item.name} phone={item.phone}/>
        }}
        keyExtractor={(item)=>item.phone}
        />
    </View>
  )
}

export default Contacts;
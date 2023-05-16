import React from 'react';
import {View, FlatList} from "react-native";
import Contact from "../components/Contact";

function Contacts() {
    const allContact = [
        {id:"0", name: "Sunday Confidence", phone: "043-565-7661", image: require("../assets/p1.jpg")},
        {id:"1", name: "evang Edet", phone: "043-565-7662",image: require("../assets/p2.jpg") },
        {id:"2", name: "Fancy Imoh", phone: "043-565-7663" ,image: require("../assets/p3.jpg")},
        {id:"3", name: "Dimma henry", phone: "043-565-7664" ,image: require("../assets/p4.jpg")},
        {id:"4", name: "Hilda Hanks", phone: "043-565-7665" ,image: require("../assets/p5.jpg")},
        {id:"5", name: "Mureen Donalds", phone: "043-565-7666" ,image: require("../assets/p6.jpg")},
        {id:"6", name: "Mrs Lukes", phone: "043-565-7667" ,image: require("../assets/p7.jpg")},
        {id:"7", name: "lil sis", phone: "043-565-7668" ,image: require("../assets/p8.jpg")},
        {id:"8", name: "mummy", phone: "043-565-7669" ,image: require("../assets/p9.jpg")},
        {id:"9", name: "smallie", phone: "043-565-7660" ,image: require("../assets/p10.jpg")},
        {id:"10",name: "chichi", phone: "043-565-7611" ,image: require("../assets/profile.jpg")},
        {id:"11",name: "Rosey idinam", phone: "043-565-7612" ,image: require("../assets/p1.jpeg")},
        {id:"12",name: "baby", phone: "043-565-7613" ,image: require("../assets/p2.jpeg")},
        {id:"13",name: "bestie", phone: "043-565-7614" ,image: require("../assets/p3.jpeg")},
    ]
  return (
    <View>
        <FlatList 
        data={allContact}
        renderItem={({item}) =>{
            return <Contact name={item.name} phone={item.phone} image={item.image} id={item.id}/>
        }}
        keyExtractor={(item)=>item.id}
        />
    </View>
  )
}



export default Contacts;
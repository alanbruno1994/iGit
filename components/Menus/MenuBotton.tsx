import React from "react";
import { View ,StyleSheet,TouchableOpacity,Text} from "react-native";
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons'; 

export default function MenuBotton(props:any)
{

    const [loaded] = useFonts({//Aqui carrega as fontes     
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });

      if (!loaded) {
        return null;
      }

    return <View style={styles.container}>
           <TouchableOpacity style={styles.buttonMenu}>
                <Feather name="home" size={24} color={props.codeSelect===1 ? "black": "gray"} />
                <Text style={{color:props.codeSelect===1 ? "black": "gray",fontFamily:"Oswald"}}>Home</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonMenu}>
                 <Feather name="github" size={24} color={props.codeSelect===2 ? "black": "gray"} />
                <Text style={{color:props.codeSelect===2 ? "black": "gray",fontFamily:"Oswald"}}>Repos</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonMenu}>
                <Feather name="users" size={24} color={props.codeSelect===3 ? "black": "gray"} />
                <Text style={{color:props.codeSelect===3 ? "black": "gray",fontFamily:"Oswald"}}>Seguidores</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonMenu}>
                <Feather name="users" size={24} color={props.codeSelect===4 ? "black": "gray"} />
                <Text style={{color:props.codeSelect===4 ? "black": "gray",fontFamily:"Oswald"}}>Seguindo</Text>
           </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    container:
    {
        backgroundColor:"#E8E8E8", 
        height:"100%",
        width:"100%",      
        display:"flex",
        flexDirection:"row",
        borderTopRightRadius:25,
        borderTopLeftRadius:25       
    },
    buttonMenu:
    {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        height:"100%"

    }
});
//Aqui fica os dados de seguidores ou que usuario logado segue e que será usado nas telas
//Seguidores.tsx e Seguindos.tsx
import React from "react";
import { View,StyleSheet,Text,Image,TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

export interface Seguindo_SeguidorInterface
{
    borderButton:boolean;
    foto:string;
    user:string;
    seguidores:boolean;
    navigation:any
}



export default function Seguindo_Seguidor(props:Seguindo_SeguidorInterface)
{
    function nextPage()
    {
        if(props.seguidores)
        {    
             props.navigation.navigate('Seguidor',{user:props.user});

        }else
        {
            props.navigation.navigate('Seguindo',{user:props.user});
        }
    }

    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });
      
      if (!loaded) {
        return null;
      }
    return <TouchableOpacity onPress={nextPage} style={props.borderButton?styles.container:styles.containerNoBoder}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
         <View style={styles.marcaRegion}>
             <View style={styles.marca}/>  
             <View style={styles.backImg}>
                <Image  style={styles.img} source={{uri:props.foto}}></Image>
            </View>
            <Text style={styles.textHigh}>#{props.user}</Text>
         </View>
         <View style={styles.returnButton}><AntDesign name="arrowright" size={24} color="white" /></View>
         </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"column", 
        backgroundColor:"#282828",
        height:130,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        justifyContent:"center",       
},
    containerNoBoder:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#282828",
        height:130,
        justifyContent:"center"
},
marca:
{
    height:35,
    width:10,
    backgroundColor:"#FDCF09",
    marginRight:10,
    borderTopRightRadius:5,
    borderBottomRightRadius:5
},
marcaRegion:
{
    backgroundColor:"#282828",
    display:"flex",
    flexDirection:"row",
    alignItems:"center"       
},
textHigh:
        {
            fontFamily:"Oswald",            
            color:"white",
            marginLeft:25
        },
        backImg:
        {
            backgroundColor:"white",
            borderRadius:40,
            height:80,
            width:80,
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
       
          
        },
        img:
        {
            width:70,
            height:70,
            borderRadius:35
        },       
returnButton:
{
    display:"flex",    
    alignItems:"center",
    marginRight:10,
    flexDirection:"row"
}             

});
//Aqui fica os dados de repositórios que serão mostrados na tela Repos
//ou seja, aqui servirá para mostrar dados repositóris do usuário logado
import React from "react";
import { View,StyleSheet,Text} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export interface RepositoryInterface
{
    borderButton:boolean;
    start:number,
    name:string,
    description:string
}



export default function Repository(props:RepositoryInterface)
{
    return <View style={props.borderButton?styles.container:styles.containerNoBoder}>
            <View style={styles.marcaRegion}><View style={styles.marca}/><Text style={styles.textHigh}>{props.name}</Text></View>
            <View style={styles.textRegionLow}>
                <Text style={styles.textLow}>{props.description ? props.description:"" }</Text>           
            </View>
            <View style={styles.regionSeguidor}>
                <View style={{marginLeft:10,display:"flex",flexDirection:"row"}}><EvilIcons name="star" size={24} color="#FDCF09" /><Text style={styles.textLow}>{" "+props.start}</Text></View>
                <View style={{display:"flex",flexDirection:"row"}}>
                <View style={{display:"flex",flexDirection:"row"}}><EvilIcons name="unlock" size={24} color="green" /></View>
                <View style={{display:"flex",flexDirection:"row"}}><EvilIcons name="lock" size={24} color="red" /></View>
                </View>
            </View>
    </View>

}

const styles = StyleSheet.create(
    {
        container: {
            display:"flex",
            flexDirection:"column", 
            backgroundColor:"#282828",
            height:160,
            borderBottomWidth:1,
            borderBottomColor:"gray"
    },
        containerNoBoder:{
            display:"flex",
            flexDirection:"column",
            backgroundColor:"#282828",
            height:160
    },
        textHigh:
        {
            fontFamily:"Oswald",
            fontSize:21,
            color:"white"
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
            alignItems:"center",
            paddingTop:20,
            paddingBottom:10        
        },
        textRegionLow:
        {
            
            display:"flex",
            flexDirection:"column",
            paddingLeft:15,            
            height:45,
            overflow: "hidden"
        },
        textLow:
        {
            color:"white",
            fontFamily: 'Montserrat',
        },
        regionSeguidor:
        {
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:20    
        }

    });
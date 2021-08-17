import { hightWindow } from "../../../Constants";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create(
    {
        container: {            
            display:"flex",
            flexDirection:"column",
            justifyContent:"center", 
            backgroundColor:"#282828",
            height:hightWindow
        },
        header:
        {
            height:45,
            width:"100%",
            padding:10,
            display:"flex",
            flexDirection:"row",      
            overflow:"hidden",
            backgroundColor:"#1E1F1E"
        },
        TextHeader:
        {
            color:"white",
            fontFamily:'Oswald',
            width:"100%",
            textAlign:"center"       
        },
        alterHigh:
        {
            display:"flex",
            flexDirection:"column"                
        },    
        textMensagem:
        {
            fontFamily:"Montserrat",
            marginTop:10,
            marginBottom:10,
            textAlign:"center",
            color:"white"
        }
    }
 );
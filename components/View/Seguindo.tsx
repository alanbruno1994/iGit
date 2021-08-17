import React,{useState} from "react";
import { ScrollView, View,Text,StatusBar,TouchableOpacity,Image} from "react-native";
import MenuBotton from "../Menus/MenuBotton";
import { Ionicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { stylesUserSeguindoSeguidor } from "./shared/stylesUserSeguindoSeguidor";
import { AntDesign } from '@expo/vector-icons'; 

export default function User(props:any)
{
    let [userData,setUserData]:any=useState();

    const [loaded] = useFonts({//Aqui é usado para carregar uma fonte
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });
      
      if (!loaded) {
        return null;
      }


    function saveUser()
    {

    }

    return <>   
     <StatusBar barStyle="dark-content" backgroundColor="#1E1F1E" />
    <View style={stylesUserSeguindoSeguidor.container}>
        <ScrollView>
            <View style={stylesUserSeguindoSeguidor.areaContent}>
                <View style={stylesUserSeguindoSeguidor.header}>
                <TouchableOpacity onPress={_=>props.navigation.goBack()}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
                        <View><Text style={stylesUserSeguindoSeguidor.TextHashTag}>#{userData?.login}</Text></View>
                        <TouchableOpacity onPress={saveUser} style={stylesUserSeguindoSeguidor.exit}><Text style={stylesUserSeguindoSeguidor.textLow}>Salvar </Text><Ionicons name="exit-outline" size={24} color="green" /></TouchableOpacity>
                </View>
                <View style={stylesUserSeguindoSeguidor.areaImg}>
                        <View style={stylesUserSeguindoSeguidor.region1} />
                        <View style={stylesUserSeguindoSeguidor.region2} />
                    <View style={stylesUserSeguindoSeguidor.backImg}><Image  style={stylesUserSeguindoSeguidor.img} source={{uri:props.avatar_url}}></Image></View>
                    </View>
                    <View style={stylesUserSeguindoSeguidor.marcaRegion}><View style={stylesUserSeguindoSeguidor.marca}/><Text style={stylesUserSeguindoSeguidor.textHigh}>{props.name}</Text></View>
                    <View style={stylesUserSeguindoSeguidor.textRegionLow}>
                        <Text style={stylesUserSeguindoSeguidor.textLow}>{props.email? props.email:""}</Text>
                        <Text style={stylesUserSeguindoSeguidor.textLow}>{props.location? props.location:""}</Text>
                    </View>
                    <View style={stylesUserSeguindoSeguidor.regionDates}>
                        <TouchableOpacity onPress={_=>props.navigation.navigate('Seguidores')} style={stylesUserSeguindoSeguidor.dateRegion}><Text style={stylesUserSeguindoSeguidor.textHigh}>{props.followers}</Text><Text style={stylesUserSeguindoSeguidor.textLow}>Seguidores</Text></TouchableOpacity>
                        <TouchableOpacity onPress={_=>props.navigation.navigate('Seguindos')} style={stylesUserSeguindoSeguidor.dateRegion}><Text style={stylesUserSeguindoSeguidor.textHigh}>{props.following}</Text><Text style={stylesUserSeguindoSeguidor.textLow}>Seguindo</Text></TouchableOpacity>
                        <TouchableOpacity onPress={_=>props.navigation.navigate('Repos')} style={stylesUserSeguindoSeguidor.dateRegion}><Text style={stylesUserSeguindoSeguidor.textHigh}>{props.public_repos}</Text><Text style={stylesUserSeguindoSeguidor.textLow}>Repos</Text></TouchableOpacity>
                    </View>
                    <View style={stylesUserSeguindoSeguidor.marcaRegion2}><View style={stylesUserSeguindoSeguidor.marca}/><Text style={stylesUserSeguindoSeguidor.textHigh}>Bio</Text></View>
                    <View style={stylesUserSeguindoSeguidor.textRegionLow2}>
                        <Text style={stylesUserSeguindoSeguidor.textLow}>{props.bio ? props.bio:""}</Text>           
                    </View>
            
            </View>
        </ScrollView>     
    </View>
    <View style={stylesUserSeguindoSeguidor.areaMenu}>
                <MenuBotton codeSelect={4}/>
    </View>
    </>;
}



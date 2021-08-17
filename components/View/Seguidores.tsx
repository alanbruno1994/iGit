/*
    +Aqui é o componente que representa a tela que lista os seguidores
*/
import React,{useEffect,useState} from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView, LogBox, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { connect } from "react-redux";
import axios from 'axios';
import Seguindo_Seguidor from '../ItemList/Seguindo_Seguidor';
import MenuBotton from '../Menus/MenuBotton';
import { stylesUserSeguindoSeguidor } from './shared/stylesUserSeguindoSeguidor';
import { styles } from './shared/stylesSeguindosSeguidores';


export interface search
{
    login:string;
    avatar_url:string;  
}

let initalValues:search[]=[];

export interface SeguidoresInterface
{
    login:string;//Aqui é usado para indicar o username do usuário logado
    followers:number;//Aqui é usado para indicar quantidade pessoas que seguem o usuário logado 
    followers_url:string;////Aqui é usado para indicar a url que lista as pessoas que seguem o usuário logado 
    navigation:any;//usado para transitar entre as telas:any;//usado para transitar entre as telas
}

function Seguidores(props:SeguidoresInterface)
{    
    let [seguidores,setSeguidores]=useState(initalValues); 
    let [carregado, setCarregado]=useState(false);

    useEffect(function()
    {        
        axios.get("https://api.github.com/users/"+props.login+"/followers").then(e=>e.data).then(function(e:search[])
        {
            setSeguidores(e); setCarregado(true);
        });
        LogBox.ignoreAllLogs(true);
    },[]);

   

    function povoamento()
    {   
        let valor=[];
        for(let i=0;i<seguidores.length;i++)
        {
            if(i+1==seguidores.length)
                valor.push(<Seguindo_Seguidor seguidores={true} navigation={props.navigation} key={i} user={seguidores[i].login} foto={seguidores[i].avatar_url} borderButton={false}/>);
            else
                valor.push(<Seguindo_Seguidor seguidores={true} navigation={props.navigation} key={i} user={seguidores[i].login} foto={seguidores[i].avatar_url} borderButton={true}/>);
        }  

        return valor;      
    }

    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });
      
      if (!loaded) {
        return null;
      }
    return <>
               <StatusBar barStyle="dark-content" backgroundColor="#1E1F1E"/>
               <View style={styles.container}>
               <ScrollView>
                    <View style={styles.alterHigh}>
                        <View>
                            <View style={{display:"flex",flexDirection:"column",width:"100%"}}>
                                <View style={styles.header}>
                                <TouchableOpacity onPress={_=>props.navigation.goBack()}>
                                    <AntDesign name="arrowleft" size={24} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.TextHeader}>{props.followers} Seguidores</Text>         
                                </View> 
                            </View>
                            {carregado ? povoamento() : <Text style={styles.textMensagem}>Dados carregando...</Text>}
                        </View>
                       
                    </View>
                </ScrollView>
               </View>
               <View style={stylesUserSeguindoSeguidor.areaMenu}>
                    <MenuBotton codeSelect={3}/>
                </View>
          </>;
}

function mapStateToProps(state:any) {
    return {          
            login:state.users.login,
            followers:state.users.followers,
            followers_url:state.users.followers_url         
            }
}

function dispatchStateToProps(dispatch:any)
{
    return {}
}

export default Seguidores;
//export default connect(mapStateToProps,dispatchStateToProps)(Seguidores);


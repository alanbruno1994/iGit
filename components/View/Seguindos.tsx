/*
    +Aqui é o componente que representa a tela que listas as pessoas que se está seguindo
*/
import React,{useState,useEffect} from 'react';
import { View, Text, StatusBar, ScrollView, LogBox, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { connect } from "react-redux";
import { search } from './Seguidores';
import axios  from 'axios';
import Seguindo_Seguidor from '../ItemList/Seguindo_Seguidor';
import MenuBotton from '../Menus/MenuBotton';
import { stylesUserSeguindoSeguidor } from './shared/stylesUserSeguindoSeguidor';
import { styles } from './shared/stylesSeguindosSeguidores';


let initalValues:search[]=[];

export interface SeguindosInterface
{
    login:string;//Aqui é usado para indicar o username do usuário logado
    following:number;//Aqui é usado para indicar quantidade pessoas que o usuário logado segue
    following_url:string;////Aqui é usado para indicar a url que lista as pessoas que o usuário logado segue
    navigation:any;//usado para transitar entre as telas
}

function Seguindos(props:SeguindosInterface)
{
    
    let [seguindos,setSeguindos]=useState(initalValues);  
    let [carregado, setCarregado]=useState(false);

    useEffect(function()
    {    //Aqui irá puxar os usuários que o usuário logado
        axios.get("https://api.github.com/users/"+props.login+"/following").then(e=>e.data).then(function(e:search[])
        {
            setSeguindos(e); setCarregado(true);
           
        });
        LogBox.ignoreAllLogs(true);//Desativando qualquer mensagem de warning que aparece na tela
    },[]);

  
    function povoamento()
    {   
        let valor=[];
        for(let i=0;i<seguindos.length;i++)
        {
            if(i+1==seguindos.length)
                valor.push(<Seguindo_Seguidor seguidores={false} navigation={props.navigation} key={i} user={seguindos[i].login} foto={seguindos[i].avatar_url} borderButton={false}/>);
            else
                valor.push(<Seguindo_Seguidor seguidores={false} navigation={props.navigation} key={i} user={seguindos[i].login} foto={seguindos[i].avatar_url} borderButton={true}/>);
        }  

        return valor;      
    }

    const [loaded] = useFonts({//Carregando fontes
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
                                             <Text style={styles.TextHeader}>{props.following} Seguindo</Text>         
                                        </View> 
                                    </View>
                                    {carregado ? povoamento() : <Text style={styles.textMensagem}>Dados carregando...</Text>}
                                    <View style={{height:80,width:"100%"}}/>
                            </View>                        
                                                                                   
                        </View>
                    </ScrollView>
               </View>
               <View style={stylesUserSeguindoSeguidor.areaMenu}>
                    <MenuBotton navigation={props.navigation} codeSelect={4}/>
                </View>
          </>;
}

function mapStateToProps(state:any) {
    return {          
            login:state.users.login,
            following:state.users.following,
            following_url:state.users.following_url         
            }
}

function dispatchStateToProps(dispatch:any)
{
    return { }      
}



export default connect(mapStateToProps,dispatchStateToProps)(Seguindos);


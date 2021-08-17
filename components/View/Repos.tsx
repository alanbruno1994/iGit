/*
    +Aqui é o componente que representa a tela que lista os repositórios
*/
import React,{useEffect,useState} from "react";
import { Text, StatusBar, StyleSheet, View, Dimensions, TouchableOpacity, ScrollView, LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import { connect } from "react-redux";
import  axios  from 'axios';
import Repository from "../ItemList/Repository";
import MenuBotton from "../Menus/MenuBotton";
import { stylesUserSeguindoSeguidor } from "./shared/stylesUserSeguindoSeguidor";

const windowHeight = Dimensions.get('window').height;
export interface ReposSearch{
    name:string;//Aqui e o nome do repositório
    description:string;//Aqui e a descrição do repositório
    stargazers_count:number;//Aqui seria o chamado star
}

let initalValues:ReposSearch[]=[];

export interface ReposInterface
{
    login:string;//Aqui representa o username do usuário logado
    repos_url:string;//Aqui e a url dos repositórios do usuário logado
    public_repos:number;//Aqui e quantidade repositórios públicos do usuário logado
    navigation:any;//Aqui e usado para transitar entre as telas
}

function Repos(props:ReposInterface)
{
    let [repos,setRepos]=useState(initalValues);   
    let [carregado, setCarregado]=useState(false);

    function povoamento()
    {
        let valor=[];
        for(let i=0;i<repos.length;i++)
        {
            if(i+1==repos.length)
                valor.push(<Repository key={i} description={repos[i].description} name={repos[i].name} start={repos[i].stargazers_count} borderButton={false}/>);
            else
                valor.push(<Repository key={i} description={repos[i].description} name={repos[i].name} start={repos[i].stargazers_count}  borderButton={true}/>);
        }         
        return valor;
    }

    useEffect(function(){
        //Aqui puxa os repositórios públicos de um usuário logado
        axios.get("https://api.github.com/users/"+props.login+"/repos").then(e=>e.data).then(function(e:ReposSearch[]){
           setRepos(e); setCarregado(true);
        }
        );
       LogBox.ignoreAllLogs(true);
    },[]);

    const [loaded] = useFonts({//Aqui carrega as fontes
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });
      
      if (!loaded) {
        return null;
      }
    return<>
     <StatusBar barStyle="dark-content" backgroundColor="#1E1F1E"/>
     <View style={styles.container}>
     <ScrollView>
        <View style={styles.alterHigh}>  
            <View>
                <View style={{display:"flex",flexDirection:"column",width:"100%"}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={_=>props.navigation.goBack()}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity><Text style={styles.TextHeader}>{props.public_repos} Repositórios</Text>         
                    </View> 
                </View>
                {carregado ? povoamento() : <Text style={styles.textMensagem}>Dados carregando...</Text>}
            </View>          
        </View>
     </ScrollView>        
    </View>
    <View style={stylesUserSeguindoSeguidor.areaMenu}>
                <MenuBotton codeSelect={2}/>
    </View>
    </>;    
}

function mapStateToProps(state:any) {
    return {          
            login:state.users.login,
            repos_url:state.users.repos_url,
            public_repos:state.users.public_repos      
            }
}

function dispatchStateToProps(dispatch:any)
{
    return {}
}

export default Repos;


//export default connect(mapStateToProps,dispatchStateToProps)(Repos);

const styles = StyleSheet.create({
    container: { 
        height:windowHeight,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
         backgroundColor:"#282828"
    },
    header:{
        height:45,
        width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"row",      
        overflow:"hidden",
        backgroundColor:"#1E1F1E"
    },
    TextHeader:{
        color:"white",
        fontFamily:'Oswald',
        width:"100%",
        textAlign:"center"       
    },
    alterHigh:{
        display:"flex",
        flexDirection:"column",    
    },   
    textMensagem:{
        fontFamily:"Montserrat",
        marginTop:10,
        marginBottom:10,
        textAlign:"center",
        color:"white"
    }

});
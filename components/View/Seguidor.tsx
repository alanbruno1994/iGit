import React,{useEffect, useState} from "react";
import { ScrollView, View,Text,StatusBar,TouchableOpacity,Image, LogBox} from "react-native";
import MenuBotton from "../Menus/MenuBotton";
import { Ionicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { stylesUserSeguindoSeguidor } from "./shared/stylesUserSeguindoSeguidor";
import { AntDesign } from '@expo/vector-icons'; 
import { userUpdate } from "../../redux/actionCreators/userUpdate";
import { initialValues, statesUser } from "../../interfaces/statesUser";
import { connect } from "react-redux";
import axios from "axios";
import { saveUser } from "./shared/functionSaveUser";

function Seguidor(props:any)
{
    let [userData,setUserData]=useState(initialValues);

    useEffect(function()
    {   LogBox.ignoreAllLogs(true);
        const { user } = props.route.params;
        //Aqui vai puxar os dados do seguidor
        axios.get("https://api.github.com/users/"+user).then(e=>e.data).then(function(e:statesUser){
            setUserData(e);
        })           
    },[]);

    const [loaded] = useFonts({//Aqui é usado para carregar uma fonte
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });
      
      if (!loaded) {
        return null;
      }


    return <>   
     <StatusBar barStyle="dark-content" backgroundColor="#1E1F1E" />
    <View style={stylesUserSeguindoSeguidor.container}>
        <ScrollView>
            <View style={stylesUserSeguindoSeguidor.areaContent}>
                <View style={stylesUserSeguindoSeguidor.header}>
                <TouchableOpacity onPress={_=>props.navigation.goBack()}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
                        <View><Text style={stylesUserSeguindoSeguidor.TextHashTag}>#{userData.login}</Text></View>
                        <TouchableOpacity onPress={_=>saveUser(props,userData)} style={stylesUserSeguindoSeguidor.exit}><Text style={stylesUserSeguindoSeguidor.textLow}>Salvar </Text><Ionicons name="exit-outline" size={24} color="green" /></TouchableOpacity>
                </View>
                <View style={stylesUserSeguindoSeguidor.areaImg}>
                        <View style={stylesUserSeguindoSeguidor.region1} />
                        <View style={stylesUserSeguindoSeguidor.region2} />
                    <View style={stylesUserSeguindoSeguidor.backImg}><Image  style={stylesUserSeguindoSeguidor.img} source={{uri:userData.avatar_url}}></Image></View>
                    </View>
                    <View style={stylesUserSeguindoSeguidor.marcaRegion}><View style={stylesUserSeguindoSeguidor.marca}/><Text style={stylesUserSeguindoSeguidor.textHigh}>{userData.name}</Text></View>
                    <View style={stylesUserSeguindoSeguidor.textRegionLow}>
                        <Text style={stylesUserSeguindoSeguidor.textLow}>{userData.email? userData.email:"Não informado!"}</Text>
                        <Text style={stylesUserSeguindoSeguidor.textLow}>{userData.location? userData.location:"Não informado!"}</Text>
                    </View>
                    <View style={stylesUserSeguindoSeguidor.regionDates}>
                        <TouchableOpacity onPress={_=>props.navigation.navigate('Seguidores')} style={stylesUserSeguindoSeguidor.dateRegion}><Text style={stylesUserSeguindoSeguidor.textHigh}>{userData.followers}</Text><Text style={stylesUserSeguindoSeguidor.textLow}>Seguidores</Text></TouchableOpacity>
                        <TouchableOpacity onPress={_=>props.navigation.navigate('Seguindos')} style={stylesUserSeguindoSeguidor.dateRegion}><Text style={stylesUserSeguindoSeguidor.textHigh}>{userData.following}</Text><Text style={stylesUserSeguindoSeguidor.textLow}>Seguindo</Text></TouchableOpacity>
                        <TouchableOpacity onPress={_=>props.navigation.navigate('Repos')} style={stylesUserSeguindoSeguidor.dateRegion}><Text style={stylesUserSeguindoSeguidor.textHigh}>{userData.public_repos}</Text><Text style={stylesUserSeguindoSeguidor.textLow}>Repos</Text></TouchableOpacity>
                    </View>
                    <View style={stylesUserSeguindoSeguidor.marcaRegion2}><View style={stylesUserSeguindoSeguidor.marca}/><Text style={stylesUserSeguindoSeguidor.textHigh}>Bio</Text></View>
                    <View style={stylesUserSeguindoSeguidor.textRegionLow2}>
                        <Text style={stylesUserSeguindoSeguidor.textLow}>{userData.bio ? userData.bio:"Não informado!"}</Text>           
                    </View>
            
            </View>
        </ScrollView>     
    </View>
    <View style={stylesUserSeguindoSeguidor.areaMenu}>
                <MenuBotton navigation={props.navigation} codeSelect={3}/>
    </View>
    </>;
}

function mapStateToProps(state:any) {
    return {                
            login:state.users.login                  
            }
}

function dispatchStateToProps(dispatch:any)
{
    return {
        alterData(dado:statesUser)
        {
            const action=userUpdate(dado);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,dispatchStateToProps)(Seguidor);


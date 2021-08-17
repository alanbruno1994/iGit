import React, { useEffect } from "react";
import { ScrollView, View, Text,StatusBar,TouchableOpacity,Image } from "react-native";
import MenuBotton from "../Menus/MenuBotton";
import { Ionicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { stylesUserSeguindoSeguidor } from "./shared/stylesUserSeguindoSeguidor";
import { userUpdate } from "../../redux/actionCreators/userUpdate";
import { initialValues, statesUser } from "../../interfaces/statesUser";
import { connect } from "react-redux";



function User(props:any)
{

    useEffect(function(){
        const unsubscribe = props.navigation.addListener('beforeRemove', (e:any) => { //Aqui é usado para prevenir que após logado volte a tela de login           
            e.preventDefault();          
      });         
      return unsubscribe;

    }, []);

    const [loaded] = useFonts({//Aqui é usado para carregar uma fonte
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
        Oswald: require('../../assets/fonts/Oswald-Regular.ttf')
      });
      
      if (!loaded) {
        return null;
      }


    function exitUser()
    {
        props.navigation.removeListener('beforeRemove');//Aqui deixa de previnir que volte a tela de login       
        props.alterData(initialValues);        
        props.navigation.navigate('Index'); //Aqui chama a tela de logim, representada pelo componente Index.tsx  
    }

  
  

    return <>   
     <StatusBar barStyle="dark-content" backgroundColor="#1E1F1E" />
    <View style={stylesUserSeguindoSeguidor.container}>
        <ScrollView>
            <View style={stylesUserSeguindoSeguidor.areaContent}>
                <View style={stylesUserSeguindoSeguidor.header}>
                    <View><Text style={stylesUserSeguindoSeguidor.TextHashTag}>#{props.login}</Text></View>
                    <TouchableOpacity onPress={exitUser} style={stylesUserSeguindoSeguidor.exit}><Text style={stylesUserSeguindoSeguidor.textLow}>Sair </Text><Ionicons name="exit-outline" size={24} color="#8F2C2C" /></TouchableOpacity>
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
                <MenuBotton navigation={props.navigation} codeSelect={1}/>
    </View>
    </>;
}

function mapStateToProps(state:any) {
    return {            
            login:state.users.login,
            bio:state.users.bio,
            name:state.users.name,
            email:state.users.email,
            following:state.users.following,
            followers:state.users.followers,
            public_repos:state.users.public_repos,
            avatar_url:state.users.avatar_url,
            location:state.users.location,
            save:state.users.save,
            dataSystem:state.users
            }
}

function dispatchStateToProps(dispatch:any)
{
    return {
        alterData(dado:statesUser)
        {
            const action=userUpdate(dado);//aqui e uma função Action Creator que está no arquivo numeros.ts
            dispatch(action);//aqui faz um dispatch onde podera ou nao alterar o estado
        }
    }
}

export default connect(mapStateToProps,dispatchStateToProps)(User);



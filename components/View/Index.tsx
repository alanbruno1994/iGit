import React,{useState,useEffect} from "react";
import { hightWindow } from "../../Constants";
import { Text, StatusBar,  StyleSheet,View, TextInput,TouchableOpacity, LogBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { consultCreator } from "../../redux/actionCreators/consultCreator";
import { userUpdate } from "../../redux/actionCreators/userUpdate";
import { connect } from "react-redux";
import { statesUser } from "../../interfaces/statesUser";
import { getData } from "../../data";

function Index(props:any)
{
    let [user,setUser]=useState("");
    let [campo,setCampo]=useState(false);

    function nextPage()
    {
        if(user.length>0){
            props.consultUser(user);
        }else
        {
            setCampo(true);
        }      
    }

    useEffect(function(){                
        if(props.login){
            props.navigation.navigate('User'); //Aqui chama tela representada por User.tsx           
        }
    }
    ,[props]);

    useEffect(() => {
        LogBox.ignoreAllLogs(true); 
        let recover:any=getData();
        if(recover!=null){
            props.previousUse(recover);
        }
    }, [])

    return <>
         <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#282828" />
                <View style={styles.campoInput}>
                        <AntDesign name="github" size={120} color="#FDCF09" />      
                        <View style={{width:"100%"}}>             
                            <TextInput style={styles.textInputStyle} placeholder="Usuário" value={user} onChangeText={text=>{setCampo(false); setUser(text);}}/>                                    
                            <Text style={campo ? styles.textErro: {display:"none"}}>Campo Obrigatório!</Text>
                        </View> 
                        <TouchableOpacity style={styles.buttonStyle} onPress={nextPage}>
                            <Text>ENTRAR</Text><AntDesign name="arrowright" size={24} color="black" />                       
                        </TouchableOpacity>              
                </View>
        </View>   
    </>
}

const styles = StyleSheet.create({
    container: { 
        height:hightWindow,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center", 
        backgroundColor:"#282828"
    },
    campoInput: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginLeft:10,
        marginRight:10
    },
    textInputStyle:{ 
        width:"100%", 
        height:40,
        backgroundColor:"white",
        marginTop:30,
        borderRadius:10,
        paddingLeft:5
    },
    buttonStyle:{
        display:"flex",
        flexDirection:"row",
        height:40,
        backgroundColor:"#FDCF09",
        width:"100%",
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:10,
        marginTop:15,
        position:"relative"
    },    
    textErro:{
        top:40,
        right:10,
        position:"absolute",
        color:"red",
        textAlign:"center",
        display:"flex"
    }
  });

function mapStateToProps(state:any) {
    return {          
            login:state.users.login,           
            }
}

function dispatchStateToProps(dispatch:any)
{
    return {      
        consultUser(login:string)
        {
            const action=consultCreator(login);
            dispatch(action);
        },
        previousUse(dado:statesUser)
        {
            const action=userUpdate(dado);
            dispatch(action);
        }
   }
}

  export default connect(mapStateToProps,dispatchStateToProps)(Index);
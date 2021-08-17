import { Alert } from "react-native";
import { statesUser } from "../../../interfaces/statesUser";

export function saveUser(props:any,userData:statesUser)//Aqui será chamado quando o usuário aperta no botão de salvar
    {
       // alert("Este seguidor se tornou o usuário do sistema!"); 
       Alert.alert(
        "Trocando o Usuário do Sistema!",
        "Agora "+userData.login+" e o novo usuário!",
        [          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
             
        props.alterData(userData);
    } 

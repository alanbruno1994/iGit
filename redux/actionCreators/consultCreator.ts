import axios from "axios";
export function consultCreator(user:string)
{
    return (dispatch:any)=>{
        axios.get("https://api.github.com/users/"+user).then(e=>e.data).then(//puxando da api dados de um determinado usuário que foi logado
            resp=>{ return dispatch({                
                type: 0,//altered data from user
                payload:resp
                })  } 
        
        )
    }
}
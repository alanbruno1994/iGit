//A função userReducer irá receber os dados para atualizar o estado das variaveis da aplicação
//que serão compartilhadas entre os demais componentes 
import { actionInterface } from '../../interfaces/actionInterface';
import { initialValues, statesUser } from '../../interfaces/statesUser';
import { storeData } from './../../data';

export default function userReducer(state:statesUser=initialValues,action:actionInterface){

    switch(action.type){   
        case 0:         
        storeData(action.payload);       
        return {...state,//clona todo estado anterior
            login:action.payload.login,//daqui para baixo altera
            bio:action.payload.bio,
            name:action.payload.name,
            email:action.payload.email,
            avatar_url:action.payload.avatar_url,  
            location:action.payload.location, 
            public_repos:action.payload.public_repos, 
            repos_url:action.payload.repos_url, 
            followers:action.payload.followers,
            following:action.payload.following,
            following_url:action.payload.following_url,
            followers_url:action.payload.followers_url,
            organizations_url:action.payload.organizations_url        
        }        
        default:
            return state;
    }
}
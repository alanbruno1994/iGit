import { statesUser } from "../../interfaces/statesUser";

export function userUpdate(user:statesUser)//usado para atualizar o estado das variáveis da aplicação
{
    return{
        type:0,
        payload:user
    }
}
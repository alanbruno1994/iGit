import {AsyncStorage} from 'react-native'
import { statesUser } from './interfaces/statesUser'


export const storeData = async (value:statesUser) => {//salvar dados
    try {    
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('gitKey', jsonValue)
    } catch (e) {
     
    } 
}
export const getData = async () => {//recuperar dados
    try {
      const jsonValue = await AsyncStorage.getItem('gitKey')      
      let valor= jsonValue != null ? JSON.parse(jsonValue) : null;      
      return valor;
    } catch(e) {
      // error reading value
    }
  }

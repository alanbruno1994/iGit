import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import User from './components/View/User';
import Seguidor from './components/View/Seguidor';
import Seguindo from './components/View/Seguindo';
import Index from './components/View/Index';
import Repos from './components/View/Repos';
import Seguindos from './components/View/Seguindos';
import Seguidores from './components/View/Seguidores';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Seguidores" component={Seguidores} /> 
          <Stack.Screen name="Seguindos" component={Seguindos} />  
          <Stack.Screen name="Repos" component={Repos} /> 
          <Stack.Screen name="Index" component={Index} />  
          <Stack.Screen name="Seguindo" component={Seguindo} />  
          <Stack.Screen name="Seguidor" component={Seguidor} />  
          <Stack.Screen name="User" component={User} />  
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


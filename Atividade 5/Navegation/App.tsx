import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaView from './src/views/ListaView';
import AdicionarItemView from './src/views/AdicionarItemView';
import { RootStackParamList } from './src/types/navigation';

// Cria a pilha de navegação com as nossas tipagens
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen 
          name="Lista" 
          component={ListaView} 
          options={{ title: 'Catálogo de Itens' }} 
        />
        <Stack.Screen 
          name="Adicionar" 
          component={AdicionarItemView} 
          options={{ title: 'Novo Item' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaView from '../views/ListaView';
import AdicionarItemView from '../views/AdicionarItemView';

const Stack = createNativeStackNavigator();

export function CatalogoStack() {
  return (
    <Stack.Navigator>
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
  );
}
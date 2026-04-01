import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { CatalogoStack } from './CatalogoStack';
import SobreView from '../views/SobreView';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="CatalogoTab" 
        component={CatalogoStack} 
        options={{ 
          tabBarLabel: 'Catálogo', 
          tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} /> 
        }} 
      />
      <Tab.Screen 
        name="SobreTab" 
        component={SobreView} 
        options={{ 
          tabBarLabel: 'Sobre', 
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} /> 
        }} 
      />
    </Tab.Navigator>
  );
}
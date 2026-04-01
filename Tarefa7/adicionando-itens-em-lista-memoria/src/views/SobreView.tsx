// src/views/SobreView.tsx
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from '../styles/estilosGlobais';

export default function SobreView() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemLista}>
        <Text style={styles.textoItem}>Aplicativo de Catálogo</Text>
        <Text style={styles.textoDescricao}>
          Este aplicativo foi desenvolvido para a aula de Programação para Dispositivos Móveis.
          Ele usa a arquitetura MVVM e navegação Stack!
        </Text>
      </View>
    </SafeAreaView>
  );
}
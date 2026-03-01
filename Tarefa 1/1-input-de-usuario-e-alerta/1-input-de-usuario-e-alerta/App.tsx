import React, { useState } from 'react';
import { TextInput, StyleSheet, SafeAreaView, Text, Button, View, Alert } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const handlePress = () => {
    if (nome.trim() === '') {
      Alert.alert("Nada digitado");
    } else {
      Alert.alert(`Ola: ${nome}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome aqui"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.resultado}>Sua entrada: {nome}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Clique Aqui"
          onPress={handlePress} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
    height: 40,
    borderRadius: 5
  },
  resultado: {
    marginBottom: 20,
    color: '#555'
  },
  buttonContainer: {
    marginTop: 10
  }
});
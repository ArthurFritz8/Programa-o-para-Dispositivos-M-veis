import React from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions, Text } from 'react-native';

const img1 = require('./assets/AlHilal.png');
const img2 = require('./assets/alnassr.png');
const img3 = require('./assets/Botafogo.png');
const img4 = require('./assets/Chaves.png');
const img5 = require('./assets/Fluminense.png');
const img6 = require('./assets/Vasco.png');

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Galeria de Times</Text>

        <Image source={img1} style={styles.logo} />
        <Image source={img2} style={styles.logo} />
        <Image source={img3} style={styles.logo} />
        <Image source={img4} style={styles.logo} />
        <Image source={img5} style={styles.logo} />
        <Image source={img6} style={styles.logo} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  logo: {
    width: windowWidth * 0.8,
    height: 200,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: '#fff', 
    resizeMode: 'contain',
  },
});
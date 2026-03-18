import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    marginTop: 30,
    backgroundColor: '#FFFFFF'
  },
  inputContainer: { 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5 
  },
  itemLista: { 
    padding: 15, 
    backgroundColor: '#f9f9f9', 
    marginBottom: 10, 
    borderRadius: 8,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  textoItem: { 
    fontSize: 16, 
    fontWeight: 'bold',
    fontFamily: Platform.select({
      ios: "San Francisco",
      android: "Roboto",
    })
  },
  textoDescricao: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
    fontFamily: Platform.select({
      ios: "San Francisco",
      android: "Roboto",
    })
  }
});
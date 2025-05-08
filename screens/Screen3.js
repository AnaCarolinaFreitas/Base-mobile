import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store'; // Importação do SecureStore
import HorizontalItem from '../components/HorizontalItem';
import { horizontalData } from '../data/screen3Data';

export default function SecureStorageScreen() {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
      const loadStoredValue = async () => {
          const storedValue = await SecureStore.getItemAsync("secureStorageKey");
          if (storedValue) {
              setStoredValue(storedValue);
          }
      };
      loadStoredValue();
  }, []);

  const handleSave = async () => {
      await SecureStore.setItemAsync("secureStorageKey", inputValue);
      setStoredValue(inputValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.searchBar} placeholder="Buscar..." />
        <View style={styles.profileCircle} />
      </View>

      <View style={styles.horizontalList}>
        <FlatList
          data={horizontalData}
          renderItem={({ item }) => <HorizontalItem imageUrl={item.imageUrl} profile={item.profile} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.userCircle} />
          <Text style={styles.cardTitle}>Nome de Usuário</Text>
        </View>
        <View style={styles.media} />
        <View style={styles.cardFooter}>
          <View style={styles.coments}>
            <TextInput
              style={styles.input}
              placeholder="Comentar..."
              value={inputValue}
              onChangeText={setInputValue}
            />
            <TouchableOpacity style={styles.sendCircle} onPress={handleSave}></TouchableOpacity>
          </View>
          <View style={styles.persistence}>
            <Text style={styles.text}>Valor sem persistência: {inputValue}</Text>
            <Text style={styles.text}>Valor com persistência: {storedValue}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 30,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 16,
    paddingHorizontal: 12,
    marginRight: 10,
    height: 40,
  },
  profileCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  horizontalList: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D1D5DB',
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  media: {
    height: 150,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coments: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 40,
  },
  sendCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#000',
    borderRadius: 16,
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginVertical: 10,
},
persistence: {
    backgroundColor: "#F3F4F6",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
},
text: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
},
  footerBar: {
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
    marginTop: 'auto',
  },
});
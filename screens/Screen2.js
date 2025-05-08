import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import InfoCard from '../components/InfoCard';
import { autores, livros } from '../data/emojis';

export default function FlatListExemplo() {
    const renderItem = ({ item }) => (
        <View style={styles.itemBox}>
            <InfoCard title={item.nome} description={item.descricao} />
        </View>
    );

    return (
      <ScrollView style={styles.container}>
      <Text style={styles.header}>📜 Lista de Autores e Livros</Text>
      <Text style={styles.subHeader}>Baseado nos livros que li</Text>

      <View style={styles.box}>
        <Text style={{ color: 'white' }}><Text style={styles.bold}>Autores:</Text> são as mentes criativas por trás das histórias que amamos.</Text>
        <Text style={{ color: 'white' }}><Text style={styles.bold}>Livros:</Text> são portais para mundos desconhecidos e aventuras inesquecíveis.</Text>
      </View>

      <Text style={styles.sectionHeader}>👩✍🏼 Ecritoras</Text>
      <FlatList
        data={autores}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionHeader}>📚 Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item, index) => 'Livro-' + index}
        renderItem={({ item }) => <InfoCard title={item.nome} description={item.descricao} />}
        contentContainerStyle={styles.verticalList}
      />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 16,
  },
  box: {
    backgroundColor: 'gray',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  }, 
  itemBox: {
    marginRight: 15,
    borderRadius: 15,
    width: 150,
    alignItems: "center",
 },
  verticalList: {
    gap: 10,
    paddingBottom: 40,
    marginBottom: 80,
  },
});

import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardFavorito from "../components/CardFavorito";

export default function Screen1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="flower-outline" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.profileIcon} />
      </View>

      <View style={styles.boxPreta}>
        <CardFavorito texto="Tarefa 1" favorito={false} />
        <CardFavorito texto="Tarefa 2" favorito={true} />
        <TouchableOpacity style={styles.setaButton}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.lista}>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.linha}>
            <Image
              source={require("../assets/avatar.png")}
              style={styles.imagem}
            />
            <View style={styles.botoes}>
              <Ionicons name="remove" size={20} style={styles.botaoIcone} />
              <Ionicons name="add" size={20} style={styles.botaoIcone} />
              <Ionicons name="ellipsis-horizontal" size={20} style={styles.botaoIcone} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.boxProfile}>
        <Text style={styles.linkPerfil} onPress={() => navigation.navigate('Screen4')}>
          Acesse o perfil!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F4F6",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 30,
  },
  profileIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    borderRadius: 15,
  },
  boxPreta: {
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  setaButton: {
    alignItems: "center",
    marginTop: 10,
  },
  lista: {
    gap: 16,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagem: {
    width: 32,
    height: 32,
    backgroundColor: "#CBD5E1",
    borderRadius: 6,
  },
  botoes: {
    flexDirection: "row",
    gap: 12,
  },
  botaoIcone: {
    backgroundColor: "#E5E7EB",
    padding: 6,
    borderRadius: 8,
  },
  boxProfile: {
    backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 12,
    padding: 16,
    marginTop: 30,
  },
  linkPerfil: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
    textAlign: "center",
  },
});
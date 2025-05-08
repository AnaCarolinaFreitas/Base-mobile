import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function CardFavorito({ texto, favorito }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="refresh" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.texto}>{texto}</Text>
      <FontAwesome
        name={favorito ? "heart" : "heart-o"}
        size={20}
        color={favorito ? "red" : "gray"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  iconButton: {
    backgroundColor: "#CBD5E1",
    borderRadius: 8,
    padding: 6,
  },
  texto: {
    flex: 1,
    marginHorizontal: 10,
  },
});
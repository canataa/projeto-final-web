
import { withLayoutContext } from "expo-router";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function SobreMim() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sobre mim</Text>
      </View>

      {/* SCROLL */}
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.card}>
          <Text style={styles.title}>👋 Olá!</Text>
          <Text style={styles.text}>
            Meu nome é <Text style={styles.highlight}>Vitor</Text> e sou o desenvolvedor deste aplicativo.
          </Text>

          <Text style={styles.text}>
           Faço o segundo ano do ensino medio, cursando Tecnico em Informatica na ETEC professor Milton Gazzetti, no meu tempo livre gosto de jogar e de treinar
          </Text>

          <Text style={styles.text}>
            Este aplicativo foi criado para que as pessoas entendam o que é Hardware e a importancia dele na nossa sociedade atual, alem de
             permitir que qualquer pessoa descubra a compatibilidade entre o seu PC e os jogos que deseja jogar, de forma rápida e simples.
          </Text>

       

    
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A2A",
  },

  header: {
    height: 90,
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 130, 252, 0.4)",
  },

  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  scroll: {
    padding: 20,
  },

  card: {
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#0A0A2A",
  },

  text: {
    fontSize: 15,
    marginBottom: 10,
    color: "#1A1A1A",
  },

  highlight: {
    color: "#1A73E8",
    fontWeight: "bold",
  },
});
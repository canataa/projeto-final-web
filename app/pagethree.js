import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SobreMim() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sobre mim</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        
       
        <View style={styles.profileCard}>
          <Image 
            source={{ uri: "" }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Vitor</Text>
          <Text style={styles.profileSub}>
            Desenvolvedor do aplicativo
          </Text>
        </View>

        {/* CARTÃO PRINCIPAL */}
        <View style={styles.card}>
          <Text style={styles.title}>👋 Olá!</Text>

          <Text style={styles.text}>
            Meu nome é <Text style={styles.highlight}>Vitor</Text> e atualmente estou no 2° ano do ensino médio,
            cursando Técnico em Informática na ETEC Professor Milton Gazzetti.
          </Text>

          <Text style={styles.text}>
            No meu tempo livre gosto de <Text style={styles.highlight}>jogar</Text>,{" "}
            <Text style={styles.highlight}>treinar</Text> e aprender mais sobre tecnologia.
          </Text>

          <Text style={styles.text}>
            Desenvolvi este aplicativo para ajudar as pessoas a entenderem melhor o mundo do hardware
            e também para facilitar a descoberta da compatibilidade entre seu PC e os jogos que desejam jogar.
          </Text>
        </View>

        {/* LINHA DO TEMPO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📘 Minha jornada</Text>

          <View style={styles.timelineItem}>
            <Ionicons name="school" size={25} color="#1A73E8" />
            <Text style={styles.timelineText}>
              Estudante de Técnico em Informática na ETEC.
            </Text>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="code-slash" size={25} color="#1A73E8" />
            <Text style={styles.timelineText}>
              Aprendendo desenvolvimento mobile e web.
            </Text>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="game-controller" size={25} color="#1A73E8" />
            <Text style={styles.timelineText}>
              Apaixonado por jogos e tecnologia.
            </Text>
          </View>
        </View>

        {/* MOTIVAÇÃO */}
        <View style={styles.card}>
          <Text style={styles.title}>🚀 Por que criei este app?</Text>
          <Text style={styles.text}>
            Sempre gostei de montar computadores e entender como tudo funciona.  
            Por isso, criei este aplicativo para tornar esse processo mais acessível e simples
            para qualquer pessoa.
          </Text>
        </View>

        {/* RODAPÉ */}
        <Text style={styles.footerText}>
          Desenvolvido com ❤️ por Vitor
        </Text>

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
    paddingBottom: 50,
  },

  profileCard: {
    alignItems: "center",
    marginBottom: 25,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#1A73E8",
  },

  profileName: {
    color: "white",
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold",
  },

  profileSub: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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

  section: {
    marginBottom: 25,
    backgroundColor: "#EFEFEF",
    padding: 20,
    borderRadius: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#0A0A2A",
  },

  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },

  timelineText: {
    fontSize: 15,
    color: "#1A1A1A",
    flexShrink: 1,
  },

  footerText: {
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    fontSize: 13,
  },
});

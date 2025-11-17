import { withLayoutContext } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


const gpuNivel = {
  "GT 710": 5,
  "GT 1030": 15,
  "GTX 750 Ti": 18,
  "GTX 960": 30,
  "GTX 1050": 35,
  "GTX 1050 Ti": 38,
  "GTX 1650": 45,
  "RTX 2060": 60,
  "RTX 3060": 70,
  "RTX 4060": 78
};


const jogosRequisitos = {
  "stardew valley": 5,
  "hotline miami": 5,
  "terraria": 5,
  "plants vs zombies": 5,
  "castle crashers": 5,

  "fortnite (modo desempenho)": 15,
  "valorant": 10,
  "league of legends": 12,
  "dota 2": 12,
  "team fortress 2": 12,

  "gta v": 25,
  "rocket league": 22,
  "apex legends": 28,
  "overwatch 2": 26,
  "rust": 30,

  "red dead redemption 2": 55,
  "hogwarts legacy": 60,
  "cyberpunk 2077": 65,
  "ark survival evolved": 50,
  "elden ring": 55
};


export default function App() {
  const [gpu, setGpu] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [jogo, setJogo] = useState("");
  const [resultado, setResultado] = useState("");

  function verificar() {
    const jogoLower = jogo.toLowerCase();

    if (!jogosRequisitos[jogoLower]) {
      setResultado("Jogo não encontrado.");
      return;
    }

    if (!gpuNivel[gpu]) {
      setResultado("GPU não encontrada no banco.");
      return;
    }

    const nivelGpu = gpuNivel[gpu];
    const nivelJogo = jogosRequisitos[jogoLower];

    if (nivelGpu >= nivelJogo) {
      setResultado("RODA ✓");
    } else {
      setResultado("NÃO RODA ✗");
    }
  }

  return (
    <View style={styles.container}>
      
            
      <Text style={styles.title}>Verificar compatibilidade</Text>

      <TextInput
        style={styles.input}
        placeholder="Placa de Vídeo (ex: GTX 1050 Ti)"
        onChangeText={setGpu}
      />

      <TextInput
        style={styles.input}
        placeholder="Processador (não usado ainda)"
        onChangeText={setCpu}
      />

      <TextInput
        style={styles.input}
        placeholder="Memória RAM (ex: 8GB)"
        onChangeText={setRam}
      />

      <TextInput
        style={styles.input}
        placeholder="Jogo (ex: Fortnite)"
        onChangeText={setJogo}
      />

      <TouchableOpacity style={styles.button} onPress={verificar}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(23, 14, 92)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  
  title: {
    color: "#fff",
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "monospace"
  },
  input: {
    width: "90%",
    backgroundColor: "#4d4949ff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    color: "#fff"
  },
  button: {
    backgroundColor: "#0af",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "60%",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  result: {
    color: "#fff",
    fontSize: 24,
    marginTop: 20
  }
});

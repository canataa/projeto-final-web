import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Image, Animated, Pressable } from "react-native";
export default function Inicio() {
  const [texto, setTexto] = useState("");

  // Criar animações individuais para cada quadrado
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const scale4 = useRef(new Animated.Value(1)).current;

  const animate = (anim, to) => {
    Animated.spring(anim, {
      toValue: to,
      useNativeDriver: true,
      friction: 4,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

      {/* Caixa de texto principal */}
      <View style={styles.content}>
        <View style={styles.caixa}>
          <Text style={styles.titulo}>Bem vindo</Text>
          <Text style={[styles.textocaixa]} >
            Este aplicativo fala sobre Hardware e seus componentes, o que é hardware?</Text>
            <Text style={[styles.textocaixa]} >
            Hardware é a parte física do computador, ou seja, tudo aquilo que você pode tocar. São as peças 
            como o monitor, o teclado, o mouse, o processador, a memória e a placa-mãe, igual esses exemplos abaixo.</Text>
          
        </View>
      </View>

      {/* Quadrado 1 */}
      <Pressable
        onPressIn={() => animate(scale1, 1.1)}
        onPressOut={() => animate(scale1, 1)}
      >
        <Animated.View style={[styles.hard, { transform: [{ scale: scale1 }] }]}>
<Image source={require("../assets/placa_de_video.png")} 
 style={styles.imagem}
/>

          <Text style={styles.input}>Placa De Vídeo </Text>
        </Animated.View>
      </Pressable>

      {/* Quadrado 2 */}
      <Pressable
        onPressIn={() => animate(scale2, 1.1)}
        onPressOut={() => animate(scale2, 1)}
      >
        <Animated.View style={[styles.hard2, { transform: [{ scale: scale2 }] }]}>
         <Image source={require("../assets/placa_mae.png")} 
 style={styles.imagem}
/>
          <Text style={styles.input2}>Placa Mãe </Text>
        </Animated.View>
      </Pressable>

      {/* Quadrado 3 */}
      <Pressable
        onPressIn={() => animate(scale3, 1.1)}
        onPressOut={() => animate(scale3, 1)}
      >
        <Animated.View style={[styles.hard3, { transform: [{ scale: scale3 }] }]}>
          <Image
            source={{ uri: "https://cdn.awsli.com.br/2500x2500/2508/2508057/produto/205993563/1-lvjtrr.jpg" }}
            style={styles.imagem}
          />
          <Text style={styles.input3}>Processador </Text>
        </Animated.View>
      </Pressable>

      {/* Quadrado 4 */}
      <Pressable
        onPressIn={() => animate(scale4, 1.1)}
        onPressOut={() => animate(scale4, 1)}
      >
        <Animated.View style={[styles.hard4, { transform: [{ scale: scale4 }] }]}>
          <Image
            source={{ uri: "https://img.olx.com.br/images/37/374598577163702.jpg" }}
            style={styles.imagem}
          />
          <Text style={styles.input4}>Mouse</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(11, 5, 58)",
  },

  header: {
    height: 90,
    backgroundColor: "rgb(0, 0, 0)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 130, 252, 0.4)",
  },

  headerText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 2,
    textShadowColor: "rgba(0, 130, 252, 0.7)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  caixa: {
    position: "absolute",
    width: 550,
    minHeight: 260,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",

    // NOVO ESTILO
    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 7 },
    shadowRadius: 18,
    elevation: 15,
    marginTop: -550,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "white",
    marginBottom: 15,

    // brilho leve
    textShadowColor: "rgba(0, 130, 252, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },

  textocaixa: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "white",
    textAlign: "center",
    width: "90%",
    marginBottom: 10,
    lineHeight: 22,
  },

  hard: {
    width: 240,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 22,
    padding: 12,
    left: 20,
    alignItems: "center",
   

    // melhoria visual
    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 7 },
    shadowRadius: 20,
    elevation: 15,

    marginTop: -580,
    overflow: "hidden",
  },

  hard2: {
    width: 240,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 22,
    padding: 12,
    left: 330,
    alignItems: "center",

    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 7 },
    shadowRadius: 20,
    elevation: 15,

    marginTop: -580,
    overflow: "hidden",
  },

  hard3: {
    width: 240,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 22,
    padding: 12,
    left: 20,
    alignItems: "center",

    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 7 },
    shadowRadius: 20,
    elevation: 15,

    marginTop: -290,
    overflow: "hidden",
  },

  hard4: {
    width: 240,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 22,
    padding: 12,
    left: 330,
    alignItems: "center",

    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 7 },
    shadowRadius: 20,
    elevation: 15,

    marginTop: -290,
    overflow: "hidden",
  },

  imagem: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 10,

    // efeito de brilho
    shadowColor: "rgba(0, 130, 252, 0.9)",
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },

  input: {
    width: "90%",
    height: 32,
    backgroundColor: "rgba(0, 132, 255, 0.15)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
    fontSize: 14,
    paddingTop: 6,
  },

  input2: {
    width: "90%",
    height: 32,
    backgroundColor: "rgba(0, 132, 255, 0.15)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
    fontSize: 14,
    paddingTop: 6,
  },

  input3: {
    width: "90%",
    height: 32,
    backgroundColor: "rgba(0, 132, 255, 0.15)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
    fontSize: 14,
    paddingTop: 6,
  },

  input4: {
    width: "90%",
    height: 32,
    backgroundColor: "rgba(0, 132, 255, 0.15)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
    fontSize: 14,
    paddingTop: 6,
  },
});




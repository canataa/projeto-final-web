import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export default function Inicio() {
  const { width } = useWindowDimensions();

  const createFlipAnimation = () => ({
    animatedValue: new Animated.Value(0),
    isFlipped: false,
  });

  const cards = useRef([
    createFlipAnimation(),
    createFlipAnimation(),
    createFlipAnimation(),
    createFlipAnimation(),
  ]).current;

  const flipCard = (card) => {
    const toValue = card.isFlipped ? 0 : 180;

    Animated.timing(card.animatedValue, {
      toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();

    card.isFlipped = !card.isFlipped;
  };

  const frontImages = [
    require("../assets/placa_de_video.png"),
    require("../assets/placa_mae.png"),
    require("../assets/processador.png"),
    require("../assets/memoria.png"),
  ];

  const frontTitles = [
    "Placa de Vídeo",
    "Placa Mãe",
    "Processador AMD",
    "Memoria Ram",
  ];

  const backTexts = [
    "A placa de vídeo processa imagens e gráficos, essencial para jogos e edição.",
    "A placa-mãe conecta todos os componentes do computador e permite sua comunicação.",
    "O processador é o cérebro do PC, executando cálculos e comandos.",
    "A memória RAM guarda dados temporários para acelerar processos.",
  ];

  const isLargeScreen = width > 700;
  const caixaWidth = isLargeScreen ? 700 : "95%";
  const cardSize = isLargeScreen ? 330 : 260;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.caixaContainer, { width: caixaWidth }]}>
          <View style={styles.caixa}>
            <Text style={styles.titulo}>O que é Hardware</Text>
            <Text style={styles.textocaixa}>
              Hardware é a parte física do computador — tudo que você pode tocar.
              Inclui monitor, teclado, mouse, processador, memória, placa-mãe e
              outros componentes. O hardware é o corpo do computador, enquanto o
              software é o cérebro que o faz funcionar.
            </Text>
          </View>
        </View>

        <View style={styles.hardwareList}>
          {cards.map((card, index) => {
            const rotate = card.animatedValue.interpolate({
              inputRange: [0, 180],
              outputRange: ["0deg", "180deg"],
            });

            const rotateBack = card.animatedValue.interpolate({
              inputRange: [0, 180],
              outputRange: ["180deg", "360deg"],
            });

            return (
              <Pressable key={index} onPress={() => flipCard(card)} style={styles.hardwareWrapper}>
                <View style={[styles.cardContainer, { height: cardSize }]}>
                  
                  {/* FRENTE */}
                  <Animated.View
                    style={[
                      styles.cardFace,
                      { transform: [{ rotateY: rotate }] },
                    ]}
                  >
                    <View style={styles.imageWrapper}>
                      <Image
                        source={frontImages[index]}
                        style={styles.imagem}
                        resizeMode="cover"
                      />
                    </View>

                    <Text style={styles.cardTitle}>{frontTitles[index]}</Text>
                  </Animated.View>

                  {/* VERSO */}
                  <Animated.View
                    style={[
                      styles.cardFace,
                      styles.cardBack,
                      { transform: [{ rotateY: rotateBack }] },
                    ]}
                  >
                    <Text style={styles.backText}>{backTexts[index]}</Text>
                  </Animated.View>

                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(11, 5, 58)",
  },

  header: {
    height: 100,
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "rgba(0, 130, 252, 0.6)",
  },

  headerText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },

  scrollContent: {
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 100,
  },

  caixaContainer: {
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.9,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 25,
    elevation: 12,
    marginBottom: 80,
  },

  caixa: {
    width: "95%",
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 25,
    padding: 25,
    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.5)",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },

  textocaixa: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    lineHeight: 28,
  },

  hardwareList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    gap: 60,
  },

  hardwareWrapper: {
    width: 260,
    alignItems: "center",
  },

  cardContainer: {
    width: "100%",
    position: "relative",
  },

  cardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "white",
    shadowOpacity: 0.7,
    shadowOffset: { width: 3, height: 4 },
    shadowRadius: 12,
    elevation: 6,
  },

  cardBack: {
    backgroundColor: "rgb(11, 5, 40)",
    padding: 20,
  },

  imageWrapper: {
    width: "100%",
    height: "55%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
  },

  imagem: {
    width: "100%",
    height: "100%",
  },

  cardTitle: {
    width: "100%",
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(247, 252, 246, 0.12)",
    borderRadius: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  backText: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    lineHeight: 24,
  },

  spacer: {
    height: 60,
  },
});

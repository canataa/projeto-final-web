import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MAX_WIDTH = 900; // impede que tudo fique gigante na web

export default function Evolucao() {
  return (
    <View style={styles.container}>

      {/* -------- DECORAÇÕES FUTURISTAS -------- */}
      <View style={styles.decorLeft} />
      <View style={styles.decorRight} />
      <View style={styles.decorCurveLeft} />
      <View style={styles.decorCurveRight} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Evolução do Hardware</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.contentLimit}>

          {/* LEI DE MURPHY */}
          <View style={styles.card}>
            <Text style={styles.title}>❗A Lei de Murphy</Text>
            <Text style={styles.text}>
              A Lei de Murphy diz que: “Se algo pode dar errado, vai dar errado”.
              No mundo do hardware isso sempre foi muito evidente: peças falhavam facilmente,
              cabos desconectavam, sistemas travavam — qualquer descuido podia causar problemas sérios.
            </Text>

            <Text style={styles.text}>
              A evolução do hardware veio justamente para combater esses imprevistos.
            </Text>
          </View>

          {/* SSD x HDD */}
          <View style={styles.section}>
            <Ionicons name="hardware-chip" size={22} color="#1A73E8" />
            <Text style={styles.sectionTitle}>1. SSD substituiu o HDD</Text>
            <Text style={styles.sectionText}>
              O HDD tinha partes mecânicas e quebrava com facilidade.
              O SSD é muito mais rápido, silencioso e confiável.
            </Text>

            <View style={styles.imageRow}>
              <View style={styles.imageBox}>
                <Image source={require("../assets/ssd.png")} style={styles.image} />
              </View>

              <View style={styles.imageBox}>
                <Image source={require("../assets/hd.png")} style={styles.image} />
              </View>
            </View>
          </View>

          {/* FONTES */}
          <View style={styles.section}>
            <Ionicons name="construct" size={22} color="#1A73E8" />
            <Text style={styles.sectionTitle}>2. Fontes com múltiplas proteções</Text>
            <Text style={styles.sectionText}>
              Fontes modernas possuem proteção contra curto, sobrecorrente,
              sobretemperatura e muito mais — evitando danos no PC inteiro.
            </Text>

            <View style={styles.singleImageBox}>
              <Image source={require("../assets/fonte.png")} style={styles.image} />
            </View>
          </View>

          {/* BIOS */}
          <View style={styles.section}>
            <Ionicons name="bug-outline" size={22} color="#1A73E8" />
            <Text style={styles.sectionTitle}>3. BIOS UEFI e autodiagnóstico</Text>
            <Text style={styles.sectionText}>
              Sistemas modernos detectam erros automaticamente e previnem danos antes
              mesmo da inicialização.
            </Text>
          </View>

          {/* PADRONIZAÇÕES */}
          <View style={styles.section}>
            <Ionicons name="flash" size={22} color="#1A73E8" />
            <Text style={styles.sectionTitle}>4. Componentes padronizados</Text>
            <Text style={styles.sectionText}>
              Padrões como DDR4/DDR5, PCIe e SATA reduziram erros de montagem e incompatibilidade.
            </Text>

            <View style={styles.imageGrid}>
              <View style={styles.gridBox}>
                <Image source={require("../assets/memoria.png")} style={styles.image} />
              </View>

              <View style={styles.gridBox}>
                <Image source={require("../assets/ddr5.png")} style={styles.image} />
              </View>

              <View style={styles.gridBox}>
                <Image source={require("../assets/pci.png")} style={styles.image} />
              </View>

              <View style={styles.gridBox}>
                <Image source={require("../assets/sata.png")} style={styles.image} />
              </View>
            </View>
          </View>

          {/* PROTEÇÃO TÉRMICA */}
          <View style={styles.section}>
            <Ionicons name="shield-checkmark" size={22} color="#1A73E8" />
            <Text style={styles.sectionTitle}>5. Proteções térmicas</Text>

            <Text style={styles.sectionText}>
              CPUs e GPUs reduzem automaticamente o clock quando esquentam demais,
              evitando danos permanentes.
            </Text>

            <View style={styles.imageRow}>
              <View style={styles.imageBox}>
                <Image source={require("../assets/processador2.png")} style={styles.image} />
              </View>

              <View style={styles.imageBox}>
                <Image source={require("../assets/placa2.png")} style={styles.image} />
              </View>
            </View>
          </View>

          {/* AUTOMACAO */}
          <View style={styles.section}>
            <Ionicons name="sparkles" size={22} color="#1A73E8" />
            <Text style={styles.sectionTitle}>6. Inteligência e automação</Text>
            <Text style={styles.sectionText}>
              Hoje os sistemas corrigem falhas, otimizam desempenho e atualizam drivers
              automaticamente. A maior derrota da Lei de Murphy.
            </Text>
          </View>

          {/* FOOTER */}
          <Text style={styles.footerText}>
            Tecnologia evolui para superar o caos.{"\n"}
            Hoje o hardware é mais inteligente, seguro e confiável do que nunca.
          </Text>

        </View>
      </ScrollView>
    </View>
  );
}

/* ----------- ESTILOS ----------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A2A",
  },

  /* ------ DECORAÇÕES FUTURISTAS ------ */

  decorLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 60,
    height: "100%",
    borderRightWidth: 2,
    borderRightColor: "rgba(0,150,255,0.25)",
    opacity: 0.5,
  },

  decorRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 60,
    height: "100%",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(0,150,255,0.25)",
    opacity: 0.5,
  },

  decorCurveLeft: {
    position: "absolute",
    left: -50,
    top: "25%",
    width: 220,
    height: 420,
    borderRadius: 220,
    borderWidth: 2,
    borderColor: "rgba(0,150,255,0.15)",
    transform: [{ rotate: "-18deg" }],
  },

  decorCurveRight: {
    position: "absolute",
    right: -50,
    top: "55%",
    width: 220,
    height: 420,
    borderRadius: 220,
    borderWidth: 2,
    borderColor: "rgba(0,150,255,0.15)",
    transform: [{ rotate: "18deg" }],
  },

  /* ------ HEADER ------ */

  header: {
    height: 70,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 130, 252, 0.4)",
    zIndex: 2,
  },

  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  scroll: {
    padding: 12,
    alignItems: "center",
    zIndex: 2,
  },

  contentLimit: {
    width: "100%",
    maxWidth: MAX_WIDTH,
    zIndex: 2,
  },

  card: {
    backgroundColor: "#EFEFEF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0A0A2A",
  },

  text: {
    fontSize: 13,
    color: "#1A1A1A",
    marginBottom: 8,
    lineHeight: 20,
  },

  section: {
    backgroundColor: "#EFEFEF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 6,
    color: "#0A0A2A",
  },

  sectionText: {
    color: "#1A1A1A",
    fontSize: 13,
    lineHeight: 20,
  },

  footerText: {
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    fontSize: 13,
    marginTop: 20,
    marginBottom: 40,
    lineHeight: 20,
  },

  /* ---- IMAGENS ---- */

  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    columnGap: 10,
  },

  imageBox: {
    flex: 1,
    aspectRatio: 1.4,
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
  },

  singleImageBox: {
    width: "100%",
    aspectRatio: 1.8,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },

  gridBox: {
    flexBasis: "48%",
    aspectRatio: 1.2,
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});

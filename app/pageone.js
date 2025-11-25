import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Evolucao() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Evolução do Hardware</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* --- NOVO CARD: LEI DE MURPHY --- */}
        <View style={styles.card}>
          <Text style={styles.title}>❗A Lei de Murphy</Text>
          <Text style={styles.text}>
            A Lei de Murphy diz que: “Se algo pode dar errado, vai dar errado”.
            No mundo do hardware, isso sempre foi muito verdadeiro: peças falhavam
            facilmente, cabos desconectavam, sistemas travavam e qualquer descuido
            poderia causar problemas sérios.
          </Text>
          <Text style={styles.text}>
            A evolução do hardware ao longo dos anos aconteceu justamente para
            combater esses imprevistos e tornar os sistemas mais estáveis e seguros.
          </Text>
        </View>

        {/* --- ITEM 1: SSD x HDD (2 FOTOS) --- */}
        <View style={styles.section}>
          <Ionicons name="hardware-chip" size={30} color="#1A73E8" />
          <Text style={styles.sectionTitle}>1. SSD substituiu o HDD</Text>
          <Text style={styles.sectionText}>
            O HDD tinha partes mecânicas e era um dos maiores culpados por falhas.
            O SSD eliminou isso, trazendo mais velocidade e confiabilidade.
          </Text>

          <View style={styles.imageRow}>
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.doubleImage} />
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.doubleImage} />
          </View>
        </View>

        {/* --- ITEM 2: FONTES (1 FOTO) --- */}
        <View style={styles.section}>
          <Ionicons name="construct" size={30} color="#1A73E8" />
          <Text style={styles.sectionTitle}>2. Fontes com múltiplas proteções</Text>
          <Text style={styles.sectionText}>
            Hoje temos fontes com proteção contra sobrecorrente, curto-circuito,
            sobrevoltagem e temperaturas altas — reduzindo falhas catastróficas.
          </Text>

          <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.singleImage} />
        </View>

        {/* --- ITEM 3: BIOS UEFI --- */}
        <View style={styles.section}>
          <Ionicons name="bug-outline" size={30} color="#1A73E8" />
          <Text style={styles.sectionTitle}>3. BIOS UEFI e autodiagnóstico</Text>
          <Text style={styles.sectionText}>
            Interfaces modernas ajudam a detectar erros, corrigir falhas e impedir
            danos antes mesmo do sistema iniciar.
          </Text>
        </View>

        {/* --- ITEM 4: PADRÕES (4 FOTOS) --- */}
        <View style={styles.section}>
          <Ionicons name="flash" size={30} color="#1A73E8" />
          <Text style={styles.sectionTitle}>4. Componentes padronizados</Text>
          <Text style={styles.sectionText}>
            Padrões como DDR4/DDR5, PCIe e SATA reduziram muitos erros de montagem
            e incompatibilidade.
          </Text>

          <View style={styles.imageGrid}>
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.gridImage} />
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.gridImage} />
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.gridImage} />
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.gridImage} />
          </View>
        </View>

        {/* --- ITEM 5: PROTEÇÕES TÉRMICAS (2 FOTOS) --- */}
        <View style={styles.section}>
          <Ionicons name="shield-checkmark" size={30} color="#1A73E8" />
          <Text style={styles.sectionTitle}>5. Proteções térmicas</Text>
          <Text style={styles.sectionText}>
            CPUs e GPUs hoje reduzem o clock automaticamente para evitar superaquecimento,
            impedindo danos permanentes.
          </Text>

          <View style={styles.imageRow}>
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.doubleImage} />
            <Image source={{ uri: "COLOQUE_LINK_AQUI" }} style={styles.doubleImage} />
          </View>
        </View>

        {/* --- ITEM 6: INTELIGÊNCIA E AUTOMAÇÃO --- */}
        <View style={styles.section}>
          <Ionicons name="sparkles" size={30} color="#1A73E8" />
          <Text style={styles.sectionTitle}>6. Inteligência e automação</Text>
          <Text style={styles.sectionText}>
            Sistemas modernos detectam falhas, corrigem problemas,
            atualizam drivers automaticamente e até otimizam performance
            sem intervenção humana.
            É a maior derrota que a Lei de Murphy já sofreu.
          </Text>
        </View>

        {/* --- FOOTER FINAL --- */}
        <Text style={styles.footerText}>
          Tecnologia evolui para superar o caos.{"\n"}
          Hoje, o hardware é mais inteligente, seguro e confiável do que nunca.
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
    fontSize: 28,
    fontWeight: "bold",
  },

  scroll: {
    padding: 20,
    paddingBottom: 60,
  },

  card: {
    backgroundColor: "#EFEFEF",
    padding: 20,
    borderRadius: 12,
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
    color: "#1A1A1A",
    marginBottom: 10,
  },

  section: {
    backgroundColor: "#EFEFEF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 8,
    color: "#0A0A2A",
  },

  sectionText: {
    color: "#1A1A1A",
    fontSize: 15,
  },

  footerText: {
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 40,
  },

  /* IMAGENS */
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  doubleImage: {
    width: "48%",
    height: 120,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },

  singleImage: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "#ccc",
  },

  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },

  gridImage: {
    width: "48%",
    height: 110,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#ccc",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";

/* ----------------------------
   SEUS DADOS
   ---------------------------- */
const gpuNivel = {
  "GT 710": 5,
  "GT 730": 8,
  "GT 1030": 15,
  "GTX 750 Ti": 18,
  "GTX 950": 25,
  "GTX 960": 30,
  "GTX 970": 32,
  "GTX 980": 34,
  "GTX 1050": 35,
  "GTX 1050 Ti": 38,
  "GTX 1060": 42,
  "GTX 1650": 45,
  "GTX 1650 Super": 48,
  "GTX 1660": 50,
  "GTX 1660 Super": 52,
  "GTX 1660 Ti": 54,
  "RTX 2060": 60,
  "RTX 2060 Super": 63,
  "RTX 2070": 65,
  "RTX 2070 Super": 68,
  "RTX 2080": 72,
  "RTX 2080 Super": 75,
  "RTX 2080 Ti": 77,
  "RTX 3060": 70,
  "RTX 3060 Ti": 73,
  "RTX 3070": 76,
  "RTX 3070 Ti": 78,
  "RTX 3080": 82,
  "RTX 3080 Ti": 85,
  "RTX 3090": 88,
  "RTX 3090 Ti": 90,
  "RTX 4060": 78,
  "RTX 4060 Ti": 80,
  "RTX 4070": 86,
  "RTX 4070 Super": 88,
  "RTX 4070 Ti": 90,
  "RTX 4080": 94,
  "RTX 4080 Super": 95,
  "RTX 4090": 100,
};

const cpuNivel = {
  "intel celeron g5900": 5,
  "intel pentium g4560": 10,
  "intel i3 4130": 12,
  "intel i3 6100": 16,
  "intel i3 7100": 18,
  "intel i3 10100": 25,
  "intel i3 12100": 40,
  "intel i5 2400": 15,
  "intel i5 3470": 18,
  "intel i5 4460": 22,
  "intel i5 6500": 28,
  "intel i5 7400": 30,
  "intel i5 8400": 38,
  "intel i5 9400f": 42,
  "intel i5 10400f": 45,
  "intel i5 11400f": 50,
  "intel i5 12400f": 60,
  "intel i7 2600": 25,
  "intel i7 3770": 28,
  "intel i7 4770": 32,
  "intel i7 6700": 36,
  "intel i7 7700": 40,
  "intel i7 8700": 48,
  "intel i7 10700": 60,
  "intel i7 12700": 75,
  "ryzen 3 1200": 15,
  "ryzen 3 2200g": 18,
  "ryzen 3 3200g": 22,
  "ryzen 3 4100": 28,
  "ryzen 3 5300g": 32,
  "ryzen 5 1400": 25,
  "ryzen 5 1600": 30,
  "ryzen 5 2600": 35,
  "ryzen 5 3400g": 32,
  "ryzen 5 3600": 45,
  "ryzen 5 4500": 40,
  "ryzen 5 4600g": 48,
  "ryzen 5 5500": 50,
  "ryzen 5 5600": 60,
  "ryzen 5 5600g": 55,
  "ryzen 5 7600": 80,
  "ryzen 7 1700": 38,
  "ryzen 7 2700": 42,
  "ryzen 7 3700x": 55,
  "ryzen 7 5700x": 65,
  "ryzen 7 5800x": 70,
  "ryzen 7 7800x3d": 100,
};

const ramNivel = {
  "2": 2,
  "4": 4,
  "6": 6,
  "8": 8,
  "12": 12,
  "16": 16,
  "24": 24,
  "32": 32,
  "48": 48,
  "64": 64,
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
  "roblox": 10,
  "gta v": 25,
  "rocket league": 22,
  "apex legends": 28,
  "overwatch 2": 26,
  "rust": 30,
  "red dead redemption 2": 55,
  "hogwarts legacy": 60,
  "cyberpunk 2077": 65,
  "ark survival evolved": 50,
  "elden ring": 55,
  "minecraft (java)": 15,
  "fall guys": 18,
  "pubg": 30,
  "the witcher 3": 40,
  "far cry 5": 35,
  "battlefield 1": 30,
  "battlefield v": 40,
  "call of duty warzone": 55,
  "call of duty black ops 3": 30,
  "rainbow six siege": 20,
  "assassin's creed origins": 45,
  "assassin's creed odyssey": 50,
  "assassin's creed valhalla": 60,
  "forza horizon 4": 35,
  "forza horizon 5": 50,
  "dayz": 35,
  "metro exodus": 50,
  "remnant 2": 60,
  "starfield": 65,
  "the last of us part i (pc)": 65,
};

/* ----------------------------
   FUNÇÕES
   ---------------------------- */
function estimateFPS(nivelGpu, nivelCpu, nivelJogo) {
  const power = Math.min(nivelGpu, nivelCpu);
  let fps = Math.round((power / nivelJogo) * 60);
  if (fps < 1) fps = 1;
  if (fps > 240) fps = 240;
  return fps;
}

function recommendPreset(fps) {
  if (fps >= 90) return "Ultra (fluxo muito alto)";
  if (fps >= 60) return "Alto (60 FPS)";
  if (fps >= 40) return "Médio/Alto (40 FPS)";
  if (fps >= 25) return "Médio (25-40 FPS)";
  return "Baixo (jogável com queda)";
}

function requiredRamForGame(nivelJogo) {
  if (nivelJogo >= 60) return 16;
  if (nivelJogo >= 40) return 12;
  if (nivelJogo >= 25) return 8;
  return 4;
}

/* ----------------------------
   APP
   ---------------------------- */
export default function App() {
  const [gpu, setGpu] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [jogo, setJogo] = useState("");
  const [resultado, setResultado] = useState("");
  const [detalhes, setDetalhes] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [searchText, setSearchText] = useState("");

  const gpuList = Object.keys(gpuNivel);
  const cpuList = Object.keys(cpuNivel);
  const ramList = Object.keys(ramNivel).map((r) => r.toString());
  const jogoList = Object.keys(jogosRequisitos);

  function openModal(type) {
    setModalType(type);
    setSearchText("");
    setModalVisible(true);
  }

  function handleSelect(item) {
    if (modalType === "gpu") setGpu(item);
    if (modalType === "cpu") setCpu(item);
    if (modalType === "ram") setRam(item);
    if (modalType === "jogo") setJogo(item);
    setModalVisible(false);
  }

  function filterList() {
    const q = searchText.toLowerCase().trim();
    let base = [];

    if (modalType === "gpu") base = gpuList;
    if (modalType === "cpu") base = cpuList;
    if (modalType === "ram") base = ramList;
    if (modalType === "jogo") base = jogoList;

    if (!q) return base;
    return base.filter((x) => x.toLowerCase().includes(q));
  }

  function verificar() {
    const jogoLower = jogo.toLowerCase().trim();
    if (!jogosRequisitos[jogoLower]) {
      setResultado("Jogo não encontrado.");
      setDetalhes(null);
      return;
    }

    const gpuKey = Object.keys(gpuNivel).find(
      (k) => k.toLowerCase() === gpu.toLowerCase().trim()
    );
    if (!gpuKey) return setResultado("Placa de vídeo não encontrada.");

    const cpuKey = Object.keys(cpuNivel).find(
      (k) => k.toLowerCase() === cpu.toLowerCase().trim()
    );
    if (!cpuKey) return setResultado("Processador não encontrado.");

    const ramInt = parseInt(ram);
    if (!ramNivel[String(ramInt)])
      return setResultado("Quantidade de RAM inválida.");

    const nivelGpu = gpuNivel[gpuKey];
    const nivelCpu = cpuNivel[cpuKey];
    const nivelRam = ramNivel[String(ramInt)];
    const nivelJogo = jogosRequisitos[jogoLower];
    const reqRam = requiredRamForGame(nivelJogo);

    const fps = estimateFPS(nivelGpu, nivelCpu, nivelJogo);
    const preset = recommendPreset(fps);

    const cpuOk = nivelCpu >= Math.round(nivelJogo * 0.8);
    const gpuOk = nivelGpu >= nivelJogo;
    const ramOk = nivelRam >= reqRam;

    const roda = cpuOk && gpuOk && ramOk;

    setResultado(roda ? "RODA ✓" : "NÃO RODA ✗");

    setDetalhes({
      gpuKey,
      cpuKey,
      nivelGpu,
      nivelCpu,
      nivelRam,
      nivelJogo,
      reqRam,
      fps,
      preset,
      cpuOk,
      gpuOk,
      ramOk,
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Livre</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Verificar compatibilidade</Text>

          <TouchableOpacity style={styles.input} onPress={() => openModal("gpu")}>
            <Text style={gpu ? styles.inputText : styles.placeholderText}>
              {gpu || "Placa de Vídeo (toque para escolher)"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.input} onPress={() => openModal("cpu")}>
            <Text style={cpu ? styles.inputText : styles.placeholderText}>
              {cpu || "Processador (toque para escolher)"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.input} onPress={() => openModal("ram")}>
            <Text style={ram ? styles.inputText : styles.placeholderText}>
              {ram || "Memória RAM (GB) (toque para escolher)"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.input} onPress={() => openModal("jogo")}>
            <Text style={jogo ? styles.inputText : styles.placeholderText}>
              {jogo || "Jogo (toque para escolher)"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={verificar}>
            <Text style={styles.buttonText}>Verificar</Text>
          </TouchableOpacity>

          <View style={styles.resultBox}>
            <Text style={styles.result}>{resultado}</Text>

            {detalhes && (
              <View style={styles.detalhes}>
                <Text style={styles.detailLine}>
                  GPU: {detalhes.gpuKey} — {detalhes.gpuOk ? "OK" : "Insuficiente"}
                </Text>
                <Text style={styles.detailLine}>
                  CPU: {detalhes.cpuKey} — {detalhes.cpuOk ? "OK" : "Insuficiente"}
                </Text>
                <Text style={styles.detailLine}>
                  RAM: {detalhes.nivelRam} GB — requisitado: {detalhes.reqRam} GB —{" "}
                  {detalhes.ramOk ? "OK" : "Insuficiente"}
                </Text>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.subTitle}>Estimativa</Text>
                  <Text>FPS estimado: {detalhes.fps} FPS</Text>
                  <Text>Preset recomendado: {detalhes.preset}</Text>
                </View>

                <View style={{ marginTop: 12 }}>
                  <Text style={styles.subTitle}>Visual (níveis comparativos)</Text>

                  <View style={styles.barRow}>
                    <Text style={styles.barLabel}>GPU</Text>
                    <View style={styles.barBg}>
                      <View
                        style={[
                          styles.barFill,
                          {
                            width: `${Math.min(
                              100,
                              Math.round((detalhes.nivelGpu / detalhes.nivelJogo) * 100)
                            )}%`,
                          },
                        ]}
                      />
                    </View>
                  </View>

                  <View style={styles.barRow}>
                    <Text style={styles.barLabel}>CPU</Text>
                    <View style={styles.barBg}>
                      <View
                        style={[
                          styles.barFill,
                          {
                            width: `${Math.min(
                              100,
                              Math.round((detalhes.nivelCpu / detalhes.nivelJogo) * 100)
                            )}%`,
                          },
                        ]}
                      />
                    </View>
                  </View>

                  <View style={styles.barRow}>
                    <Text style={styles.barLabel}>Requisito</Text>
                    <View style={styles.barBg}>
                      <View style={[styles.barFillReq, { width: "100%" }]} />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* MODAL */}
      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.modalSafe}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalClose}>Fechar</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>
              {modalType === "gpu" && "Escolher Placa de Vídeo"}
              {modalType === "cpu" && "Escolher Processador"}
              {modalType === "ram" && "Escolher Memória RAM (GB)"}
              {modalType === "jogo" && "Escolher Jogo"}
            </Text>

            <View style={{ width: 60 }} />
          </View>

          <View style={styles.modalSearch}>
            <TextInput
              placeholder="Pesquisar..."
              value={searchText}
              onChangeText={setSearchText}
              style={styles.modalInput}
              placeholderTextColor="#aaa"
              autoFocus
            />
          </View>

          <FlatList
            data={filterList()}
            keyExtractor={(item, i) => item + i}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleSelect(item)}>
                <View style={styles.modalItem}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </View>
              </Pressable>
            )}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

/* ----------------------------
   STYLES
   ---------------------------- */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "rgb(23,14,92)",
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

  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "700",
  },

  input: {
    width: "100%",
    backgroundColor: "#3a3640",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
  },
  inputText: {
    color: "#fff",
  },
  placeholderText: {
    color: "#bfbfc2",
  },

  button: {
    marginTop: 12,
    backgroundColor: "#0af",
    padding: 12,
    borderRadius: 8,
    width: "60%",
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },

  resultBox: {
    width: "100%",
    marginTop: 18,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  result: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  detalhes: {
    marginTop: 8,
  },
  detailLine: {
    color: "#e6e6e6",
    marginTop: 6,
  },

  subTitle: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: 6,
  },

  barRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  barLabel: {
    width: 70,
    color: "#fff",
    fontSize: 12,
  },
  barBg: {
    flex: 1,
    height: 12,
    backgroundColor: "#2b2b35",
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: 8,
  },
  barFill: {
    height: "100%",
    backgroundColor: "#0af",
    borderRadius: 8,
  },
  barFillReq: {
    height: "100%",
    backgroundColor: "#ff7f50",
    borderRadius: 8,
  },

  modalSafe: {
    flex: 1,
    backgroundColor: "#0d0d10",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  modalClose: {
    color: "#0af",
    fontSize: 16,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  modalSearch: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  modalInput: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
  },
  modalItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#111",
  },
  modalItemText: {
    color: "#fff",
  },
});



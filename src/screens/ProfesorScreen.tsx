import React, { useState } from "react";
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useEmpresaStore } from "../context/store";
import { useEmpresaContext } from "../context/ContextEmpresaSeleccionada";
import { Empresa } from "../entities/Empresa";

const ProfesorScreen: React.FC<{ setIsLoggedIn: (value: boolean) => void }> = ({ setIsLoggedIn }) => {
  const { empresas } = useEmpresaStore();
  const { setEmpresaSeleccionada } = useEmpresaContext();

  const [selectedEmpresas, setSelectedEmpresas] = useState<Empresa[]>([]);

  const handleSelectEmpresa = (empresa: Empresa) => {
    setSelectedEmpresas((prevState) => {
      if (prevState.find((item) => item.id === empresa.id)) {
        return prevState.filter((item) => item.id !== empresa.id);
      }
      return [...prevState, empresa];
    });
  };

  const handleSendToAlumno = () => {
    if (selectedEmpresas.length === 0) {
      Alert.alert("No has seleccionado ninguna oferta.");
      return;
    }

    setEmpresaSeleccionada(selectedEmpresas);
    setSelectedEmpresas([]);
    Alert.alert("Las ofertas de empleo han sido enviadas a los alumnos.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Profesorado</Text>
      </View>

      <FlatList
        data={empresas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.empresaCard}>
            <Text style={styles.empresaTitulo}>{item.nombre}</Text>
            <Text style={styles.empresaDescripcion}>{item.descripcion}</Text>
            <TouchableOpacity
              style={[
                styles.botonSeleccion,
                selectedEmpresas.some((empresa) => empresa.id === item.id) && styles.botonSeleccionado,
              ]}
              onPress={() => handleSelectEmpresa(item)}
            >
              <Text style={styles.botonTexto}>
                {selectedEmpresas.some((empresa) => empresa.id === item.id) ? "Desmarcar" : "Seleccionar"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {selectedEmpresas.length > 0 && (
        <View style={styles.seleccionadasContainer}>
          <Text style={styles.tituloSeleccionadas}>Empresas seleccionadas:</Text>
          {selectedEmpresas.map((empresa) => (
            <Text key={empresa.id} style={styles.empresaSeleccionada}>
              {empresa.nombre}
            </Text>
          ))}
        </View>
      )}

      {selectedEmpresas.length > 0 && (
        <TouchableOpacity style={styles.botonEnviar} onPress={handleSendToAlumno}>
          <Text style={styles.botonTexto}>Enviar a Alumno</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.botonLogout} onPress={handleLogout}>
        <Text style={styles.botonTexto}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  appBar: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 5,
  },
  appBarTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  empresaCard: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  empresaTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  empresaDescripcion: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  botonSeleccion: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  botonSeleccionado: {
    backgroundColor: "#4CAF50",
  },
  botonTexto: {
    color: "white",
    fontWeight: "bold",
  },
  seleccionadasContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  tituloSeleccionadas: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  empresaSeleccionada: {
    fontSize: 14,
    color: "#333",
  },
  botonEnviar: {
    backgroundColor: "#28A745",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  botonLogout: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});

export default ProfesorScreen;

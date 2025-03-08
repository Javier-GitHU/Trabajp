import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useEmpresaContext } from "../context/ContextEmpresaSeleccionada";

const AlumnoScreen: React.FC<{ setIsLoggedIn: any }> = ({ setIsLoggedIn }) => {
  const { empresaSeleccionada } = useEmpresaContext();

  const handleEnviarCurriculum = () => {
    console.log("Currículum enviado");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!empresaSeleccionada || empresaSeleccionada.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>Pantalla Alumno</Text>
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay empresas ahora mismo. Por favor, contacta con tu profesor.</Text>
        </View>
        <TouchableOpacity style={styles.botonLogout} onPress={handleLogout}>
        <Text style={styles.botonTexto}>Cerrar sesión</Text>
      </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Pantalla Alumno</Text>
      </View>
      <FlatList
        data={empresaSeleccionada}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.empresaCard}>
            <Text style={styles.empresaTitulo}>{item.nombre}</Text>
            <Text style={styles.empresaDescripcion}>{item.descripcion}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.botonEnviar} onPress={handleEnviarCurriculum}>
        <Text style={styles.botonTexto}>Enviar mi currículum</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonLogout} onPress={handleLogout}>
        <Text style={styles.botonTexto}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3", 
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  appBar: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
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
  botonTexto: {
    color: "white",
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default AlumnoScreen;

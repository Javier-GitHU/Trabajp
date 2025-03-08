import React, { useState } from "react";
import { View, Text, Button, Switch, TouchableOpacity, StyleSheet } from "react-native";

interface LoginScreenProps {
  setIsLoggedIn: (value: boolean) => void;
  setIsProfesor: (value: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setIsLoggedIn, setIsProfesor }) => {
  const [isProfesorChecked, setIsProfesorChecked] = useState(false);

  const handleLogin = () => {
    setIsProfesor(isProfesorChecked);
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Ofertas de Empleo</Text>
      </View>

      {/* Contenedor de login */}
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>¿Eres profesor?</Text>
          <Switch value={isProfesorChecked} onValueChange={setIsProfesorChecked} />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3", // Fondo grisáceo
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    alignItems: "center",
  },
  appBarTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
    width: "85%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
    color: "#555",
  },
  loginButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;

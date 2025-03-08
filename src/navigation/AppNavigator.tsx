import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import ProfesorScreen from "../screens/ProfesorScreen";
import AlumnoScreen from "../screens/AlumnoScreen";
import { EmpresaStoreProvider } from "../context/store";  
import { EmpresaProvider } from "../context/ContextEmpresaSeleccionada"; 

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfesor, setIsProfesor] = useState(false);

  return (
    <EmpresaStoreProvider>
      <EmpresaProvider>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
              <Tab.Screen name="Login">
                {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} setIsProfesor={setIsProfesor} />}
              </Tab.Screen>
            ) : isProfesor ? (
              <Tab.Screen name="Profesor">
                {() => <ProfesorScreen setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
            ) : (
              <Tab.Screen name="Alumno">
                {() => <AlumnoScreen setIsLoggedIn={setIsLoggedIn}/>}
              </Tab.Screen>
            )}
          </Tab.Navigator>
      </EmpresaProvider>
    </EmpresaStoreProvider>
  );
};

export default AppNavigator;

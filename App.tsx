import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";  
import { EmpresaStoreProvider } from "./src/context/store"; 
import { EmpresaProvider } from "./src/context/ContextEmpresaSeleccionada"; 

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <EmpresaStoreProvider>
        <EmpresaProvider>
          <AppNavigator />
        </EmpresaProvider>
      </EmpresaStoreProvider>
    </NavigationContainer>
  );
};

export default App;

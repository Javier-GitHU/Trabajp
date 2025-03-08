import React, { createContext, useContext, useState } from "react";
import {Empresa} from "../entities/Empresa";

interface EmpresaContextProps {
  empresaSeleccionada: Empresa[] | [];
  setEmpresaSeleccionada: React.Dispatch<React.SetStateAction<Empresa[] | []>>;
}

const EmpresaContext = createContext<EmpresaContextProps | undefined>(undefined);

export const EmpresaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState<Empresa[] | []>([]);

  return (
    <EmpresaContext.Provider value={{ empresaSeleccionada, setEmpresaSeleccionada }}>
      {children}
    </EmpresaContext.Provider>
  );
};

export const useEmpresaContext = (): EmpresaContextProps => {
  const context = useContext(EmpresaContext);
  if (!context) {
    throw new Error("Erro al acceder al contexto");
  }
  return context;
};

import { createContext, useContext } from "react";
import { Empresa } from "../entities/Empresa";

interface EmpresaStoreProps {
  empresas: Empresa[];
}

const EmpresaStoreContext = createContext<EmpresaStoreProps | undefined>(undefined);

export const EmpresaStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const empresas: Empresa[] = [
    { id: 1, nombre: "Tech Solutions", descripcion: "Soluciones tecnológicas innovadoras." },
    { id: 2, nombre: "Green Energy", descripcion: "Energías renovables y sostenibles." },
    { id: 3, nombre: "EduPro", descripcion: "Plataforma educativa para aprendizaje remoto." },
    { id: 4, nombre: "Coca Cola", descripcion: "Empresa de bebidas." }
  ];

  return (
    <EmpresaStoreContext.Provider value={{ empresas }}>
      {children}
    </EmpresaStoreContext.Provider>
  );
};

export const useEmpresaStore = (): EmpresaStoreProps => {
  const context = useContext(EmpresaStoreContext);
  if (!context) {
    throw new Error("No hay contexto sobres las empresas");
  }
  return context;
};

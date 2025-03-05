import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth"; //  Importando o reducer corretamente
import { AuthState } from "./auth/authTypes"; // Opcional, se precisar da interface

// Criando um unico interface para unir os interfaces principais da aplicação
export interface StateIterface {
  auth: AuthState;
}

const rootReducer = combineReducers({ auth: authReducer });

// Criando a store principal com o reducer "root"
export const store = configureStore({
  reducer: rootReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

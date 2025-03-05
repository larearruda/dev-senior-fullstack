import { User } from "../../model/user";

export interface AuthState {
  user: User;
}
// Definindo um usuário inicial válido
const DEFAULT_USER: User = {};
export const INITIAL_STATE: AuthState = { user: DEFAULT_USER };

export enum AuthActionTypes {
  setLogIn = "auth/SET_LOGIN",
  setLogOut = "auth/SET_LOGOUT",
}

interface SetLogInAction {
  type: AuthActionTypes.setLogIn;
  payload: User;
}

interface SetLogOutAction {
  type: AuthActionTypes.setLogOut;
  payload: User;
}

export type AuthAction = SetLogInAction | SetLogOutAction;

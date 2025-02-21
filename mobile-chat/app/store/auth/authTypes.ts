import { User } from "@/app/model/User";

export interface AuthState {
  user: User;
}
// Definindo um usuário inicial válido
const DEFAULT_USER: User = {
  id: 0,
  uuid: "",
  username: "",
};
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

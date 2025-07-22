import user from "@/src/model/User";
import { AuthActionTypes } from "./authTypes";

export const login = () => ({
  type: AuthActionTypes.setLogIn,
  payload: user,
});

export const logout = () => ({
  type: AuthActionTypes.setLogOut,
  payload: user,
});

import user from "@/app/model/User";
import { AuthActionTypes } from "./authTypes";

export const login = () => ({
  type: AuthActionTypes.setLogIn,
  payload: user,
});

export const logout = () => ({
  type: AuthActionTypes.setLogOut,
  payload: user,
});

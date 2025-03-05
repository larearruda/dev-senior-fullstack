import { User } from "../../model/user";
import { AuthActionTypes } from "./authTypes";

export const loginAction = (user: User) => ({
  type: AuthActionTypes.setLogIn,
  payload: user,
});

export const logoutAction = () => ({
  type: AuthActionTypes.setLogOut,
  payload: {},
});

import {
  AuthState,
  AuthAction,
  AuthActionTypes,
  INITIAL_STATE,
} from "./authTypes";

export const authReducer = (
  state = INITIAL_STATE,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.setLogIn:
      console.log(action.payload);
      return { ...state, user: action.payload };

    case AuthActionTypes.setLogOut:
      return {
        ...state,
        user: {
          id: 0,
          uuid: "",
          username: "",
        },
      };

    default:
      return state;
  }
};

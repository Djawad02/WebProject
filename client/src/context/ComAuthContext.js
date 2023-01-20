import { createContext, useEffect, useReducer } from "react";
import ComAuthReducer from "./ComAuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("comuser")) || null, //yahan db se dekhna marrium
  isFetching: false,
  error: false,
};


export const ComAuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch2] = useReducer(ComAuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("comuser", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <ComAuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch2,
      }}
    >
      {children}
    </ComAuthContext.Provider>
  );
};

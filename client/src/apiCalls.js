import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const comloginCall = async (userCredential, dispatch2) => {
  dispatch2({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/comauth/comlogin", userCredential);
    dispatch2({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch2({ type: "LOGIN_FAILURE", payload: err });
  }
};




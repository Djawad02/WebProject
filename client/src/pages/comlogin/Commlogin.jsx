import { useContext, useRef } from "react";
import "./comlogin.css";
import { comloginCall } from "../../apiCalls";
import { ComAuthContext } from "../../context/ComAuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ComLogin() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch2 } = useContext(ComAuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    comloginCall(
      { email: email.current.value, password: password.current.value },
      dispatch2
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"><br />Community Login</h3>
          <span className="loginDesc">
          Community module facilitates any veteran who is interested into community service.<br/> So Welcome!!
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
          
            <Link
              to="/com"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Create a New Account"
                )}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import { useRef } from "react";
import "./com.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Com() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/comauth/com", user);
        history.push("/comlogin");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"><br/><br/><br/>Community Module Login</h3>
          <span className="loginDesc">
          <br/>
          Community module facilitates any veteran who is interested into community service.<br/> So Welcome!!
          </span>
        
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Comfirm Password"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Create Your Community Profile
            </button>

            <Link
              to="/comlogin"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <button className="loginRegisterButton">Log into Your Community Profile</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

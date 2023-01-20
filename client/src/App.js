import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Com from "./pages/Commod/Com";
import ComLogin from "./pages/comlogin/Commlogin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
//import { useContext, useState } from "react";

import Edit from "./components/edit/Edit";
//import {Calender} from "./Calender"
//import "./styles.css";
//import { MOCKEVENTS } from "./Calender/conts";

function App() {
  const { user } = useContext(AuthContext);
  //const [events, setEvents] = useState(MOCKEVENTS);
  //const addEvent = (date,color) => {
    //const text= window.prompt("text");
    //setEvents(prev => [...prev,{date,title:text,color}])
 // }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/com">{user ? <Redirect to="/" /> : <Com />}</Route>
        <Route path="/comlogin">{user ? <Redirect to="/" /> : <ComLogin />}</Route>



        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        
        <Route path="/edit">{!user ? <Redirect to="/" /> : <Edit />}</Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Classes from "./components/Classes";
import Students from "./components/Students";


const App = () => {
 const [response, setResponse] = useState({
   token: sessionStorage.getItem("token"),
   expires_in: "",
   user_data: {},
 });

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let header = {
        headers: {
          Authorization: "Bearer " + response.token,
        },
      };

      axios.get("http://127.0.0.1:8000/api/user-profile", header).then((res) => {
        setResponse({ ...response, user_data: res.data, token: res.data.token });
      });
    }
 });
  
  return (
    <div className="App">
      <React.Fragment>
        <Navbar userData={response.user_data} />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Classes" component={Classes}></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/Students/:class_id" component={Students}></Route>
        </Switch>
      </React.Fragment>
    </div>
  );
};

export default App;

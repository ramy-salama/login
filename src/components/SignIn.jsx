import axios from "axios";
import { useState } from "react";

const SignIn = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState({
    token: sessionStorage.getItem("token"),
    expires_in: ""
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/api/login", inputField).then((res) => {
      setResponse({
        ...response,
        token: res.data.token,
        expires_in: res.data.expires_in,
      });
      sessionStorage.setItem("token", res.data.token);
    });
  };


  return (
    <div className="signin">
      <form onSubmit={submitButton} >
        {/* Email */}
        <div className="md-form">
          <input
            type="email"
            className="col-10 form-input-new"
            name="email"
            placeholder="Enter your Email"
            value={inputField.email}
            onChange={inputsHandler}
          />
        </div>
        <br />
        {/* Password */}
        <div className="md-form">
          <input
            type="password"
            className="col-10 form-input-new"
            name="password"
            placeholder="Enter your Password"
            value={inputField.password}
            onChange={inputsHandler}
          />
        </div>

        {/* Sign in button */}
        <button
          className="col-10 btn-signin my-4"
          type="submit"
          onSubmit={submitButton}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;

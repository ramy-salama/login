import axios from "axios";
import { useState} from  "react";


const SignUp = () => {
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    birth_date: "",
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const [response, setResponse] = useState({
    token: sessionStorage.getItem("token"),
    expires_in: ""
  });

  const submitButton = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/register_teacher", inputField)
      .then((res) => {
        setResponse({
          ...response,
          token: res.data.token,
          expires_in: res.data.expires_in,
        });
        sessionStorage.setItem("token", res.data.token);
      });
  };


  return (
    <div className="signup">
      <form onSubmit={submitButton}>
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={inputField.username}
          onChange={inputsHandler}
          required
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputField.email}
          onChange={inputsHandler}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputField.password}
          onChange={inputsHandler}
          required
        />
        <br />
        <input
          type="password"
          name="password_confirmation"
          placeholder="password confirmation"
          value={inputField.password_confirmation}
          onChange={inputsHandler}
          required
        />
        <br />
        <input
          type="text"
          name="first_name"
          placeholder="firstname"
          value={inputField.first_name}
          onChange={inputsHandler}
          required
        />
        <br />
        <input
          type="text"
          name="last_name"
          placeholder="lastname"
          value={inputField.last_name}
          onChange={inputsHandler}
          required
        />
        <br />
        <input
          type="number"
          name="phone_number"
          placeholder="phonenumber"
          value={inputField.phone_number}
          onChange={inputsHandler}
          required
        />
        <br />
        <input
          type="date"
          name="birth_date"
          value={inputField.birth_date}
          onChange={inputsHandler}
          required
        />
        <br />
        <button type="submit" onClick={submitButton}>
          Submit
        </button>
      </form>
    </div>
  );




}
export default SignUp;
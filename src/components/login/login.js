import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };
  return (
    <div className="login">
      {/* {console.log(user)} */}
      <h1>smartfoodsafe</h1>
      <h2>Login</h2>
      <div className="mb-3">
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="form-control"
        />
      </div>
      {/* <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"/> */}

      <div class="mb-3">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
      </div>
      {/* <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"/> */}
      {/* <div className="button" onClick={login}>Login</div> */}
      <button
        type="button"
        className="btn btn-primary mx-2 my-3"
        onClick={login}
      >
        Login
      </button>

      {/* <div className="button" onClick={() => history.push("/register")}>Sign Up</div> */}
      <button
        type="button"
        className="btn btn-primary mx-2 my-3"
        onClick={() => history.push("/register")}
      >
        Sign Up
      </button>
    </div>
  );
};
export default Login;

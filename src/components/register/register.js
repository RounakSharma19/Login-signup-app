import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => alert(res.data.message));
      history.push("/login");
    } else {
      alert("Please check you fields!!!!");
    }
  };
  return (
    <div className="register">
      {/* {console.log("User", user)} */}
      <h1>smartfoodsafe</h1>
      <h2>Sign Up</h2>
      <div class="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
      </div>
      <div class="mb-3">
        <input
          className="form-control"
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder=" Your Email"
        />
      </div>
      <div class="mb-3">
        <input
          className="form-control"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div class="mb-3">
        <input
          className="form-control"
          type="password"
          name="reEnterPassword"
          onChange={handleChange}
          value={user.reEnterPassword}
          placeholder="Confirm Password"
        />
      </div>
      {/* <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Your Name" required/> */}
      {/* <input type="text" name="email" value={user.email} onChange={handleChange} placeholder=" Your Email" required/> */}
      {/* <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required/> */}
      {/* <input type="password" name="reEnterPassword"  onChange={handleChange}value={user.reEnterPassword} placeholder="Confirm Password" required/> */}
      {/* <div className="button" onClick={register}>Sign Up</div> */}
      <button
        type="button"
        className="btn btn-primary mx-2 my-3"
        onClick={register}
      >
        Sign Up
      </button>
      <button
        type="button"
        className="btn btn-primary  mx-2 my-3"
        onClick={() => history.push("/login")}
      >
        Login
      </button>
      {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}
    </div>
  );
};
export default Register;

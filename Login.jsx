import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/authSlice";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

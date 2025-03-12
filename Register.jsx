import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./redux/authSlice";

const Register = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

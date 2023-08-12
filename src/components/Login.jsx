import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useThemeContext from "../hooks/useThemeContext.js";
import useCurrentUserContext from "../hooks/useCurrentUserContext.js";
import authFetcher from "../utils/authFetcher.js"
import Logo from "./Logo.jsx";
import { useNavigate } from "react-router-dom";

function Login({ setRegistered }) {
  const navigate = useNavigate()
  const { theme } = useThemeContext();
  const { setUser, setToken } = useCurrentUserContext();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authenticate = await authFetcher(loginUser, 'login');
    if (authenticate.token) {
      setUser(authenticate.user)
      setToken(authenticate.token)
      toast.success("Sign In successfully !")
      setTimeout(() => {
        navigate("/profile")
      }, 5000)
    } else {
      toast.error("Failed to login...")
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme={theme}
      />
      <div className="mb-4">
        <Logo />
      </div>
      <h1 className="py-2 text-2xl font-bold text-center text-white ">
        Lecture Enchantée
      </h1>
      <form className="w-full max-w-sm p-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Adresse e-mail"
            value={loginUser.email}
            onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Mot de passe"
            value={loginUser.password}
            onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
            required
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
        >
          Login
        </button>
      </form>
      <button type="button" onClick={() => setRegistered(false)} className="text-xs underline no-style-btn">Not registered yet ?</button>
    </div>
  );
}

export default Login;

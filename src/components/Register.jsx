import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authFetcher from "../utils/authFetcher";
import Logo from "./Logo";
import useThemeContext from "../hooks/useThemeContext";

function Register({ setRegistered }) {

  const { theme } = useThemeContext()

  const [registerUser, setRegisterUser] = useState({
    pseudo: "",
    email: "",
    password: "",
  })
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerUser.password === confirmPassword && registerUser.email === confirmEmail) {
      const authenticate = await authFetcher(registerUser, "register");
      if (authenticate.success) {
        toast.success("Sign Up successfully !")
        setTimeout(() => {
          setRegistered(true)
        }, 5000)
      } else {
        toast.error("Failed to register...")
      }
    } else {
      toast.warn("Please confirm email and password to Sign Up")
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
      <div className="pt-6 mb-4">
        <Logo />
      </div>
      <h1 className="py-2 text-2xl font-bold text-center text-white ">
        Lecture Enchantée
      </h1>
      <form className="w-full max-w-sm p-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Pseudo"
            value={registerUser.pseudo}
            onChange={(e) => setRegisterUser({ ...registerUser, pseudo: e.target.value })}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="E-mail"
            value={registerUser.email}
            onChange={(e) => setRegisterUser({ ...registerUser, email: e.target.value })}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="confirmEmail"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm your e-mail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Password"
            value={registerUser.password}
            onChange={(e) => setRegisterUser({ ...registerUser, password: e.target.value })}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
        >
          Register
        </button>
      </form>
      <button type="button" onClick={() => setRegistered(true)} className="text-xs underline no-style-btn">Already Registered ?</button>
    </div>
  );
}

export default Register;

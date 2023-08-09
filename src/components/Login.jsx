import React, { useState } from "react";

function Login({ setRegistered }) {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="115"
          viewBox="0 0 140 115"
          fill="none"
        >
          <g id='ð¦ icon "open book"'>
            <g id="Group">
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.857178 23.3772C0.857178 19.1952 4.18209 15.805 8.26348 15.805H132.118C136.208 15.805 139.524 19.1879 139.524 23.3772V109.303H0.857178V23.3772Z"
                fill="#C13F98"
              />
              <path
                id="Vector_2"
                d="M70.1903 114.358C74.293 114.358 77.6189 110.964 77.6189 106.777C77.6189 102.59 74.293 99.1957 70.1903 99.1957C66.0876 99.1957 62.7617 102.59 62.7617 106.777C62.7617 110.964 66.0876 114.358 70.1903 114.358Z"
                fill="#C13F98"
              />
              <path
                id="Vector_3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.28564 8.22378C8.28564 8.22378 23.7618 0.642822 39.238 0.642822C54.7142 0.642822 70.1904 8.22378 70.1904 8.22378V101.722C70.1904 101.722 54.7142 94.1413 39.238 94.1413C23.7618 94.1413 8.28564 101.722 8.28564 101.722V8.22378Z"
                fill="#D8D8D8"
              />
              <path
                id="Vector_4"
                d="M18.1903 28.4387H60.2855V23.3848H18.1903V28.4387Z"
                fill="#B6B6B6"
              />
              <path
                id="Vector_5"
                d="M18.1903 38.5475H40.476V33.4935H18.1903V38.5475Z"
                fill="#B6B6B6"
              />
              <path
                id="Vector_6"
                d="M18.1903 48.6561H52.857V43.6022H18.1903V48.6561Z"
                fill="#B6B6B6"
              />
              <path
                id="Vector_7"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70.1906 8.22378C70.1906 8.22378 85.6667 0.642822 101.143 0.642822C116.619 0.642822 132.095 8.22378 132.095 8.22378V101.722C132.095 101.722 116.619 94.1413 101.143 94.1413C85.6667 94.1413 70.1906 101.722 70.1906 101.722V8.22378Z"
                fill="#E9E9E9"
              />
              <g id="Group_2">
                <path
                  id="Vector_8"
                  d="M80.0952 28.4387H124.667V23.3848H80.0952V28.4387Z"
                  fill="#B6B6B6"
                />
                <path
                  id="Vector_9"
                  d="M80.0952 38.5474H124.667V33.4934H80.0952V38.5474Z"
                  fill="#B6B6B6"
                />
                <path
                  id="Vector_10"
                  d="M80.0952 48.656H124.667V43.602H80.0952V48.656Z"
                  fill="#B6B6B6"
                />
                <path
                  id="Vector_11"
                  d="M80.0952 58.763H109.809V53.709H80.0952V58.763Z"
                  fill="#B6B6B6"
                />
              </g>
            </g>
          </g>
        </svg>
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
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
        >
          Se connecter
        </button>
      </form>
      <button type="button" onClick={() => setRegistered(false)} className="text-xs underline no-style-btn">Not registered yet ?</button>
    </div>
  );
}

export default Login;

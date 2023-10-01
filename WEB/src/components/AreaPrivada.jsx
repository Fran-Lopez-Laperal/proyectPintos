import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { loginUserService } from "../../service";

export function AreaPrivada(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = await loginUserService({ email, password });

      login(token);
      navigate("/crearNoticia");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" flex justify-center">
      <section className="mt-32 mb-32 border shadow-sky-100 shadow-md rounded-md w-4/5 lg:w-2/5 h-80 flex flex-col items-center">
        <h2 className="mt-12 font-bold text-2xl lg:text-3xl" id="h2-login">Iniciar sessão</h2>
        <form className="flex flex-col mt-5 "  onSubmit={handleForm}>
          <label  htmlFor="email">
            Email
          </label>
          <input
            className="border w-auto"
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="mt-4"  htmlFor="password">
            Password
          </label>
          <input
            className="border w-12/12"
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <section className="flex justify-center mt-10 ">
            <button className="border p-1 w-24 bg-sky-500 rounded text-white">Entrar</button>
          </section>
          <section >
            {error ? <p>{error}</p> : null}
          </section>
        </form>
      </section>
    </div>
  );
};


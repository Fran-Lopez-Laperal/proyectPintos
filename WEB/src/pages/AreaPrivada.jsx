import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { loginUserService } from '../services';

export function AreaPrivada() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUserService({ username, password });
      logIn(data.token);
      navigate('/crearNoticia');
    } catch (err) {
      setError(err.message);
    }
  };

  if (token) {
    navigate('/crearNoticia');
  }

  return (
    <div className="flex justify-center">
      <section className="mt-32 mb-32 border shadow-sky-100 shadow-md rounded-md w-4/5 lg:w-2/5 h-80 flex flex-col items-center">
        <h2 className="mt-12 font-bold text-2xl lg:text-3xl" id="h2-login">
          Iniciar sesión
        </h2>
        <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input className="border" type="text" id="username" name="username" required onChange={handleUsernameChange} value={username} />

          <label className="mt-4" htmlFor="password">
            Password
          </label>
          <input className="border" type="password" id="password" name="password" required onChange={handlePasswordChange} value={password} />

          <section className="flex justify-center mt-10">
            {error && <p className="text-red-600 text-left text-[12px] p-1">{error}</p>}

            <button className="border p-1 w-24 bg-sky-500 rounded text-white" type="submit">
              Enter
            </button>
          </section>
        </form>
      </section>
    </div>
  );
}

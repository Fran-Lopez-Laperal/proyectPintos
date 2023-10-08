import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { loginUserService } from '../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export function AreaPrivada() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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

  useEffect(() => {
    if (token) {
      navigate('/crearNoticia');
    }
  }, [token, navigate]);

  return (
    <div className="flex justify-center">
      <section className="flex flex-col gap-4 items-center m-10 py-10 px-6 lg:px-48 border rounded-md">
        <h2 className="text-corporative-color2 text-center text-2xl uppercase w-full font-bold lg:text-4xl" id="h2-login">
          Iniciar sesión
        </h2>
        <form className="flex flex-col gap-3 lg:w-80" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input className="border px-3 py-2" type="text" id="username" name="username" required onChange={handleUsernameChange} value={username} />

          <label className="" htmlFor="password">
            Password
          </label>
          <div className="border flex justify-between items-center">
            <input
              className="px-3 py-2"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              onChange={handlePasswordChange}
              value={password}
            />
            <span className="toggle-password" onClick={toggleShowPassword}>
              <FontAwesomeIcon className="pr-2" icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <section className="flex flex-col justify-center">
            <button className="border p-1 mt-2 bg-corporative-color2 rounded text-white" type="submit">
              Enter
            </button>
            {error && <p className="text-red-600 text-left text-xs font-bold p-1">*{error}</p>}
          </section>
        </form>
      </section>
    </div>
  );
}

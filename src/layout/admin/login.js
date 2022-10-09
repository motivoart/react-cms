import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from "axios";
import UserService from "../../api/services/User";
const bcrypt = require('bcryptjs');

import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

async function loginUser({ username, password }) {
      // return fetch('http://localhost:8080/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'applpasswordication/json'
      //   },
      //   body: JSON.stringify(credentials)
      // })
      //   .then(data => data.json())

      //const findUser = async e => {
        const user = await UserService.findOne(username);

        if (user.data) {
          // check user password with hashed password stored in the database
          const validPassword = await bcrypt.compare(password, user.data.password);
          if (validPassword) {

            if (user.data.role === 'admin') {

              const token = axios.post(`http://localhost:8080/api/login`, {
                username: username,
                password: password
              }).then((data)=>data.data);
    
              return token;

            } else {
              setError("Nie masz uprawnień.");
              return;
            }

          } else {
            setError("Niepoprawne hasło.");
            return;
          }
        } else {
          setError("Nie ma takiego użytkownika.");
          return;
        }
        
      //}

      //return findUser();

  }

  const handleSubmit = async e => {
      e.preventDefault();

      const token = await loginUser({
        username,
        password
      });

      if (token) {
        setToken(token);
        sessionStorage.setItem('user', username);
        window.location.reload(false);
      }
  }

  return(
    <section className="section-login d-flex align-items-center justify-content-center">
      <div className="section-login__wrapper">
        <div className="text-center">
          <h1>Logowanie</h1>
        </div>
        {/*<form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" required data-name="username" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" required data-name="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {error && <p>{error}</p>}*/}

        <form onSubmit={handleSubmit} className="section-login__form">
          <div className="mb-3 form-floating">
            <input type="text" className="form-control" required data-name="username" id="floatingInput" placeholder="username" onChange={e => setUserName(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="mb-3 form-floating">
          <input type="password" className="form-control" required data-name="password" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Zaloguj się</button>
        </form>
        {error && <div className="invalid-feedback text-center"><p>{error}</p></div>}
      </div>
    </section>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
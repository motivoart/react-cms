import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import UserService from "../../../../api/services/User";
import useError from '../../../../api/hooks/useError';
const bcrypt = require('bcryptjs');

const UserForm = (props) => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [old_password, setOldPassword] = useState("");
  const [role, setRole] = useState("");
  const [id, setUserId] = useState(props.id);
  const [errorForm, setErrorForm] = useState("");
  const [error, setError] = useState(200);
      
  const history = useHistory();

  useError(error);

  useEffect(() => {
    if (id) {
      async function getUser(id) {

        const user = await UserService.get(id);

        if (user.data) {
          return user;
        } else {
          return false;
        }

      }

      getUser(props.id).then((results) => {
        if(results) {
          setUserName(results.data.username);
          setRole(results.data.role);
          setOldPassword(results.data.password);
        } else {
          setError(404);
        }
        
      });
    
    }
    return () => (setError(200))
  });

  


  const handleSubmit = async e => {
    e.preventDefault();

    // If add user
    if (!id) {

      const is_user = await UserService.findOne(username);
  
      if (is_user.data) {
        setErrorForm("Użytkownik istnieje już w bazie");
      } else {
        const new_password = bcrypt.hashSync(password, 8);
        const new_user = await UserService.create({username,password: new_password, role});
        history.push("/cms/users");
      }
    } else {
      let new_password = null;

      if (password === '') {
        new_password = old_password;
      } else {
        new_password = bcrypt.hashSync(password, 8);
      }
      const data = { id, username, password: new_password, role }
      UserService.update(data);
      history.push("/cms/users");
    }
  }

      
      return (
        <form onSubmit={handleSubmit} className="user__form row">
          <div className="mb-3 col-3">
            <input type="text" className="form-control" required data-name="username" id="username" value={username} placeholder="username" onChange={e => setUserName(e.target.value)} />
          </div>
          <div className="mb-3 col-3">
            <input type="password" className="form-control" required={props.id ? false : true} data-name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="mb-3 col-3">
            <select className="form-select" value={role ? role : ""} onChange={e => setRole(e.target.value)}>
              <option value="" disabled>Wybierz ...</option>
              <option value="admin">Administrator</option>
              <option value="user">Użytkownik</option>
            </select>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">{props.id ? <span>Edytuj</span> : <span>Dodaj</span>}</button>
          </div>
          {errorForm && <div className="invalid-feedback text-center"><p>{errorForm}</p></div>}
        </form>
      )
}

export default UserForm;
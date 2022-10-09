import React, {useState,useEffect,useContext} from "react";
import { useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../../api/userContext";

import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/scss/main.scss';
import './assets/js/main.js';


const Header = () => {
      const history = useHistory();
      const { username, userId } = useContext(UserContext);

      const logoutUser = () => {

            sessionStorage.removeItem('beecms_admin');
            sessionStorage.removeItem('user');
            window.location.reload(false);
            
      }

      return (
            <header className="admin-header d-flex align-items-center justify-content-end">
                  {/* <NavLink to={`/cms/users/user/${userId}`} className="" title="Edytuj">
                        <span>Witaj {username}!</span>
                  </NavLink>

                  <a href="#" c="btn btn-danger btn-sm admin-header__logout" onClick={()=>logoutUser()} title="Wyloguj"><i className="bi bi-x" role="img" aria-label="Logout"></i></a> */}
                  <div className="user-menu">
                        <a className="dropdown-toggle user-menu__link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              <span>Witaj {username}!</span>
                        </a>

                        <ul className="dropdown-menu user-menu__dropdown" aria-labelledby="dropdownMenuLink">
                              <li>
                                    <NavLink to={`/cms/users/user/${userId}`} className="dropdown-item" title="Edytuj">
                                          <span>Profil</span>
                                    </NavLink>
                              </li>
                              <li><a className="dropdown-item" href="#" onClick={()=>logoutUser()}>Wyloguj</a></li>
                        </ul>
                  </div>
            </header>
      )
}




export default Header;
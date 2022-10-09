import React, {useContext} from "react";
import {NavLink} from 'react-router-dom';
import logo from "./assets/img/bee-cms-logo.png";

const Aside = () => {


      return (
            <aside className="admin-aside">
                  <NavLink to="/cms" exact={true} className="admin-aside__logo" title="BeeCMS">
                        <img src={logo} alt="logo" />
                  </NavLink>

                  <nav className="admin-aside__nav">

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-heading">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1" aria-expanded="true" aria-controls="flush-collapse-1">
                                          Zarządzanie stroną
                                          </button>
                                    </h2>
                                    <div id="flush-collapse-1" className="accordion-collapse collapse show" aria-labelledby="flush-heading" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                <ul>
                                                      <li>
                                                            <NavLink to="/cms/pages" title="Zarządzaj podstronami">Podstrony</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj artykułami">Artykuły</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj menu">Menu</NavLink>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-heading">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2" aria-expanded="false" aria-controls="flush-collapse-2">
                                          Administarcja
                                          </button>
                                    </h2>
                                    <div id="flush-collapse-2" className="accordion-collapse collapse" aria-labelledby="flush-heading" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                <ul>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj konfiguracją">Konfiguracja</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj użytkownikami">Użytkownicy</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj uprawnieniami">Uprawnienia</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/logs" title="Zarządzaj logami">Logi</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj tłumaczeniami">Tłumaczenia</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/cms/users" title="Zarządzaj przekierowaniami">Przekierowania 301</NavLink>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              
                        </div>
                  </nav>
            </aside>
      )
}




export default Aside;
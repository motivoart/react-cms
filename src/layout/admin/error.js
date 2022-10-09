import React, { useContext, useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import {NavLink} from 'react-router-dom';
import {ErrorContext} from '../../api/errorContext';
import useError from "../../api/hooks/useError";

import logo from "../admin/assets/img/bee-cms-logo.png";

const SiteError = () => {
      const { state, dispatch } = useContext(ErrorContext);
      const [error, setError] = useState(state.code === 200 ? 404 : state.code);


      useError(error);

      const goHome = () => {
            setError(200);
      }
      

      return (
            <div className="section-error d-flex flex-column align-items-center justify-content-center">
                  <MetaTags>
                        <meta name="robots" content="noindex" />
                        <title>{state.code}</title>
                  </MetaTags>

                  <NavLink to="/cms" exact={true} className="section-error__logo" title="BeeCMS">
                        <img src={logo} alt="logo" />
                  </NavLink>
                  
                  <div className="section-error__title">
                        <h1>Error {state.code} - {state.content}</h1>
                  </div>

                  <div className="section-error__btn">
                        <NavLink to={`/cms`} className="btn btn-primary btn-md" onClick={()=>goHome()} title="Strona główna">
                              Strona główna
                        </NavLink>
                        {/* <button type="button" className="btn btn-danger btn-md" onClick={()=>goHome()} title="Usuń">Strona główna</button> */}
                  </div>

            </div>
      )
}




export default SiteError;
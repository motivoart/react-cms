import React, { useEffect, useState  } from "react";
import MetaTags from 'react-meta-tags';
import {NavLink} from 'react-router-dom';

// Meta tagi
//https://dillionmegida.com/p/how-to-configure-meta-tags-in-react-app-dynamically/

const SiteMain = () => {
      

return (
      <div className="section-cms">
      <MetaTags>
          <title>Home</title>
      </MetaTags>
            <h1>Motivoart</h1>
            
            <NavLink to="/" exact={true}>Home</NavLink>
            <NavLink to="/cms">Admin</NavLink>

      </div>
)
}




export default SiteMain;
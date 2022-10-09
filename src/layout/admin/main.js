import React, {useState, useEffect, useContext} from "react";
import MetaTags from 'react-meta-tags';

import Header from "./header";
import Aside from "./aside";

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
//https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/

//https://developer.mozilla.org/pl/docs/Learn/Server-side/Express_Nodejs/Introduction
//https://github.com/edwardcdev/react-next-d3/tree/main/api/src

//https://www.bezkoder.com/react-jwt-auth/
//https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

// function setToken(userToken) {
//       sessionStorage.setItem('token', JSON.stringify(userToken));
// }
    
// function getToken() {
//       const tokenString = sessionStorage.getItem('token');
//       const userToken = JSON.parse(tokenString);
//       return userToken?.token
// }

const AdminMain = () => {
      const [view, setView] = useState(false);

      useEffect(()=>{
      
            setView(true);
      
      },[]);
      

      // if(!token) {
      //   return <Login setToken={setToken} />
      // }

      return (
            <main className="d-flex flex-wrap admin-main">
                  <MetaTags>
                  <title>BeeCMS </title>
                  </MetaTags>

                  <Aside />

                  <div className="admin-wrapper">
                        <Header />
                  </div>
      
            </main>
      )
}




export default AdminMain;
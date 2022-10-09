import React, { useEffect, useState, lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import useToken from "./api/useToken";
import UserContextProvider from "./api/userContext";
import {ErrorProvider} from "./api/errorContext";

//import routes from "./api/routes/appRouter";
import ProtectedRoutes from "./api/routes/appProtectedRoutes";
import PrivateRoute from "./api/routes/appPrivateRoute";
import Login from "./layout/admin/login";
import SiteMain from "./layout/site/main";

//https://www.techomoro.com/how-to-create-a-react-frontend-express-backend-and-connect-them-together/
//https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
//https://github.com/nishesh96/library-cms
//https://dev.to/larswaechter/how-i-structure-my-react-projects-jii
//https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example#login-page-jsx

//Login
// https://www.pluralsight.com/guides/how-to-router-redirect-after-login
//https://dev.to/nilanth/how-to-create-public-and-private-routes-using-react-router-72m

// fetch("http://localhost:8080/api/get")
//   .then(response => response.json())
//   .then( responseJson=> {
//     //this.setState({ players:responseJson.data });
//     console.log(responseJson)
//   },
// )


// Axios.get("http://localhost:8080/api/customer/list").then((data)=>{
//     console.log(data)
// });

function App() {
  const { token, setToken } = useToken();
  const isAuthenticated = token;

      return (
        <React.StrictMode>
        <UserContextProvider>
          <ErrorProvider>
            <Router>
              <Suspense fallback="">
                <Switch>
                  <Route path="/" component={SiteMain} exact={true} />
                  <Route path="/cms/login">
                    {isAuthenticated ? <Redirect to="/cms" /> : <Login setToken={setToken} />}
                  </Route>
                    <PrivateRoute
                      path="/"
                      isAuthenticated={isAuthenticated}
                    >
                      <ProtectedRoutes />
                    </PrivateRoute>
                </Switch> 
              </Suspense>
          </Router>
        </ErrorProvider>
      </UserContextProvider>
      </React.StrictMode>
      );
    }


ReactDOM.render(<App />, document.getElementById('app'));
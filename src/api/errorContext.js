// import React, {createContext} from "react";

// // set the defaults
// const errorContext = createContext({
//   error: false,
//   setError: () => {}
// });

// export default errorContext;
import React, { createContext, useReducer, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SiteError from "../layout/admin/error";

export const ErrorContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 200:
      return { ...state, code: 200, isError: false, content: "" };
    case 404:
      return { ...state, code: 404, isError: true, content: "Not Found" };
    case 500:
      return { ...state, code: 500, isError: true, content: "Internal Server Error" };
    default:
      throw new Error();
  }
}

const initialState = {
  code: 200,
  isError: false,
  content: ''
}

export function ErrorProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log('useError:', state)
    return (
        <ErrorContext.Provider value={{ state, dispatch }}>
            {/* {props.children} */}
            
            {state.isError === false ? props.children : <Router><Route component={SiteError} /></Router>}
        </ErrorContext.Provider>
    )
};
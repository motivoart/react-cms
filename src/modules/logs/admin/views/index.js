import React, { useEffect, useState  } from "react";
import { useHistory } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import LogService from "../../../../api/services/Log";
import useError from '../../../../api/hooks/useError';
//import List from "./list";

import Header from "../../../../layout/admin/header";
import Aside from "../../../../layout/admin/aside";

const LogIndex = () => {
      const history = useHistory();
      const [ listLog, setListLog ] = useState([]);
      const [error, setError] = useState(200);

      useError(error);

        async function fetchDataLog() {

            const res = await LogService.list();
            console.log(res)

            if (res.success === true) {
            setListLog(res.data)
            } else {
            setError(500);
            }
        }

      useEffect(()=>{
        fetchDataLog()
      },[]);
      

      
      return (
        <main className="d-flex flex-wrap admin-main">

              <Aside />

              <div className="admin-wrapper">
                    <Header />
                    <div className="admin-wrapper__content">
                      <div className="d-flex align-items-center admin-wrapper__top">
                        <h1>Logi</h1>
                      </div>
                      {/* <List userlist={listUser} /> */}
                    </div>
              </div>
  
        </main>
      )
      }
      
      export default LogIndex;
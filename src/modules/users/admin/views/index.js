import React, { useEffect, useState  } from "react";
import { useHistory } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import UserService from "../../../../api/services/User";
import useError from '../../../../api/hooks/useError';
import List from "./list";

import Header from "../../../../layout/admin/header";
import Aside from "../../../../layout/admin/aside";

// TODO: UserService.list() wykonuje się nieskończona ilość razy
const UserIndex = () => {
      const history = useHistory();
      const [ listUser, setListUser ] = useState([]);
      const [error, setError] = useState(200);

      useError(error);

      async function fetchDataUser() {

        const res = await UserService.list();
  
        if (res.success === true) {
          setListUser(res.data)
        } else {
          setError(500);
        }
      }

      useEffect(()=>{
        fetchDataUser()
      },[]);
      

      // const deleteUser = (id) => {
      //   if (UserService.delete(id)) {
      //     async function newDataUser(){
      //       const res = await UserService.list()
      //       if (res.success) {
      //         setListUser(res.data)
      //       }
      //     }

      //     newDataUser();
      //   }
        
      // }
      
      return (
        <main className="d-flex flex-wrap admin-main">

              <Aside />

              <div className="admin-wrapper">
                    <Header />
                    <div className="admin-wrapper__content">
                      <div className="d-flex align-items-center admin-wrapper__top">
                        <h1>Użytkownicy</h1>
                        <NavLink to={`/cms/users/user`} className="btn btn-primary btn-sm" title="Dodaj nowego użytkownika">Dodaj <i className="bi bi-plus-lg"></i></NavLink>
                      </div>
                      <List userlist={listUser} />
                      {/* <table className="table table-striped table-hover">
                        <thead className="table-dark">
                          <tr>
                            <th>#</th>
                            <th>Nazwa</th>
                            <th>Rola</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            listUser.map((item,i)=>{
                              return(
                                <tr key={i}>
                                  <th scope="row">{item.id}</th>
                                  <td>{item.username}</td>
                                  <td>{item.role}</td>
                                  <td className="d-flex actions">
                                    <NavLink to={`/cms/users/user/${item.id}`} className="btn btn-primary btn-sm" title="Edytuj">
                                      <i className="bi bi-pencil-square" role="img" aria-label="Edit"></i>
                                    </NavLink>
                                    <a href="#" className="btn btn-danger btn-sm" onClick={()=>deleteUser(item.id)} title="Usuń"><i className="bi bi-trash" role="img" aria-label="Delete"></i></a>
                                  </td>
                                </tr>
                              )
                            })
                          }
                          </tbody>
                      </table> */}
                    </div>
              </div>
  
        </main>
      )
      }
      
      export default UserIndex;
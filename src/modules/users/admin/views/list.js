import React, { useEffect, useState  } from "react";
import UserService from "../../../../api/services/User";
import {NavLink} from 'react-router-dom';

const List = props => {
  const [listUser, setListUser] = useState([]);

  const deleteUser = id => {
    if (UserService.delete(id)) {
      console.log('444');
      async function fetchDataUser(){
        const res = await UserService.list()
        console.log(res);
        if (res.success) {
          setListUser(res.data)
        }
      };
      fetchDataUser();
    }
  };

  useEffect(() => {
    setListUser(props.userlist);
  }, [props.userlist]);

  return (
    
    <table className="table table-striped table-hover">
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
                <button className="btn btn-danger btn-sm" onClick={()=>deleteUser(item.id)} title="Usuń"><i className="bi bi-trash" role="img" aria-label="Delete"></i></button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
  </table>
  )

}

export default List;
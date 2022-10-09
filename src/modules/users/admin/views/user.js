import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../../../layout/admin/header";
import Aside from "../../../../layout/admin/aside";
import UserForm from "./form";

const User = () => {
  const { id } = useParams();


  return (
    <main className="d-flex flex-wrap admin-main">
      <Aside />

      <div className="admin-wrapper">
        <Header />

        <div className="admin-wrapper__content">
          <div className="d-flex align-items-center admin-wrapper__top">
            {id ? <h1>Edytuj Użytkownika {id}</h1> : <h1>Dodaj Użytkownika</h1>}
          </div>
          <div className="user">
            <UserForm id={id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;

import React, { createContext, useContext, useState } from "react";
import UserService from "./services/User";

async function getUserId(username) {
      const user = await UserService.findOne(username);

      if (user.data) {
            return user.data.id;
      }
}

export const UserContext = createContext(undefined);

const UserContextProvider = (props) => {
      const username = sessionStorage.getItem('user');
      
      const [userId, setUserId] = useState("");
      console.log(userId)


      if (username) {
            getUserId(username).then((results) => {
                  setUserId(results);
                  
            });
      }

    return (
        <UserContext.Provider value={{ 
            userId: userId, 
            username: username,
        }}>
        	{props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
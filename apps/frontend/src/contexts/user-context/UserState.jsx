import React, { useState } from "react";
import UserContext from "./userContext";
import { getUser } from "../../utils/api/user.utils";

function UserState(props) {
  const [UserData, setUserData] = useState({});

  // Function for getting the user details from server

  const getUserInfo = async (getAccessTokenSilently, user) => {
    if (user) {
      try {
        const token = await getAccessTokenSilently();
        const response = await getUser(user, token);
        setUserData(() => {
          return {
            ...response,
            ...{ nickname: "Rahul Sharma", mobile: 8902894 },
          };
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ UserData, getUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;

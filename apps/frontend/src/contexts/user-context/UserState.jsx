import React from "react";
import UserContext from "./userContext";
import { getUser } from "../../utils/api/user.utils";

function UserState(props) {
  const userDetails = [
    {
      firstName: "James",
      lastName: "Bond",
    },
  ];

  // Function for getting the user details from server

  const getUserInfo = async (getAccessTokenSilently, user) => {
    if (user) {
      try {
        const token = await getAccessTokenSilently();
        const res = await getUser(user, token);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, getUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;

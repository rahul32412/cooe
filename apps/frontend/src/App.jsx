import React, { useEffect, useContext } from "react";
import "./App.css";

import Router from "./Router";
// Importing the user authentication configuration
import { useAuth0 } from "@auth0/auth0-react";
import userContext from "./contexts/user-context/userContext";

function App() {
  if (!navigator.onLine) {
    return <h1>Please stay onLine to access this application</h1>;
  }
  const { getUserInfo } = useContext(userContext);
  const { getAccessTokenSilently, user, isLoading } = useAuth0();
  useEffect(() => {
    if (!isLoading) {
      getUserInfo(getAccessTokenSilently, user);
    }
  }, [getAccessTokenSilently, user]);
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;

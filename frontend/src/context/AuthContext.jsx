import { createContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const GlobalAuthContext = createContext();

const AuthContext = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authUser, setAuthUser] = useState({});
  const [loading, setLoading] = useState(true);

  async function checkIsLoggedInUser() {
    try {
      let res = await AxiosInstance.get("/user/me");
      setAuthUser(res.data.data);
      setLoggedInUser(res.data.success); // true or false
    } catch (error) {
      setLoggedInUser(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkIsLoggedInUser();
  }, []);
  return (
    <GlobalAuthContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        checkIsLoggedInUser,
        authUser,
        loading,
      }}
    >
      {props.children}
    </GlobalAuthContext.Provider>
  );
};

export default AuthContext;

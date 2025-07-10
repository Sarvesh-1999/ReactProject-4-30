import { createContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const GlobalAuthContext = createContext();

const AuthContext = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authUser,setAuthUser] = useState({})

  async function checkIsLoggedInUser() {
    try {
      let res = await AxiosInstance.get("/user/me");
      setAuthUser(res.data.data);
      setLoggedInUser(res.data.success); // true or false
    } catch (error) {
      setLoggedInUser(false);
    }
  }

  useEffect(() => {
    checkIsLoggedInUser();
  }, []);
  return (
    <GlobalAuthContext.Provider
      value={{ loggedInUser, setLoggedInUser, checkIsLoggedInUser , authUser }}
    >
      {props.children}
    </GlobalAuthContext.Provider>
  );
};

export default AuthContext;

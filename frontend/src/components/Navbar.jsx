import { Link, useNavigate } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import Avatar from "@mui/material/Avatar";
import { useContext, useState } from "react";
import { GlobalAuthContext } from "../context/AuthContext";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandle = () => setToggle(!toggle);

  let { loggedInUser, authUser, setLoggedInUser } = useContext(GlobalAuthContext);
  let navigate = useNavigate()

  function stringAvatar(name = "") {
    let word = name.split(" ");
    if (word.length > 1) {
      return {
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    } else {
      return {
        children: `${name.split(" ")[0][0]}`,
      };
    }
  }

  const logoutHandle = async () => {
    try {
      let res = await AxiosInstance.post("/user/logout");
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        setLoggedInUser(false)
        setToggle(false)
        navigate("/login")
      }
    } catch (error) {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      <nav className="absolute top-0 font-semibold h-[70px] w-full bg-white shadow-md flex items-center justify-between px-8">
        <div className="text-3xl font-bold tracking-wide select-none cursor-pointer transition-transform hover:scale-105">
          QShop
        </div>

        {loggedInUser ? (
          <>
            <section className="flex">
              <div className="p-4">
                <Link to={"/home"}>Home</Link>
              </div>
              <div className="p-4">
                <Link to={"/products"}>Products</Link>
              </div>
              <div className="p-4">Men</div>
              <div className="p-4">Women</div>
              <div className="p-4">Kids</div>
              <div className="p-4">Footware</div>
              <div className="p-4">Accessories</div>
              <div className="p-4">Search</div>
            </section>

            <section className="flex gap-4 items-center">
              <div className="text-3xl  ">
                <CartDrawer />
              </div>

              <div className="text-2xl relative">
                <Avatar
                  sx={{ bgcolor: "black" }}
                  className="uppercase"
                  {...stringAvatar(authUser.userName)}
                  onClick={toggleHandle}
                />

                {toggle ? (
                  <>
                    <div className="border border-gray-300 absolute z-50 right-0 px-5 py-2 top-11 bg-white rounded shadow-xl">
                      <button onClick={logoutHandle} className="hover:bg-gray-100 px-5 py-1 rounded cursor-pointer">
                        Logout
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </section>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <Link to={"/login"}>
              <button className="bg-white px-6 py-2 rounded-full shadow-md text-black font-semibold ]  hover:bg-violet-100 hover:scale-105 transition-all duration-200">
                Login
              </button>
            </Link>
            <Link to={"/"}>
              <button className="bg-black px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200">
                Signup
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

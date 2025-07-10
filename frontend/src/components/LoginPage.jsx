import { useState, useEffect, useContext } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { GlobalAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setLoggedInUser } = useContext(GlobalAuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const login = (e) => {
  //   e.preventDefault();

  //   // finding auth user -> AUTHENTICATION
  //   let authUser = allUsers.find((user) => {
  //     return (
  //       user.email === formData.email && user.password === formData.password
  //     );
  //   });

  //   // AUTHOURIZATION
  //   if (authUser) {
  //     // navigate to home
  //     navigate("/home");

  //     // store accesstoken in local storage
  //     localStorage.setItem("accesstoken", Date.now());

  //     // toast message
  //     toast.success(`Welcome ${authUser.username}`);
  //   }
  // };

  const login = async (e) => {
    e.preventDefault();
    try {
      let res = await AxiosInstance.post("/user/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(res);
      toast.success(res.data.message);
      setLoggedInUser(true);
      navigate("/home");
    } catch (error) {
      console.log("Error while log in");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="shadow-2xl mt-16 p-8 rounded-xl bg-white min-w-[350px] w-full max-w-md border border-violet-100">
        <h3 className="text-center font-bold text-3xl text-black mb-6 tracking-wide">
          Login
        </h3>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="mb-1 text-black font-medium">
            Email
          </label>
          <input
            type="email"
            className="border border-gray-300 outline-gray-700 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mb-7">
          <label htmlFor="password" className="mb-1 text-black font-medium">
            Password
          </label>
          <input
            type="password"
            className="border border-gray-300 outline-gray-700 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3">
          <p className="text-center">
            New here ?{" "}
            <Link to={"/"} className="font-semibold">
              Register
            </Link>
          </p>
        </div>
        <div>
          <button
            onClick={login}
            className="bg-black w-full py-2 rounded-lg text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200 text-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

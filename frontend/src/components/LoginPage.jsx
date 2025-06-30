import { useState, useEffect } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    async function getRegisteredUser() {
      let resp = await AxiosInstance.get("/users");
      setAllUsers(resp.data);
    }

    getRegisteredUser();
  }, []);

  const login = (e) => {
    e.preventDefault();

    // finding auth user -> AUTHENTICATION
    let authUser = allUsers.find((user) => {
      return (
        user.email === formData.email && user.password === formData.password
      );
    });

    // AUTHOURIZATION
    if (authUser) {
      // navigate to home
      navigate("/home");

      // store accesstoken in local storage
      localStorage.setItem("accesstoken", Date.now());

      // toast message
      toast.success(`Welcome ${authUser.username}`);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-violet-200 via-violet-100 to-white">
      <form className="shadow-2xl mt-16 p-8 rounded-xl bg-white min-w-[350px] w-full max-w-md border border-violet-100">
        <h3 className="text-center font-bold text-3xl text-violet-700 mb-6 tracking-wide">
          Login
        </h3>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="mb-1 text-violet-700 font-medium">
            Email
          </label>
          <input
            type="email"
            className="border border-violet-300 outline-violet-400 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mb-7">
          <label
            htmlFor="password"
            className="mb-1 text-violet-700 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            className="border border-violet-300 outline-violet-400 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button
            onClick={login}
            className="bg-gradient-to-r from-violet-500 to-violet-700 w-full py-2 rounded-lg text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200 text-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

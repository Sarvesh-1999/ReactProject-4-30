import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="shadow-lg mt-[-100px] p-5">
        <h3 className="text-center font-semibold text-2xl">Register</h3>
        <div className="flex flex-col mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="border border-b-gray-300 outline-0 px-2 py-1"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="border border-b-gray-300 outline-0 px-2 py-1"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="border border-b-gray-300 outline-0 px-2 py-1"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="text"
            className="border border-b-gray-300 outline-0 px-2 py-1"
            name="confirmpassword"
            id="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            onClick={register}
            className="bg-violet-400 w-full py-2 rounded"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

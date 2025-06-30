import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  let accesstoken = localStorage.getItem("accesstoken");

  return (
    <nav className="absolute top-0 font-semibold h-[70px] w-full bg-white shadow-lg flex items-center justify-between px-8">
      <div className="text-3xl font-bold tracking-wide select-none cursor-pointer transition-transform hover:scale-105">
        MyApp
      </div>

      {accesstoken ? (
        <>
          <section className="flex">
            <div className="p-4">Home</div>
            <div className="p-4">Products</div>
            <div className="p-4">Men</div>
            <div className="p-4">Women</div>
            <div className="p-4">Kids</div>
            <div className="p-4">Footware</div>
            <div className="p-4">Accessories</div>
            <div className="p-4">Search</div>
          </section>

          <section className="flex gap-3">
            <div className="text-2xl">
              <IoCartOutline />
            </div>

            <div className="text-2xl">
              <FaRegUserCircle />
            </div>
          </section>
        </>
      ) : (
        <div className="flex gap-4 items-center">
          <Link to={"/login"}>
            <button className="bg-white px-6 py-2 rounded-full shadow-md text-violet-700 font-semibold border border-violet-300 hover:bg-violet-100 hover:scale-105 transition-all duration-200">
              Login
            </button>
          </Link>
          <Link to={"/"}>
            <button className="bg-gradient-to-r from-violet-500 to-violet-700 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200">
              Signup
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

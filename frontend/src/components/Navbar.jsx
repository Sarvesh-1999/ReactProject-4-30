const Navbar = () => {
  return (
    <nav className="font-semibold h-[70px] w-full bg-violet-300 flex items-center justify-between px-5">

      <div className="text-3xl">logo</div>

      <div className="flex gap-5 ">

        <button className="bg-white px-5 py-2 rounded">Login</button>

        <button className="bg-violet-500 px-5 py-2 rounded text-white">
          Signup
        </button>

      </div>

    </nav>
  );
};

export default Navbar;

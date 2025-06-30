import React from "react";
import { IoShirtOutline } from "react-icons/io5";
import { PiPantsLight } from "react-icons/pi";
import { CgBoy } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";
const Home = () => {
  const categories = [
    {
      icon: <IoShirtOutline />,
      title: "Men",
    },
    {
      icon: <PiPantsLight />,
      title: "Women",
    },
    {
      icon: <CgBoy />,
      title: "Kids",
    },
    {
      icon: <FiWatch />,
      title: "Accessories",
    },
    {
      icon: <GiRunningShoe />,
      title: "Footwear",
    },
  ];

  return (
    <section className="mt-[70px]  bg-gray-50">
      <header className="h-[70vh] relative">
        <img
          src="/assets/image.png"
          alt="landing image"
          className="h-full w-full object-center object-cover"
        />

        <div className="absolute top-30 left-30">
          <h1 className="text-5xl font-light mb-2">
            We Pick Every Item with Care
          </h1>
          <h1 className="text-4xl font-bold mb-10">You Must Try</h1>
          <button className="bg-black text-white p-3">View Products</button>
        </div>
      </header>

      <header className="py-20">
        <h1 className="text-4xl font-extrabold text-center">
          Shop by category
        </h1>
      </header>

      <article className="flex items-center justify-evenly">
        {categories.map((category) => {
          return (
            <div className="px-20 py-10 rounded bg-white shadow-lg">
              <h1 className="text-6xl flex justify-center">
                {category.icon}
              </h1>
              <h3 className="text-center mt-2 font-semibold">
                {category.title}
              </h3>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Home;

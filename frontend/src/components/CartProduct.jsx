import React from "react";
import { AxiosInstance } from "../routes/axiosInstance";

const CartProduct = ({ product }) => {



  const onIncrease = (product) => {};

  const onDecrease = (product) => {};

  return (
    <div className="p-3 flex gap-3 rounded-xl shadow-md border border-gray-200 bg-white items-center">
      <img
        src={product.image}
        alt={product.title}
        className="border h-24 w-24 object-center object-cover rounded-lg"
      />
      <div className="flex flex-col w-full text-black gap-2">
        <div className="flex justify-between items-center">
          <h1 className="capitalize font-semibold text-lg md:text-xl line-clamp-1">
            {product.title}
          </h1>
         
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span className="capitalize">{product.category}</span>
          <span className="capitalize">| {product.brand}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through font-semibold">
            Rs.{product.price}
          </span>
          <span className="text-violet-600 font-bold text-lg">
            Rs.{product.salePrice}
          </span>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => onDecrease(product)}
            className="h-8 w-8 flex items-center justify-center font-bold text-lg rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
            disabled={product.quantity <= 1}
            title="Decrease quantity"
          >
            -
          </button>
          <span className="text-lg font-semibold w-8 text-center select-none">
            {product.quantity}
          </span>
          <button
            onClick={() => onIncrease(product)}
            className="h-8 w-8 flex items-center justify-center font-bold text-lg rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
            title="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

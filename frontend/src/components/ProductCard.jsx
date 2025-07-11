import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="p-3">
      <div className="rounded-lg overflow-hidden shadow-md bg-white">
        <img
          src={product.image}
          alt={product.title}
          className=" h-[325px] w-full object-top object-cover"
        />

        <div className="p-3">
          <h1 className="font-bold capitalize text-2xl">{product.title}</h1>

          <h2 className="flex justify-between uppercase font-semibold text-gray-600 text-sm">
            <span>{product.category}</span>
            <span>{product.brand}</span>
          </h2>

          <p className="flex justify-between font-bold">
            <del>Rs.{product.price}</del>
            <span>Rs.{product.salePrice}</span>
          </p>

          <button className="bg-black text-white w-full py-2 rounded mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

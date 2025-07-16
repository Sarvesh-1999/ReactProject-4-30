import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCartOutline, IoClose } from "react-icons/io5";
import Divider from "@mui/material/Divider";
import { AxiosInstance } from "../routes/axiosInstance";
import CartProduct from "./CartProduct";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const getCartItems = async () => {
    let res = await AxiosInstance.get("/shop/cart/get");
    console.log(res);
    setCartItems(res.data.data.items);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    getCartItems();
  };

  const sampleProducts = [
    {
      image: "https://example.com/products/shirt.jpg",
      title: "cotton casual shirt",
      description:
        "comfortable and breathable cotton casual shirt for daily wear",
      category: "clothing",
      brand: "united colors",
      price: 999,
      salePrice: 799,
      totalStock: 50,
      averageReview: 4.2,
    },
  ];

  const onDelete = async () => {
    let res = await AxiosInstance.delete("/shop/cart/clear");
    console.log(res);
  };

  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation">
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cart</h1>
        <IoClose size={30} onClick={toggleDrawer(false)} />
      </div>

      <Divider />

      <div className="flex justify-end">
        <button
          onClick={() => onDelete()}
          className="text-red-500 hover:text-red-700 font-semibold text-xl px-2 py-1 rounded transition-colors"
          title="Remove from cart"
        >
          Clear All
        </button>
      </div>

      <div className="p-5">
        {cartItems.map((product, idx) => {
          return <CartProduct key={idx} product={product} />;
        })}
      </div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className="mt-1">
        <IoCartOutline />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

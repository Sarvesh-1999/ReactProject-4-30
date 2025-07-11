import { createContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const AllProductsContext = createContext();

const ProductsContext = (props) => {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      let res = await AxiosInstance.get("/shop/product/get");
      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
      console.log("Error while fetching all products");
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <AllProductsContext.Provider value={{ products }}>
      {props.children}
    </AllProductsContext.Provider>
  );
};

export default ProductsContext;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ProductsContext from "./context/ProductsContext.jsx";
createRoot(document.getElementById("root")).render(
  <AuthContext>
    <ProductsContext>
      <App />
    </ProductsContext>
  </AuthContext>
);

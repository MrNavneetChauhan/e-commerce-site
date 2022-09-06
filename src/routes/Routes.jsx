import { Route, Routes } from "react-router-dom";
import { Products } from "../component/products/Products";
import { Home } from "../component/Home/Home";
import { ProductPage } from "../component/products/ProductPage";
import  {SinglePage} from "../component/singlePage/SinglePage"
import { Cart } from "../component/cart/Cart";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/products/:id" element={<SinglePage/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
};

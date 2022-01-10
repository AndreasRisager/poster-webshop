import "./App.scss";
import Home from "./views/Home";
import { Router } from "@reach/router";
import Cart from "./views/Cart";
import { CartProvider } from "react-use-cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Home path="/" default />
        <Cart path="/cart" />
      </Router>
    </CartProvider>
  );
}

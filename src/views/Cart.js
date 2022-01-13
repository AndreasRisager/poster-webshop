import SiteHeader from "../components/SiteHeader";
import { useCart } from "../helpers/CartContext";
import "./Cart.scss";

export default function Cart() {
  const { cart, isCartEmpty, removeFromCart, totalPrice, updateItemQuantity, checkout } = useCart();

  if (isCartEmpty)
    return (
      <>
        <SiteHeader />
        <p>Your cart is empty</p>
      </>
    );

  return (
    <>
      <SiteHeader />
      <main className="cart">
        <h1>Din indkøbskurv</h1>
        <section className="cart__products">
          <header className="cartHeader">
            <p className="cartHeader__product">Product</p>
            <p className="cartHeader__price">Pris</p>
            <p className="cartHeader__quantity">Antal</p>
            <p className="cartHeader__total">I alt</p>
          </header>
          {cart.map((item) => (
            <article className="cartProduct" key={item.id}>
              <img
                src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="cartProduct__image"
              />
              <div className="cartProduct__info">
                <h3 className="cartProduct__title">Diamant 1</h3>
                <p className="cartProduct__description">1. Vælg den ønskede størrelse:: 70 x 100 cm</p>
                <p className="cartProduct__description">
                  Design: Måned moderne liggende Color: Henrik Hvid Font: Stramme_Susanne Heart: Ikke_Hjerte Antal kolonner: 1
                </p>
              </div>
              <p className="cartProduct__price">
                <span>{item.price.toFixed(2)}</span> kr
              </p>
              <div className="cartProduct__quantity">
                <label htmlFor="quantity" className="screenreader">
                  Antal
                </label>
                <input
                  id="quantity"
                  type="number"
                  defaultValue={item.quantity}
                  min="0"
                  pattern="[0-9]*"
                  onChange={(e) => e.target.value !== "" && updateItemQuantity(item, Number(e.target.value))}
                />
              </div>
              <p className="cartProduct__totalPrice">
                <span>{(item.price * item.quantity).toFixed(2)}</span> kr
              </p>
            </article>
          ))}
        </section>
        <p>Subtotal {totalPrice.toFixed(2)} kr</p>
        <button onClick={checkout}>Checkout</button>
      </main>
    </>
  );
}

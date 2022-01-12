import { useCart } from "react-use-cart";
import SiteHeader from "../components/SiteHeader";
import "./Cart.scss";

export default function Cart() {
  const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty)
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
        <table>
          <thead>
            <tr>
              <th colSpan={2} scope="col" width="62%">
                Produkt
              </th>
              <th scope="col" width="20%">
                Pris
              </th>
              <th scope="col">Antal</th>
              <th scope="col" width="20%">
                I alt
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="cartProduct">
                <td className="cartProduct__image">
                  <img src={item.image} alt={item.name} />
                </td>
                <td className="cartProduct__info">
                  <h3 className="cartProduct__title">{item.name}</h3>
                  <p className="cartProduct__description">1. Vælg den ønskede størrelse:: 70 x 100 cm</p>
                  <p className="cartProduct__description">
                    Design: Måned moderne liggende Color: Henrik Hvid Font: Stramme_Susanne Heart: Ikke_Hjerte Antal kolonner: 1
                  </p>
                  <button className="cartProduct__remove" onClick={() => removeItem(item.id)} aria-label={"Fjern " + item.name}>
                    Fjern
                  </button>
                </td>
                <td>{item.price.toFixed(2)} kr</td>
                <td>
                  <label htmlFor="quantity" className="screenreader">
                    Antal
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    defaultValue={item.quantity}
                    min="0"
                    pattern="[0-9]*"
                    className="cartProduct__quantity"
                    onChange={(e) => e.target.value !== "" && updateItemQuantity(item.id, Number(e.target.value))}
                  />
                </td>
                <td>{(item.price * item.quantity).toFixed(2)} kr</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Subtotal {cartTotal.toFixed(2)} kr</p>
      </main>
    </>
  );
}

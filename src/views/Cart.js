import { useCart } from "react-use-cart";
import SiteHeader from "../components/SiteHeader";

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
      <h1>Din indkøbskurv</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} - {item.price} I alt: {(item.price * item.quantity).toFixed(2)};
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <p>Subtotal {cartTotal} kr</p>
    </>
  );
}

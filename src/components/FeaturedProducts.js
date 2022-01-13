import "./FeaturedProducts.scss";
import { useCart } from "../helpers/CartContext";
import storeItems from "../items.json";

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="featuredProducts">
      {storeItems.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button onClick={() => addToCart(product)}>tilføj til kurv</button>
          </div>
        );
      })}
    </section>
  );
}

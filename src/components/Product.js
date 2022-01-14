import "./Product.scss";
import { useCart } from "../helpers/CartContext";
import storeItems from "../items.json";
import { Link } from "@reach/router";

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <>
      {storeItems.map((product) => {
        return (
          <div key={product.id} className="product">
            <div className="product__image-wrap">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="product__image" />
              </Link>
              <button className="product__button" onClick={() => addToCart(product)}>
                tilføj til kurv
              </button>
            </div>
            <Link to={`/product/${product.id}`}>
              <p className="product__name">{product.name}</p>
              <p className="product__price">fra {product.price.toFixed(2)} kr</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

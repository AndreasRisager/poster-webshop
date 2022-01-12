import "./FeaturedProducts.scss";
import { useCart } from "react-use-cart";

export default function FeaturedProducts() {
  const { addItem } = useCart();

  const data = [
    {
      id: 1,
      name: "Diamant 1",
      price: 287.9,
      image:
        "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 2,
      name: "Diamant 2",
      price: 432.83,
      image:
        "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 3,
      name: "Diamant 3",
      price: 12.2,
      image:
        "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 4,
      name: "Diamant 4",
      price: 3.8,
      image:
        "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ];

  return (
    <section className="featuredProducts">
      {data.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button onClick={() => addItem(product)}>tilføj til kurv</button>
          </div>
        );
      })}
    </section>
  );
}

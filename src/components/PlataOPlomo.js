import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import products from "../data/products.json";

export default function PlataOPlomo() {
  const { addItem, cartCount } = useShoppingCart();

  return (
    <section className="products" style={{ margin: "5%" }}>
      {products.map((product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <button disabled={cartCount >= 1} onClick={() => addItem(product)}>
            Adaugă Cursul
          </button>
        </div>
      ))}
    </section>
  );
}

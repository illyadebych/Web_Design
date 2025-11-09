export default function Home({ products, onAddToCart }) {
  return (
    <div>
      <h1>Наші годинники</h1>
      <div className="watches">
        {products.map((p) => (
          <div key={p.id} className="watch">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>
            <button onClick={() => onAddToCart(p)}>Купити</button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

const userIcon = "https://img.icons8.com/ios-filled/50/ffffff/user.png";
const cartIcon = "https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [showModal, setShowModal] = useState(false);

  const products = [
    { id: 1, name: "Rolex Submariner", price: 1300, img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg" },
    { id: 2, name: "Omega Seamaster", price: 1100, img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_2334/27b32b_w300.jpg" },
    { id: 3, name: "Audemars Piguet Royal Oak", price: 1150, img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_12193/1f7a49_w300.jpg" },
    { id: 4, name: "Tag Heuer Carrera", price: 1279, img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_46544/240048_w300.jpg" },
    { id: 5, name: "Прикол годинник", price: 1499, img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg" }
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true);
  };

  const handleRemove = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleLogin = () => {
    if (user) setUser(null);
    else setUser("Ілля");
  };

  const handleWatchClick = (product) => {
    if (product.id === 5) {
      setShowModal(true);
    } else {
      alert(`Ціна цього годинника: ${product.price}$`);
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="brand">
          <div className="logo">⌂</div>
          <div>
            <div className="title">Rolex</div>
            <div className="subtitle">Luxury Watches</div>
          </div>
        </div>

        <div className="nav">
          <button className={activePage === "home" ? "active" : ""} onClick={() => setActivePage("home")}>🏠 Головна</button>
          <button className={activePage === "about" ? "active" : ""} onClick={() => setActivePage("about")}>📖 Про компанію</button>
          <button className={activePage === "shops" ? "active" : ""} onClick={() => setActivePage("shops")}>🏬 Де ми знаходимося</button>
        </div>

        <div className="support">Підтримка</div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="topbar">
          <div className="cartIcon" onClick={() => setShowCart(!showCart)}>
            <img src={cartIcon} alt="cart" />
            {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
          </div>
          <div className="user" onClick={handleLogin}>
            <img src={userIcon} alt="user" />
            <span>{user ? `Вийти (${user})` : "Sign in / Sign up"}</span>
          </div>
        </div>

        <div className={activePage === "home" ? "page active" : "page"}>
          <h1>Наші годинники</h1>
          <div className="watches">
            {products.map(p => (
              <div key={p.id} className="watch" onClick={() => handleWatchClick(p)}>
                <img src={p.img} alt={p.name} />
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
                <button onClick={() => handleAddToCart(p)}>Купити</button>
              </div>
            ))}
          </div>
        </div>

        <div className={activePage === "about" ? "page active" : "page"}>
          <h1>Про компанію</h1>
          <p>
            Компанія заснована 1905 року двома німцями — Гансом Вільсдорфом та Альфредом Даві.
            Rolex став символом точності, розкоші та інновацій у світі годинників. 
            Ми цінуємо якість та дбаємо про наших клієнтів, пропонуючи лише найкращі годинники.
          </p>
        </div>

        <div className={activePage === "shops" ? "page active" : "page"}>
          <h1>Наші магазини</h1>
          <ul>
            <li>Київ, вул. Шевченка, 15</li>
            <li>Львів, вул. Франка, 22</li>
            <li>Одеса, вул. Дерибасівська, 101</li>
            <li>Харків, вул. Сумська, 77</li>
            <li>Дніпро, вул. Гагаріна, 33</li>
            <li>Запоріжжя, вул. Соборна, 49</li>
            <li>Полтава, вул. Європейська, 5</li>
            <li>Вінниця, вул. Пирогова, 88</li>
            <li>Чернігів, вул. Незалежності, 12</li>
            <li>Ужгород, вул. Корзо, 3</li>
          </ul>
        </div>

        {/* Cart */}
        {showCart && (
          <div className="cart">
            <h3>🛍 Кошик</h3>
            {cartItems.length === 0 ? (
              <p>Порожньо</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => handleRemove(index)}>-</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="modal" onClick={() => setShowModal(false)} style={{display:"flex"}}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
              <h3>Введіть дані картки</h3>
              <input type="text" placeholder="ПІБ" />
              <input type="text" placeholder="Номер карти" />
              <input type="text" placeholder="MM/YY" />
              <input type="password" placeholder="CVV" />
              <button onClick={()=>setShowModal(false)}>Відправити</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
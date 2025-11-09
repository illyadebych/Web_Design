import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shops from "./pages/Shops";
import "./App.css";

const userIcon = "https://img.icons8.com/ios-filled/50/ffffff/user.png";
const cartIcon =
  "https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const products = [
    {
      id: 1,
      name: "Rolex Submariner",
      price: 1300,
      img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg",
    },
    {
      id: 2,
      name: "Omega Seamaster",
      price: 1100,
      img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_2334/27b32b_w300.jpg",
    },
    {
      id: 3,
      name: "Audemars Piguet Royal Oak",
      price: 1150,
      img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_12193/1f7a49_w300.jpg",
    },
    {
      id: 4,
      name: "Tag Heuer Carrera",
      price: 1279,
      img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_46544/240048_w300.jpg",
    },
    {
      id: 5,
      name: "Прикол годинник",
      price: 1499,
      img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg",
    },
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

  return (
    <Router>
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
            <Link to="/" className="nav-link">
              🏠 Головна
            </Link>
            <Link to="/about" className="nav-link">
              📖 Про компанію
            </Link>
            <Link to="/shops" className="nav-link">
              🏬 Де ми знаходимося
            </Link>
          </div>

          <div className="support">Підтримка</div>
        </div>

        {/* Content */}
        <div className="content">
          {/* Topbar */}
          <div className="topbar" style={{ justifyContent: "flex-end" }}>
            <div className="cartIcon" onClick={() => setShowCart(!showCart)}>
              <img src={cartIcon} alt="cart" />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </div>
            <div className="user" onClick={handleLogin}>
              <img src={userIcon} alt="user" />
              <span>{user ? `Вийти (${user})` : "Sign in / Sign up"}</span>
            </div>
          </div>

          {/* Routes */}
          <div className="page active" style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home products={products} onAddToCart={handleAddToCart} />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/shops" element={<Shops />} />
            </Routes>
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
            <div
              className="modal"
              onClick={() => setShowModal(false)}
              style={{ display: "flex" }}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>Введіть дані картки</h3>
                <input type="text" placeholder="ПІБ" />
                <input type="text" placeholder="Номер карти" />
                <input type="text" placeholder="MM/YY" />
                <input type="password" placeholder="CVV" />
                <button onClick={() => setShowModal(false)}>Відправити</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [watches, setWatches] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    setWatches([
      { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg", price: "1300$" },
      { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_2334/27b32b_w300.jpg", price: "1100$" },
      { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_12193/1f7a49_w300.jpg", price: "1150$" },
      { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_46544/240048_w300.jpg", price: "1279$" },
      { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg", price: "1499$" },
    ]);
  }, []);

  const handleWatchClick = (watch, index) => {
    if (index === watches.length - 1) {
      setModalContent(
        <div>
          <h3>Введіть номер картки</h3>
          <form>
            <label>ПІБ:</label><br/>
            <input type="text" placeholder="Іван Іванов"/><br/><br/>
            <label>Номер карти:</label><br/>
            <input type="text" placeholder="0000 0000 0000 0000"/><br/><br/>
            <label>Дата (MM/YY):</label><br/>
            <input type="text" placeholder="12/25"/><br/><br/>
            <label>CVV:</label><br/>
            <input type="password" placeholder="123"/><br/><br/>
            <button type="submit">Відправити</button>
          </form>
        </div>
      );
      setModalVisible(true);
    } else {
      alert("Ціна цього годинника: " + watch.price);
    }
  };

  return (
    <div style={{ display: "flex" }}>
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
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            <span className="ico">🏠</span> Головна
          </button>
          <button
            className={activePage === "about" ? "active" : ""}
            onClick={() => setActivePage("about")}
          >
            <span className="ico">📖</span> Про компанію
          </button>
          <button
            className={activePage === "shops" ? "active" : ""}
            onClick={() => setActivePage("shops")}
          >
            <span className="ico">🏬</span> Де ми знаходимося
          </button>
        </div>
        <div className="footer">© 2025 Rolex Store</div>
      </div>

      {/* Content */}
      <div className="content">
        {activePage === "home" && (
          <div className="page active">
            <div className="box">ROLEX</div>
            <div className="watches">
              {watches.map((w, i) => (
                <div
                  key={i}
                  className="watch"
                  onClick={() => handleWatchClick(w, i)}
                >
                  <img src={w.img} alt="watch" />
                  <div className="price">{w.price}</div>
                </div>
              ))}
            </div>
            <div className="box2">BUY ONE CLICK!</div>
          </div>
        )}

        {activePage === "about" && (
          <div className="page active">
            <div className="box">Про компанію</div>
            <div className="box3">
              Компанія заснована 1905 року двома німцями —
              Гансом Вільсдорфом та його зятем Альфредом Даві.
              Rolex став символом точності, розкоші та інновацій у світі годинників.
            </div>
          </div>
        )}

        {activePage === "shops" && (
          <div className="page active">
            <div className="box">Наші магазини</div>
            <ul className="shops-list">
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
        )}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal" onClick={() => setModalVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
}
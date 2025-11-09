export default function Shops() {
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        paddingTop: "70px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <h1>Наші магазини</h1>
      <ul className="shops-list">
        <li>Київ, вул. Шевченка, 15</li>
        <li>Львів, вул. Франка, 22</li>
        <li>Одеса, вул. Дерибасівська, 101</li>
        <li>Харків, вул. Сумська, 77</li>
        <li>Дніпро, вул. Гагаріна, 33</li>
      </ul>
    </div>
  );
}

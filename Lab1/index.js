// Перемикання сторінок
const navButtons = document.querySelectorAll(".nav button");
const pages = document.querySelectorAll(".page");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

// Список годинників
const watches = [
  { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg", price: "1300$" },
  { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_2334/27b32b_w300.jpg", price: "1100$" },
  { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_12193/1f7a49_w300.jpg", price: "1150$" },
  { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_46544/240048_w300.jpg", price: "1279$" },
  { img: "https://watches-master.ua/uploads/cache/CatalogProducts/images_53579/7edcba_w300.jpg", price: "1499$" } // прикол
];

const watchesDiv = document.getElementById("watches");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

watches.forEach((w, i) => {
  const div = document.createElement("div");
  div.classList.add("watch");
  div.innerHTML = `<img src="${w.img}" alt="watch"><div class="price">${w.price}</div>`;

  if (i === watches.length - 1) {
    div.addEventListener("click", () => {
      modalBody.innerHTML = `
        <h3>Введіть номер картки</h3>
        <form id="jokeForm">
          <label>ПІБ:</label><br>
          <input type="text" placeholder="Іван Іванов"><br><br>
          <label>Номер карти:</label><br>
          <input type="text" placeholder="0000 0000 0000 0000"><br><br>
          <label>Дата (MM/YY):</label><br>
          <input type="text" placeholder="12/25"><br><br>
          <label>CVV:</label><br>
          <input type="password" placeholder="123"><br><br>
          <button type="submit">Відправити</button>
        </form>
      `;
      modal.style.display = "block";

     
    });
  } else {
    div.addEventListener("click", () => {
      alert("Ціна цього годинника: " + w.price);
    });
  }

  watchesDiv.appendChild(div);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
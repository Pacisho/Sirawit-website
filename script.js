let products = JSON.parse(localStorage.getItem('pokemonIds')) || [
  { id: 1, name: "ID1", price: 100, desc: "ตัวอย่าง", status: "พร้อมส่ง" }
];

function saveProducts() {
  localStorage.setItem('pokemonIds', JSON.stringify(products));
}

function renderShop() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  products.forEach(p => {
    grid.innerHTML += `
      <div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <b>${p.price} บาท</b>
      </div>
    `;
  });
}

function renderAdminTable() {
  const tbody = document.getElementById('admin-table-body');
  tbody.innerHTML = '';

  products.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>
          <button onclick="deleteProduct(${p.id})">ลบ</button>
        </td>
      </tr>
    `;
  });
}

function addProduct() {
  const name = document.getElementById('new-name').value;
  const price = document.getElementById('new-price').value;
  const desc = document.getElementById('new-desc').value;

  products.push({
    id: Date.now(),
    name,
    price,
    desc,
    status: "พร้อมส่ง"
  });

  saveProducts();
  renderShop();
  renderAdminTable();
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderShop();
  renderAdminTable();
}

function handleLogin() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;

  if (u === 'admin' && p === '1234') {
    document.getElementById('admin-panel').classList.remove('hidden');
  } else {
    alert('ผิด');
  }
}

function showLoginModal() {
  document.getElementById('login-modal').classList.remove('hidden');
}

function showSection(sec) {
  document.getElementById('home-section').classList.add('hidden');
  document.getElementById('shop-section').classList.add('hidden');

  document.getElementById(sec + '-section').classList.remove('hidden');

  if (sec === 'shop') renderShop();
}

window.onload = () => {
  renderShop();
};
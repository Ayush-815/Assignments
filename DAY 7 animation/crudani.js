const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById("userForm");
const msg = document.getElementById("msg");
const tableBody = document.querySelector("#userTable tbody");
const resetBtn = document.getElementById("resetBtn");

const deleteModal = document.getElementById("deleteModal");
const confirmDeleteBtn = document.getElementById("confirmDelete");
const cancelDeleteBtn = document.getElementById("cancelDelete");

let users = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = null;
let deleteIndex = null;

//save user in localstorage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

//clear the form
function clearForm() {
  form.reset();
  editIndex = null;
  msg.textContent = "";
}

function renderUsers() {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
        <button class="delete-btn" onclick="showDeleteModal(${index})">Delete</button>
      </td>`;
    tableBody.appendChild(tr);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

//   validation of name and email
  if (!nameRegex.test(name)) {
    msg.textContent = "Enter at least 3 letters";
    return;
  }
  if (!emailRegex.test(email)) {
    msg.textContent = "Enter valid email:";
    return;
  }

  // check for duplicate email
  const duplicate = users.some((u, idx) => u.email === email && idx !== editIndex);
  if (duplicate) {
    msg.textContent = "User already exists!!!";
    return;
  }

  msg.textContent = "";

//   edit details
  if (editIndex === null) {
    users.push({ name, email });
    saveUsers();
    addRowAnimation(users.length - 1);
  } else {
    users[editIndex] = { name, email };
    editIndex = null;
    saveUsers();
    renderUsers();
  }
  clearForm();
});

resetBtn.addEventListener("click", () => clearForm());

function editUser(index) {
  const u = users[index];
  document.getElementById("name").value = u.name;
  document.getElementById("email").value = u.email;
  editIndex = index;
}

// show modal before delete
function showDeleteModal(index) {
  deleteIndex = index;
  deleteModal.style.display = "flex";
}

cancelDeleteBtn.addEventListener("click", () => {
  deleteIndex = null;
  deleteModal.style.display = "none";
});

confirmDeleteBtn.addEventListener("click", () => {
  if (deleteIndex !== null) {
    users.splice(deleteIndex, 1);
    saveUsers();
    renderUsers();
    deleteIndex = null;
  }
  deleteModal.style.display = "none";
});

// fade+slide animation when adding new row
function addRowAnimation(index) {
  renderUsers();
  const row = tableBody.children[index];
  if (row) {
    row.classList.add("fade-in");
  }
}
renderUsers();

const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById("userForm");
const msg = document.getElementById("msg");
const tableBody = document.querySelector("#userTable tbody");
const resetBtn = document.getElementById("resetBtn");

let users = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = null;

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function clearForm() {
  form.reset();
  editIndex = null;
  msg.textContent = "";
}

function renderUsers() {
  tableBody.innerHTML = "";
  if (users.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" style="color:#666;padding:14px;">No users saved</td>`;
    tableBody.appendChild(tr);
    return;
  }

  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${escapeHtml(user.name)}</td>
      <td>${escapeHtml(user.email)}</td>
      <td>
        <button class="action-btn edit" data-index="${index}">Edit</button>
        <button class="action-btn delete" data-index="${index}">Delete</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  //Buttons in table
  document.querySelectorAll(".action-btn.edit").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = Number(e.currentTarget.dataset.index);
      editUser(i);
    })
  );
  document.querySelectorAll(".action-btn.delete").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = Number(e.currentTarget.dataset.index);
      deleteUser(i);
    })
  );
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nameRegex.test(name)) {
    msg.textContent = "Letter at least 3 and no other symbol allowed";
    return;
  }
  if (!emailRegex.test(email)) {
    msg.textContent = "Enter Email";
    return;
  }
  msg.textContent = "";

  if (editIndex === null) {
    // enter data
    users.push({ name, email });
  } else {
    //update data
    users[editIndex] = { name, email };
    editIndex = null;
  }
  saveUsers();
  renderUsers();
  clearForm();
});

resetBtn.addEventListener("click", () => clearForm());

function editUser(index) {
  const user = users[index];
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  editIndex = index;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteUser(index) {
  if (!confirm("Do u want to delete this user?")) return;
  users.splice(index, 1);
  saveUsers();
  renderUsers();
}
renderUsers();
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const overlay = document.getElementById("overlay");

const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

const deleteModal = document.getElementById("deleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

let users = JSON.parse(localStorage.getItem("users")) || [];
let deleteId = null;

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  } else {
    document.body.classList.toggle("sidebar-collapsed");
  }
});
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// Save user
userForm.addEventListener("submit", e => {
  e.preventDefault();

  const id = document.getElementById("userId").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Fix: Ensure both name and email are provided
  if (!name || !email) return;

  if (id) {
    // Update the existing user
    users = users.map(u => u.id === id ? { id, name, email } : u);
  } else {
    // Add a new user
    users.push({ id: Date.now().toString(), name, email });
  }

  // Update localStorage with the new user list
  localStorage.setItem("users", JSON.stringify(users));

  // Re-render the table and reset the form
  renderUsers(); 
  userForm.reset(); 
});


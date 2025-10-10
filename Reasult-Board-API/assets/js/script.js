
const API_BASE = "https://68e76f2110e3f82fbf3f1df1.mockapi.io/api/result";

let editId = null;
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Utitility Functions
function toggleForm(type) {
  document
    .getElementById("signupSection")
    .classList.toggle("hidden", type === "login");
  document
    .getElementById("loginSection")
    .classList.toggle("hidden", type !== "login");
}

function checkLogin() {
  if (currentUser) {
    showDashboard();
  } else {
    toggleForm("signup");
  }
}

// ===== AUTHENTICATION (2. User Authentication) =====
async function signup() {
  const uName = document.getElementById("signupUname").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  if (!uName || !email || !password) return alert("Please fill all fields!");

  try {
    const res1 = await fetch(
      `${API_BASE}/users?email=${encodeURIComponent(email)}`
    );
    const users = await res1.json();
    if (users && users.length > 0) return alert("This user already exists!");

    // In a real app, password should be hashed on the server.
    const response = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uName, email, password }),
    });

    if (!response.ok) throw new Error("Signup failed");

    currentUser = { uName, email };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    alert("Signup successful! You can now log in.");

    showDashboard();
  } catch (error) {
    console.error("Signup Error:", error);
    alert("An error occurred during signup.");
  }
}

async function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (!email || !password) return alert("Please fill all fields!");

  try {
    // MockAPI filter: finds user by email AND password
    const res = await fetch(
      `${API_BASE}/users?email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`
    );
    const users = await res.json();

    if (!users || users.length === 0)
      return alert("Invalid email or password!");

    currentUser = { uName: users[0].uName, email: users[0].email };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    showDashboard();
  } catch (error) {
    console.error("Login Error:", error);
    alert("An error occurred during login.");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  currentUser = null;
  location.reload();
}

function showDashboard() {
  document.getElementById("signupSection").classList.add("hidden");
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  if (currentUser) {
    document.getElementById(
      "welcomeMsg"
    ).innerText = `Welcome, ${currentUser.uName}`;
    displayResults();
  }
}

// ===== CRUD OPERATIONS (3. Adding, 4. Displaying, 5. API, 6. Edit/Delete, 7. Sort/Search/Filter) =====

// READ - Display Results
async function displayResults() {
  if (!currentUser) return;

  try {
    let res = await fetch(`${API_BASE}/results`);
    let allResults = await res.json();

    // 4. Filter by logged-in user's email
    let results = allResults.filter((r) => r.user === currentUser.email);

    // 7. SEARCH
    const search = document.getElementById("searchBox").value.toLowerCase();
    if (search) {
      results = results.filter(
        (r) =>
          r.name.toLowerCase().includes(search) ||
          r.subject.toLowerCase().includes(search)
      );
    }

    // 7. FILTER (Populate dropdown first)
    const subjects = [
      ...new Set(allResults.map((r) => r.subject).filter((s) => s)),
    ];
    const filterSelect = document.getElementById("filterSubject");
    const currentFilterValue = filterSelect.value;

    filterSelect.innerHTML = `<option value="">Filter by Subject</option>`;
    subjects.forEach((sub) => {
      filterSelect.innerHTML += `<option value="${sub}" ${
        sub === currentFilterValue ? "selected" : ""
      }>${sub}</option>`;
    });

    const filter = filterSelect.value;
    if (filter) {
      results = results.filter((r) => r.subject === filter);
    }

    // 7. SORT
    const sort = document.getElementById("sortOption").value;
    if (sort === "asc") results.sort((a, b) => a.score - b.score);
    else if (sort === "desc") results.sort((a, b) => b.score - a.score);

    // DISPLAY TABLE
    const table = document.getElementById("resultTable");
    table.innerHTML = "";
    if (results.length === 0) {
      table.innerHTML = `<tr><td colspan="5" class="text-center">No results found.</td></tr>`;
      return;
    }

    results.forEach((r) => {
      // 4. Display each result with required fields
      table.innerHTML += `<tr>
                <td>${r.name}</td>
                <td>${r.subject}</td>
                <td>${r.score}</td>
                <td>${new Date(r.date).toLocaleString()}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editResult('${
                      r.id
                    }')"><i class="bi bi-pencil"></i> Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteResult('${
                      r.id
                    }')"><i class="bi bi-trash"></i> Delete</button>
                </td>
            </tr>`;
    });
  } catch (error) {
    console.error("Display Results Error:", error);
  }
}

// CREATE / UPDATE (3. Adding Results, 5. API Integration)
async function addResult() {
  if (!currentUser) return alert("Please Login First.");

  const name = document.getElementById("studentName").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const score = document.getElementById("score").value.trim();

  // 3. Validation
  if (!name || !subject || !score || isNaN(parseInt(score))) {
    return alert("Please fill all fields correctly (Score must be a number).");
  }

  const data = {
    user: currentUser.email, // 3. Associate with logged-in user
    name,
    subject,
    score: parseInt(score),
    date: new Date().toISOString(),
  };

  let url = `${API_BASE}/results`;
  let method = "POST";

  if (editId) {
    url += `/${editId}`;
    method = "PUT";
  }

  try {
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // 8. Clear input fields
    editId = null;
    document.getElementById("addUpdateBtn").innerText = "Add";
    document.getElementById("formTitle").innerText = "Add";
    document.getElementById("studentName").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("score").value = "";
    displayResults();
  } catch (error) {
    console.error("Add/Update Error:", error);
    alert("An error occurred while saving the data.");
  }
}

// READ for EDIT (6. Editing)
async function editResult(id) {
  try {
    let res = await fetch(`${API_BASE}/results/${id}`);
    let r = await res.json();

    // 6. Security Check (ensure user can only modify their own results)
    if (r.user !== currentUser.email) {
      return alert("You can only edit your own results.");
    }

    document.getElementById("studentName").value = r.name;
    document.getElementById("subject").value = r.subject;
    document.getElementById("score").value = r.score;

    editId = id;
    document.getElementById("addUpdateBtn").innerText = "Update";
    document.getElementById("formTitle").innerText = "Update";
  } catch (error) {
    console.error("Edit Read Error:", error);
  }
}

// DELETE (6. Deleting)
async function deleteResult(id) {
  if (!confirm("Are you sure you want to delete this result?")) return;

  try {
    // 6. Security Check (Check before sending DELETE request if required, or rely on backend check)
    // For MockAPI, we'll check by reading first if needed, but simplicity, we'll rely on current user list check in displayResults

    await fetch(`${API_BASE}/results/${id}`, { method: "DELETE" });
    displayResults();

    // Clear form if the deleted item was being edited
    if (editId === id) {
      editId = null;
      document.getElementById("addUpdateBtn").innerText = "Add";
      document.getElementById("formTitle").innerText = "Add";
      document.getElementById("studentName").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("score").value = "";
    }
  } catch (error) {
    console.error("Delete Error:", error);
    alert("An error occurred during deletion.");
  }
}

// Start the application
checkLogin();



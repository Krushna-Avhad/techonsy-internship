let students = [];
let editIndex = -1;
let filteredStudents = [];
let currentPage = 1;
const rowsPerPage = 5;

/* ---------- STATIC 40 RECORDS ---------- */
for (let i = 1; i <= 40; i++) {
  students.push({
    name: `Student ${i}`,
    s1: Math.floor(Math.random() * 100),
    s2: Math.floor(Math.random() * 100),
    s3: Math.floor(Math.random() * 100)
  });
}

/* ---------- CALCULATION ---------- */
function calculate(s) {
  const total = s.s1 + s.s2 + s.s3;
  const percentage = (total / 300) * 100;

  let result = "Fail";
  if (percentage >= 70) result = "Excellent";
  else if (percentage >= 35) result = "Average";

  return { ...s, total, percentage: percentage.toFixed(2), result };
}

/* ---------- ADD / UPDATE ---------- */
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    s1: Number(document.getElementById("s1").value),
    s2: Number(document.getElementById("s2").value),
    s3: Number(document.getElementById("s3").value)
  };

  if (editIndex === -1) {
    students.push(student);
  } else {
    students[editIndex] = student;
    editIndex = -1;
  }

  this.reset();
  filterStudents("all");
});

/* ---------- FILTER + SORT ---------- */
function filterStudents(type) {
  filteredStudents = students.map((s, i) => ({
    ...calculate(s),
    index: i
  }));

  if (type !== "all") {
    filteredStudents = filteredStudents.filter(
      s => s.result.toLowerCase() === type
    );
  }

  filteredStudents.sort((a, b) => b.total - a.total);
  currentPage = 1;
  displayStudents();
}

/* ---------- DISPLAY ---------- */
function displayStudents() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const pageData = filteredStudents.slice(start, start + rowsPerPage);

  pageData.forEach(s => {
    tbody.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.total}</td>
        <td>${s.percentage}%</td>
        <td>${s.result}</td>
        <td>
          <button onclick="editStudent(${s.index})">Edit</button>
          <button onclick="deleteStudent(${s.index})">Delete</button>
        </td>
      </tr>
    `;
  });

  renderPagination(filteredStudents.length);
  showRatio();
}

/* ---------- EDIT / DELETE ---------- */
function editStudent(i) {
  const s = students[i];
  document.getElementById("name").value = s.name;
  document.getElementById("s1").value = s.s1;
  document.getElementById("s2").value = s.s2;
  document.getElementById("s3").value = s.s3;
  editIndex = i;
}

function deleteStudent(i) {
  students.splice(i, 1);
  filterStudents("all");
}

/* ---------- PAGINATION ---------- */
function renderPagination(total) {
  const pages = Math.ceil(total / rowsPerPage);
  const div = document.getElementById("pagination");
  div.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    div.innerHTML += `<button onclick="goToPage(${i})">${i}</button>`;
  }
}

function goToPage(page) {
  currentPage = page;
  displayStudents();
}

/* ---------- PASS / FAIL RATIO ---------- */
function showRatio() {
  const pass = students.filter(s => calculate(s).result !== "Fail").length;
  document.getElementById("ratio").innerText =
    `Pass: ${pass} | Fail: ${students.length - pass}`;
}

/* ---------- INITIAL LOAD ---------- */
filterStudents("all");

/***********************
 GLOBAL VARIABLES
************************/
let students = [];
let displayList = [];
let editId = null;
let currentPage = 1;
const rowsPerPage = 5;

// DOM ELEMENTS
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");

/***********************
 INITIAL DATASET (30 STUDENTS)
************************/
const names = [
  "Rahul","Amit","Sneha","Priya","Rohan","Neha","Arjun","Kiran","Pooja","Vikas",
  "Anita","Suresh","Meena","Karthik","Divya","Manoj","Sunita","Ajay","Nisha","Ravi",
  "Kavya","Deepak","Isha","Vivek","Anjali","Harish","Rekha","Sanjay","Preeti","Mohit"
];

names.forEach((name, index) => {
  const marks = [
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101)
  ];

  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = (total / 300) * 100;

  let grade = "Fail";
  if (percentage > 75) grade = "A";
  else if (percentage > 70) grade = "B";
  else if (percentage >= 35) grade = "C";

  students.push({
    id: Date.now() + index,
    name,
    marks,
    total,
    percentage: percentage.toFixed(2),
    grade,
    status: percentage < 35 ? "Fail" : "Pass"
  });
});

/***********************
 INITIAL DISPLAY LIST
************************/
displayList = [...students];

/***********************
 FORM SUBMIT (ADD / UPDATE)
************************/
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const marks = [
    Number(sub1.value),
    Number(sub2.value),
    Number(sub3.value)
  ];

  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = (total / 300) * 100;

  let grade = "Fail";
  if (percentage > 75) grade = "A";
  else if (percentage > 70) grade = "B";
  else if (percentage >= 35) grade = "C";

  const status = percentage < 35 ? "Fail" : "Pass";

  if (editId === null) {
    students.push({
      id: Date.now(),
      name,
      marks,
      total,
      percentage: percentage.toFixed(2),
      grade,
      status
    });
  } else {
    const student = students.find(s => s.id === editId);
    student.name = name;
    student.marks = marks;
    student.total = total;
    student.percentage = percentage.toFixed(2);
    student.grade = grade;
    student.status = status;
    editId = null;
  }

  resetView();
  form.reset();
});

/***********************
 RESET VIEW
************************/
function resetView() {
  displayList = [...students];
  currentPage = 1;
  renderTable();
}

/***********************
 RENDER TABLE
************************/
function renderTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const pageData = displayList.slice(start, start + rowsPerPage);

  pageData.forEach(s => {
    tbody.innerHTML += `
      <tr class="${s.grade}">
        <td>${s.name}</td>
        <td>${s.total}</td>
        <td>${s.percentage}%</td>
        <td>${s.grade}</td>
        <td>
          <button onclick="editStudent(${s.id})">Edit</button>
          <button onclick="deleteStudent(${s.id})">Delete</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("pageNo").innerText =
    `Page ${currentPage} of ${Math.ceil(displayList.length / rowsPerPage)}`;

  showRatio();
}

/***********************
 EDIT
************************/
function editStudent(id) {
  const s = students.find(stu => stu.id === id);
  nameInput.value = s.name;
  sub1.value = s.marks[0];
  sub2.value = s.marks[1];
  sub3.value = s.marks[2];
  editId = id;
}

/***********************
 DELETE
************************/
function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
  resetView();
}

/***********************
 FILTER BY GRADE (NOW WORKS)
************************/
function filterByGrade(grade) {
  displayList = students.filter(s => s.grade === grade);
  currentPage = 1;
  renderTable();
}

/***********************
 PAGINATION
************************/
function nextPage() {
  if (currentPage * rowsPerPage < displayList.length) {
    currentPage++;
    renderTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

/***********************
 PASS / FAIL RATIO
************************/
function showRatio() {
  const pass = students.filter(s => s.status === "Pass").length;
  const fail = students.length - pass;

  document.getElementById("ratio").innerText =
    `Pass: ${pass} | Fail: ${fail}`;
}

/***********************
 INITIAL LOAD
************************/
renderTable();
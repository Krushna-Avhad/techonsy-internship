/* ===============================
   STUDENT MANAGEMENT SYSTEM
   (Array Methods Focused)
================================ */

let students = [];
let editIndex = -1;
let filteredStudents = [];
let currentPage = 1;
const rowsPerPage = 5;

/* ---------- STATIC 40 RECORDS ---------- */
for (let i = 1; i <= 40; i++) {
  students.push({                    // push
    name: `Student ${i}`,
    marks: [                         // flat later
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ]
  });
}

/* ---------- ADD / UPDATE ---------- */
document.getElementById("studentForm").addEventListener("submit", e => {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    marks: [
      +document.getElementById("s1").value,
      +document.getElementById("s2").value,
      +document.getElementById("s3").value
    ]
  };

  if (editIndex === -1) {
    students.unshift(student);       // unshift (add to top)
  } else {
    students.splice(editIndex, 1, student); // splice (update)
    editIndex = -1;
  }

  e.target.reset();
  filterStudents("all");
});

/* ---------- CALCULATIONS ---------- */
function calculate(student) {
  const total = student.marks
    .flat()                          // flat
    .reduce((sum, m) => sum + m, 0); // reduce

  const percentage = (total / 300) * 100;

  let result = "Fail";
  if (percentage >= 70) result = "Excellent";
  else if (percentage >= 35) result = "Average";

  return {
    ...student,
    total,
    percentage: percentage.toFixed(2),
    result
  };
}

/* ---------- FILTER + SORT ---------- */
function filterStudents(type) {
  filteredStudents = students
    .map((s, i) => ({                // map
      ...calculate(s),
      index: i
    }))
    .filter(s =>                     // filter
      type === "all" ||
      s.result.toLowerCase().includes(type) // includes
    )
    .sort((a, b) => b.total - a.total); // sort

  currentPage = 1;
  displayStudents();
}

/* ---------- DISPLAY ---------- */
function displayStudents() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  const pageData = filteredStudents
    .slice(                          // slice (pagination)
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );

  pageData.forEach(s => {             // forEach
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

  renderPagination(filteredStudents.length); // length
  showRatio();
}

/* ---------- EDIT / DELETE ---------- */
function editStudent(i) {
  const s = students[i];
  document.getElementById("name").value = s.name;
  document.getElementById("s1").value = s.marks[0];
  document.getElementById("s2").value = s.marks[1];
  document.getElementById("s3").value = s.marks[2];
  editIndex = i;
}

function deleteStudent(i) {
  students.splice(i, 1);              // splice (delete)
  filterStudents("all");
}

/* ---------- PAGINATION ---------- */
function renderPagination(total) {
  const pages = Math.ceil(total / rowsPerPage);
  const div = document.getElementById("pagination");
  div.innerHTML = "";

  [...Array(pages).keys()]            // keys
    .forEach(i => {
      div.innerHTML += `<button onclick="goToPage(${i + 1})">${i + 1}</button>`;
    });
}

function goToPage(p) {
  currentPage = p;
  displayStudents();
}

/* ---------- PASS / FAIL RATIO ---------- */
function showRatio() {
  const resultList = students
    .map(calculate)
    .map(s => s.result);              // map

  const pass = resultList
    .filter(r => r !== "Fail").length; // filter + length

  const fail = resultList.length - pass;

  document.getElementById("ratio").innerText =
    `Pass: ${pass} | Fail: ${fail}`;
}

/* ---------- EXTRA ARRAY METHODS (EXPLICIT USE) ---------- */

// pop (remove last student)
function removeLastStudent() {
  students.pop();
}

// shift (remove first student)
function removeFirstStudent() {
  students.shift();
}

// indexOf
function findStudentIndex(name) {
  return students.map(s => s.name).indexOf(name);
}

// reverse (for report view)
function reverseList() {
  students.reverse();
  filterStudents("all");
}

// join (display subjects as string)
function subjectString(marks) {
  return marks.join(", ");
}

// values
function logValues() {
  for (let v of students.values()) {
    console.log(v);
  }
}

/* ---------- INITIAL LOAD ---------- */
filterStudents("all");

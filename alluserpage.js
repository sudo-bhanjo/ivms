// Search Table

function searchTable() {
  // Get the search input and table elements
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("membersTable");
  var tr = table.getElementsByTagName("tr");

  // Loop through all table rows and hide those that don't match the search query
  for (var i = 1; i < tr.length; i++) {
    var tdID = tr[i].getElementsByTagName("td")[0];
    var tdName = tr[i].getElementsByTagName("td")[1];
    var tdusertype = tr[i].getElementsByTagName("td")[2];
    var tdPcon = tr[i].getElementsByTagName("td")[3];

    if (tdID || tdName || tdPcon || tdusertype) {
      var idValue = tdID.textContent || tdID.innerText;
      var nameValue = tdName.textContent || tdName.innerText;
      var pconValue = tdPcon.textContent || tdPcon.innerText;
      var UsertypeValue = tdusertype.textContent || tdusertype.innerHTML;
      if (
        idValue.toUpperCase().indexOf(filter) > -1 ||
        nameValue.toUpperCase().indexOf(filter) > -1 ||
        pconValue.toUpperCase().indexOf(filter) > -1 ||
        UsertypeValue.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Pagination

let currentPage = 1;
const rowsPerPage = 10;

function displayTable(page) {
  const table = document
    .getElementById("membersTable")
    .getElementsByTagName("tbody")[0];
  const rows = table.getElementsByTagName("tr");
  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  // Update page number display
  document.getElementById("pageNumber").innerText = page;

  // Show/Hide rows based on the current page
  for (let i = 0; i < totalRows; i++) {
    rows[i].style.display =
      i >= (page - 1) * rowsPerPage && i < page * rowsPerPage ? "" : "none";
  }

  document.getElementById("prevBtn").disabled = page === 1;

  document.getElementById("nextBtn").disabled = page === totalPages;
}

function nextPage() {
  currentPage++;
  displayTable(currentPage);
}

function prevPage() {
  currentPage--;
  displayTable(currentPage);
}

// Initialize the table with the first page displayed
window.onload = function () {
  displayTable(currentPage);
};

document.addEventListener("DOMContentLoaded", function () {
  showEntries();
});

function showEntries() {
  const rows = document.querySelectorAll("#membersTable tbody tr");
  const entries = parseInt(document.getElementById("entriesSelect").value);

  rows.forEach((row, index) => {
    row.style.display = index < entries ? "" : "none";
  });

  createPagination(rows.length, entries);
}

// function createPagination(totalRows, rowsPerPage) {
//   const pagination = document.getElementById("pagination");
//   pagination.innerHTML = "";

//   const pageCount = Math.ceil(totalRows / rowsPerPage);

//   for (let i = 1; i <= pageCount; i++) {
//     const btn = document.createElement("button");
//     btn.innerText = i;
//     btn.onclick = function () {
//       paginate(i, rowsPerPage);
//     };
//     pagination.appendChild(btn);
//   }
// }

function paginate(pageNumber, rowsPerPage) {
  const rows = document.querySelectorAll("#membersTable tbody tr");
  const start = (pageNumber - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  rows.forEach((row, index) => {
    row.style.display = index >= start && index < end ? "" : "none";
  });
}

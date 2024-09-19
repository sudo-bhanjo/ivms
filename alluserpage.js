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
    var tdPcon = tr[i].getElementsByTagName("td")[3];

    if (tdID || tdName || tdPcon) {
      var idValue = tdID.textContent || tdID.innerText;
      var nameValue = tdName.textContent || tdName.innerText;
      var pconValue = tdPcon.textContent || tdPcon.innerText;
      if (
        idValue.toUpperCase().indexOf(filter) > -1 ||
        nameValue.toUpperCase().indexOf(filter) > -1 ||
        pconValue.toUpperCase().indexOf(filter) > -1
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
const rowsPerPage = 5;

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

  // Disable Previous button on the first page
  // document.getElementById("prevBtn").disabled = page === 1;

  // Disable Next button on the last page
  // document.getElementById("nextBtn").disabled = page === totalPages;
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

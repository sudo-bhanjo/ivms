// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

// Show entries

$(document).ready(function () {
  $("table").DataTable({
    pageLength: 10, // Default page length
    lengthMenu: [
      [10, 25, 50, 100],
      [10, 25, 50, 100],
    ], // Page length options
  });
<<<<<<< HEAD

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

=======
});
>>>>>>> a334c28ec5dba0d016a007d7d585f944e26e45f9

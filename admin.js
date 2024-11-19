// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

$(document).ready(function () {
  $("#journalTable").DataTable({
    paging: true,
    searching: true,
    lengthChange: true,
    pageLength: 10,
    info: true,
    responsive: true,
    columnDefs: [
      { orderable: false, targets: 4 }, // Disables sorting for "Actions" column
    ],
  });
});

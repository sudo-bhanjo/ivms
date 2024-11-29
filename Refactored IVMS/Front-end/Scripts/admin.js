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
});
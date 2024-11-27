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

// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

const platformSelect = document.getElementById("platform-select");
const zoomConferences = document.getElementById("zoom-conferences");
const gmeetConferences = document.getElementById("gmeet");

platformSelect.addEventListener("change", function () {
  if (this.value === "zoom") {
    zoomConferences.style.display = "block";
  } else {
    zoomConferences.style.display = "none";
  }
});

platformSelect.addEventListener("change", function () {
  if (this.value === "gmeet") {
    gmeetConferences.style.display = "block";
  } else {
    gmeetConferences.style.display = "none";
    gmeetConferences.style.input.display = "none";
  }
});

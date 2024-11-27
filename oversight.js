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

// Modal button 2 Action Button Logic

const platformSelect = document.getElementById("platform-select");
const zoomConferences = document.getElementById("zoom-conferences");
const gmeetLink = document.getElementById("gmeet-link");

platformSelect.addEventListener("change", () => {
  if (platformSelect.value === "zoom") {
    zoomConferences.style.display = "block";
    gmeetLink.style.display = "none";
  } else if (platformSelect.value === "gmeet") {
    zoomConferences.style.display = "none";
    gmeetLink.style.display = "block";
  }
});

// Initialize visibility based on default value
if (platformSelect.value === "zoom") {
  zoomConferences.style.display = "block";
} else if (platformSelect.value === "gmeet") {
  gmeetLink.style.display = "block";
}

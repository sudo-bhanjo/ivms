// This JavaScript code for both User Article and Admin Article 

// --- Article Upload ---

document.getElementById("openFiles").addEventListener("click", function () {
  const fileInput = document.getElementById("articleUpload");
  const files = fileInput.files;

  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileType = file.type;

      if (fileType === "application/pdf") {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
      } else {
        alert("Only PDF files can be opened.");
      }
    }
  } else {
    alert("Please select at least one PDF file to open.");
  }
});

$(document).ready(function () {
  $("#journalTable").DataTable({
    pageLength: 10, // Default entries per page
    lengthMenu: [10, 25, 50, 100], // Options for entries per page
  });
});

// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

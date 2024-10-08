window.onload = function () {
  checkUploadStatus(); // Check if user has already uploaded DP
};

const dpInput = document.getElementById("dpInput");
const dpImage = document.getElementById("dpImage");
const dropArea = document.getElementById("dropArea");
const uploadBtn = document.getElementById("uploadBtn");
const statusMsg = document.getElementById("statusMsg");

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area when file is dragged over it
["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(
    eventName,
    () => dropArea.classList.add("highlight"),
    false
  );
});

["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(
    eventName,
    () => dropArea.classList.remove("highlight"),
    false
  );
});

// Handle dropped files
dropArea.addEventListener("drop", handleDrop, false);
dropArea.addEventListener("click", () => dpInput.click(), false);

dpInput.addEventListener("change", handleFiles);

uploadBtn.addEventListener("click", uploadDP);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const file = dt.files[0];
  handleFile(file);
}

function handleFiles() {
  const file = dpInput.files[0];
  handleFile(file);
}

function handleFile(file) {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      dpImage.src = e.target.result;
      uploadBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file.");
  }
}

function checkUploadStatus() {
  // Check if DP is already uploaded (using localStorage here, but you could use backend verification)
  const isUploaded = localStorage.getItem("dpUploaded");

  if (isUploaded) {
    dpInput.disabled = true;
    uploadBtn.disabled = true;
    statusMsg.innerText = "You have already uploaded your DP!";
  } else {
    dpInput.disabled = false;
    uploadBtn.disabled = true;
  }
}

function uploadDP() {
  const file = dpInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const base64Data = e.target.result.split(",")[1]; // Extract base64 string
      sendImageToServer(base64Data);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please select or drag an image first!");
  }
}

function sendImageToServer(base64Data) {
  const xhr = new XMLHttpRequest();
  const url = `upload_dp.php?dp=${encodeURIComponent(base64Data)}`; // Sending image data as query param

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("DP uploaded successfully!");

      // Disable further uploads
      localStorage.setItem("dpUploaded", "true");
      checkUploadStatus();
    }
  };

  xhr.send();
}

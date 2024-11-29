const uploadBtn = document.getElementById("uploadBtn");
const uploadedImage = document.getElementById("uploadedImage");
const imagePreview = document.getElementById("imagePreview");
const formFile = document.getElementById("formFile");
const submitBtn = document.getElementById("submitBtn");

// Function to display the image from localStorage (if available)
function displayImageFromLocalStorage() {
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    uploadedImage.src = savedImage;
    uploadedImage.style.display = "block";
    uploadBtn.style.display = "none";
  }
}

// Function to handle file input change and preview the selected image
function handleFileInputChange() {
  const file = formFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Display the image preview in the modal
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

// Function to handle the submit action
function handleFormSubmit() {
  const file = formFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Save the image to localStorage and display it
      const imageSrc = e.target.result;
      uploadedImage.src = imageSrc;
      uploadedImage.style.display = "block";
      localStorage.setItem("profileImage", imageSrc);

      // Hide the upload button
      uploadBtn.style.display = "none";

      // Close the modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("uploaddp")
      );
      modal.hide();

      // Trigger a one-time refresh to update the page
      localStorage.setItem("hasRefreshed", "true");
      setTimeout(() => location.reload(), 1000); // Refresh after 1 second
    };
    reader.readAsDataURL(file);
  }
}

// On page load
window.onload = function () {
  displayImageFromLocalStorage();

  // Handle refresh logic
  const hasRefreshed = localStorage.getItem("hasRefreshed");
  if (hasRefreshed === "true") {
    localStorage.removeItem("hasRefreshed");
  }
};

// Event Listeners
formFile.addEventListener("change", handleFileInputChange);
submitBtn.addEventListener("click", handleFormSubmit);

// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

const uploadBtn = document.getElementById("uploadBtn");
const uploadedImage = document.getElementById("uploadedImage");
const formFile = document.getElementById("formFile");
const submitBtn = document.getElementById("submitBtn");

// Function to display image from local storage (if available)
function displayImageFromLocalStorage() {
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    uploadedImage.src = savedImage;
    uploadedImage.style.display = "block";
    uploadBtn.style.display = "none";
  }
}

// Call this function when the page loads to check for the image in localStorage
window.onload = function () {
  displayImageFromLocalStorage();
};

// Submit button logic
submitBtn.addEventListener("click", function () {
  const file = formFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Set the image, display it, and store it in localStorage
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
    };
    reader.readAsDataURL(file);
  }
});

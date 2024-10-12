const uploadBtn = document.getElementById("uploadBtn");
const uploadedImage = document.getElementById("uploadedImage");
const imagePreview = document.getElementById("imagePreview");
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

// File input change event to display preview
formFile.addEventListener("change", function () {
  const file = formFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Show preview in modal before submitting
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Submit button logic

// submitBtn.addEventListener("click", function () {
//   const file = formFile.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       // Set the image, display it, and store it in localStorage
//       const imageSrc = e.target.result;
//       uploadedImage.src = imageSrc;
//       uploadedImage.style.display = "block";
//       localStorage.setItem("profileImage", imageSrc);

//       // Hide the upload button
//       uploadBtn.style.display = "none";

//       // Close the modal
//       const modal = bootstrap.Modal.getInstance(
//         document.getElementById("uploaddp")
//       );
//       modal.hide();
//     };
//     reader.readAsDataURL(file);
//   }
// });

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

      // Trigger a one-time refresh after uploading the image
      localStorage.setItem("hasRefreshed", "true");
      setTimeout(function () {
        location.reload();
      }, 1000); // Refresh after 1 second (adjust the delay as needed)
    };
    reader.readAsDataURL(file);
  }
});

// On page load, display the image from localStorage if available
window.onload = function () {
  const savedImage = localStorage.getItem("profileImage");
  const hasRefreshed = localStorage.getItem("hasRefreshed");

  // If an image is stored in localStorage, display it
  if (savedImage) {
    uploadedImage.src = savedImage;
    uploadedImage.style.display = "block";
    uploadBtn.style.display = "none";
  }

  // Check if the page has already been refreshed once
  if (hasRefreshed === "true") {
    // After refreshing once, do not refresh again and reset the flag
    localStorage.removeItem("hasRefreshed");
  }
};

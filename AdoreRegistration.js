// Sample list of predefined languages
const languages = [
  "English",
  "Hindi",
  "German",
  "Tamil",
  "Spanish",
  "French",
  "Hebrew",
  "Arabic",
  "Japanese",
  "Chinese",
  "Russian",
  "Italian",
  "Portuguese",
  "Punjabi",
];

// Selected languages and proficiency map
const selectedLanguages = [];

// Get elements from the DOM
const languageSearchInput = document.getElementById("language-search");
const languageList = document.getElementById("language-list");
const selectedLanguagesContainer = document.querySelector(
  ".selected-languages"
);
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

// Function to update the list of languages in the modal
function updateLanguageList(query = "") {
  // Clear the current list
  languageList.innerHTML = "";

  // Filter languages based on the search query
  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().includes(query.toLowerCase())
  );

  // If no match is found, show the 'Add Custom Language' option
  if (filteredLanguages.length === 0) {
    const li = document.createElement("li");
    li.textContent = `Add "${query}"`;
    li.addEventListener("click", () => addLanguage(query)); // Allow user to add custom language
    languageList.appendChild(li);
  } else {
    // Add matched languages to the list
    filteredLanguages.forEach((language) => {
      const li = document.createElement("li");
      li.textContent = language;
      li.addEventListener("click", () => addLanguage(language));
      languageList.appendChild(li);
    });
  }
}

// Function to add language to the selected list
function addLanguage(language) {
  // Check if language is already selected
  if (!selectedLanguages.some((item) => item.language === language)) {
    selectedLanguages.push({ language: language, proficiency: "Native" }); // Default to 'Native'
    renderSelectedLanguages();
  }
  modal.style.display = "none"; // Close the modal after selection
}

// Function to render selected languages on the page with proficiency dropdown
function renderSelectedLanguages() {
  selectedLanguagesContainer.innerHTML = ""; // Clear the container
  selectedLanguages.forEach((item) => {
    const badge = document.createElement("div");
    badge.classList.add("language-badge");

    badge.innerHTML = `
              ${item.language}
              <select class="proficiency-select">
                  <option value="Native" ${
                    item.proficiency === "Native" ? "selected" : ""
                  }>Native</option>
                  <option value="Moderate" ${
                    item.proficiency === "Moderate" ? "selected" : ""
                  }>Moderate</option>
                  <option value="Fluent" ${
                    item.proficiency === "Fluent" ? "selected" : ""
                  }>Fluent</option>
              </select>
              <button>&times;</button>
          `;

    // Add event listener for removing language
    badge
      .querySelector("button")
      .addEventListener("click", () => removeLanguage(item.language));

    // Update proficiency when changed
    badge
      .querySelector(".proficiency-select")
      .addEventListener("change", (e) => {
        updateProficiency(item.language, e.target.value);
      });

    selectedLanguagesContainer.appendChild(badge);
  });
}

// Function to remove a selected language
function removeLanguage(language) {
  const index = selectedLanguages.findIndex(
    (item) => item.language === language
  );
  if (index > -1) {
    selectedLanguages.splice(index, 1);
    renderSelectedLanguages(); // Re-render after removal
  }
}

// Function to update the proficiency level of a language
function updateProficiency(language, proficiency) {
  const languageObj = selectedLanguages.find(
    (item) => item.language === language
  );
  if (languageObj) {
    languageObj.proficiency = proficiency;
  }
}

// Event listener for the search box
languageSearchInput.addEventListener("input", (e) => {
  updateLanguageList(e.target.value);
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Open the modal to select a language
document.querySelector(".add-language-btn").addEventListener("click", () => {
  modal.style.display = "flex"; // Show modal
  languageSearchInput.value = ""; // Reset search input
  updateLanguageList(); // Display the full list when the modal opens
});

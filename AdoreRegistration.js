const languages = [
  "English", "Hindi", "Spanish", "French", "German",
  "Chinese", "Japanese", "Portuguese", "Russian", "Italian"
];

const languageInput = document.getElementById('language-input');
const dropdownList = document.getElementById('dropdown-list');
const selectedLanguagesContainer = document.getElementById('selected-languages');

let selectedLanguages = [];

// Populate the dropdown with the predefined languages
function populateDropdown() {
  dropdownList.innerHTML = '';
  languages.forEach(language => {
      const item = document.createElement('div');
      item.classList.add('dropdown-item');
      item.textContent = language;
      item.addEventListener('click', () => selectLanguage(language));
      dropdownList.appendChild(item);
  });
}

// Select a language from the dropdown or input field
function selectLanguage(language) {
  if (!selectedLanguages.includes(language)) {
      selectedLanguages.push(language);
      renderSelectedLanguages();
  }
  dropdownList.style.display = 'none';
  languageInput.value = '';
}

// Render selected languages in the container
function renderSelectedLanguages() {
  selectedLanguagesContainer.innerHTML = '';
  selectedLanguages.forEach(language => {
      const item = document.createElement('div');
      item.classList.add('language-item');
      item.textContent = language;
      item.addEventListener('click', () => removeLanguage(language));
      selectedLanguagesContainer.appendChild(item);
  });
}

// Remove a language from the selected list
function removeLanguage(language) {
  selectedLanguages = selectedLanguages.filter(l => l !== language);
  renderSelectedLanguages();
}

// Show the dropdown when typing in the input
languageInput.addEventListener('input', () => {
  const input = languageInput.value.toLowerCase();
  dropdownList.style.display = input ? 'block' : 'none';
  dropdownList.innerHTML = '';
  languages
      .filter(lang => lang.toLowerCase().includes(input) || lang.toLowerCase() === input)
      .forEach(lang => {
          const item = document.createElement('div');
          item.classList.add('dropdown-item');
          item.textContent = lang;
          item.addEventListener('click', () => selectLanguage(lang));
          dropdownList.appendChild(item);
      });
});

// Allow adding new languages by pressing Enter
languageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && languageInput.value) {
      e.preventDefault();
      selectLanguage(languageInput.value);
  }
});

// Hide the dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.multi-select')) {
      dropdownList.style.display = 'none';
  }
});

populateDropdown();
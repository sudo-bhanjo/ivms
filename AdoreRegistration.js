const languages = [
  "English", "Hindi", "Spanish", "French", "German",
  "Chinese", "Japanese", "Portuguese", "Russian", "Italian"
];

const languageInput = document.getElementById('language-input');
const dropdownList = document.getElementById('dropdown-list');
const selectedLanguagesContainer = document.getElementById('selected-languages');

let selectedLanguages = [];

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

function selectLanguage(language) {
  if (!selectedLanguages.find(l => l.language === language)) {
      selectedLanguages.push({ language, proficiency: 'Fluent' });
      renderSelectedLanguages();
  }
  dropdownList.style.display = 'none';
  languageInput.value = '';
}

function renderSelectedLanguages() {
  selectedLanguagesContainer.innerHTML = '';
  selectedLanguages.forEach((langObj, index) => {
      const item = document.createElement('div');
      item.classList.add('language-item');

      const text = document.createElement('span');
      text.textContent = langObj.language;

      const proficiencySelect = document.createElement('select');
      ['Fluent', 'Moderate', 'Native'].forEach(level => {
          const option = document.createElement('option');
          option.value = level;
          option.textContent = level;
          option.selected = langObj.proficiency === level;
          proficiencySelect.appendChild(option);
      });
      proficiencySelect.addEventListener('change', (e) => {
          selectedLanguages[index].proficiency = e.target.value;
      });

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.textContent = 'X';
      removeBtn.addEventListener('click', () => removeLanguage(index));

      item.appendChild(text);
      item.appendChild(proficiencySelect);
      item.appendChild(removeBtn);

      selectedLanguagesContainer.appendChild(item);
  });
}

function removeLanguage(index) {
  selectedLanguages.splice(index, 1);
  renderSelectedLanguages();
}

languageInput.addEventListener('input', () => {
  const input = languageInput.value.toLowerCase();
  dropdownList.style.display = input ? 'block' : 'none';
  dropdownList.innerHTML = '';
  languages
      .filter(lang => lang.toLowerCase().includes(input))
      .forEach(lang => {
          const item = document.createElement('div');
          item.classList.add('dropdown-item');
          item.textContent = lang;
          item.addEventListener('click', () => selectLanguage(lang));
          dropdownList.appendChild(item);
      });
});

languageInput.addEventListener('click', () => {
  dropdownList.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.multi-select')) {
      dropdownList.style.display = 'none';
  }
});

populateDropdown();
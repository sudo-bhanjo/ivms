document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("click", function () {
    document.getElementById("skill-input").value = this.textContent;
  });
});

document.querySelector(".save-btn").addEventListener("click", function () {
  const skill = document.getElementById("skill-input").value;
  if (skill) {
    alert(`Skill ${skill} saved!`);
  } else {
    alert("Please enter or select a skill.");
  }
});

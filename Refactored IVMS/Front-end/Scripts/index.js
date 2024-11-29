// Initial counts
let managerCount = 50;
let volunteersCount = 100;
let articlesCount = 100;
let reviewsCount = 85;
let leaveCount = 5;
let meetingCount = 12;
let articleapprovedCount = 80;
let articlesdrawnCount = 15;

// Animation function for counting
function animateCount(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = range / (duration / 20); // adjust 20 to make it smoother
  let obj = document.getElementById(id);

  function step() {
    current += increment;
    if (current >= end) {
      current = end;
      obj.textContent = Math.floor(current);
    } else {
      obj.textContent = Math.floor(current);
      setTimeout(step, 20); // adjust 20 for speed
    }
  }

  step();
}

// Start all animations
animateCount("manager-count", 0, managerCount, 2000);
animateCount("volunteers-count", 0, volunteersCount, 2000);
animateCount("articles-count", 0, articlesCount, 2000);
animateCount("reviews-count", 0, reviewsCount, 2000);
animateCount("leave-count", 0, leaveCount, 2000);
animateCount("meeting-count", 0, meetingCount, 2000);
animateCount("approved-articles-count", 0, articleapprovedCount, 2000);
animateCount("disapproved-articles-count", 0, articlesdrawnCount, 2000);

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

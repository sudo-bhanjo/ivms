// --- Rating ---

function updateRatingValue(value) {
  document.getElementById("rating-value").innerText = value;
}

function updateRatingValue2(value) {
  document.getElementById("rating-value2").innerText = value;
}

function updateRatingValue(value, elementId) {
  document.getElementById(elementId).innerText = value;
}

// --- Pop Up ---

document.addEventListener("DOMContentLoaded", function () {
  const responsesBody = document.getElementById("responsesBody");
  const searchBox = document.getElementById("searchBox");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");
  const popupContent = document.getElementById("popupContent");
  const overlay = document.getElementById("overlay");

  const applications = [
    {
      name: "John Doe",
      email: "john@example.com",
      contact: "1234567890",
      whatsapp: "1234567890",
      city: "New York",
      state: "NY",
      country: "USA",
      language: "English",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Passionate about volunteering.",
      source: "Internet",
      motivation: "Helping others.",
      "meeting-date": "2024-08-10",
      "meeting-time": "10:00 AM",
      platform: "Zoom",
      meetingRound: 1,
      remarks: "Good communication skills",
      status: "Inprocess",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "0987654321",
      whatsapp: "0987654321",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      language: "Spanish",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Experienced volunteer.",
      source: "Referral",
      motivation: "Community service.",
      "meeting-date": "2024-08-11",
      "meeting-time": "2:00 PM",
      platform: "Google Meet",
      meetingRound: 2,
      remarks: "Very enthusiastic",
      status: "Inprocess",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "5551234567",
      whatsapp: "5551234567",
      city: "Chicago",
      state: "IL",
      country: "USA",
      language: "French",
      fluency: "Advanced",
      writing: "Excellent",
      intro: "Dedicated to social work.",
      source: "Social Media",
      motivation: "Making a difference.",
      "meeting-date": "2024-08-12",
      "meeting-time": "11:00 AM",
      platform: "Microsoft Teams",
      meetingRound: 1,
      remarks: "Great leadership qualities",
      status: "Inprocess",
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "5559876543",
      whatsapp: "5559876543",
      city: "Houston",
      state: "TX",
      country: "USA",
      language: "German",
      fluency: "Basic",
      writing: "Fair",
      intro: "Volunteering enthusiast.",
      source: "Friend",
      motivation: "Giving back to society.",
      "meeting-date": "2024-08-13",
      "meeting-time": "3:00 PM",
      platform: "Zoom",
      meetingRound: 3,
      remarks: "Needs improvement in technical skills",
      status: "Inprocess",
    },
    {
      name: "Charlie Davis",
      email: "charlie@example.com",
      contact: "5556543210",
      whatsapp: "5556543210",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      language: "Chinese",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Passionate about helping.",
      source: "Newsletter",
      motivation: "Community engagement.",
      "meeting-date": "2024-08-14",
      "meeting-time": "1:00 PM",
      platform: "Google Meet",
      meetingRound: 2,
      remarks: "Very organized and efficient",
      status: "Inprocess",
    },
    {
      name: "David Evans",
      email: "david@example.com",
      contact: "5553210987",
      whatsapp: "5553210987",
      city: "Philadelphia",
      state: "PA",
      country: "USA",
      language: "Japanese",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Committed to volunteering.",
      source: "Advertisement",
      motivation: "Improving lives.",
      "meeting-date": "2024-08-15",
      "meeting-time": "4:00 PM",
      platform: "Microsoft Teams",
      meetingRound: 1,
      remarks: "Excellent problem-solving skills",
      status: "Inprocess",
    },
    {
        "name": "Emily Watson",
        "email": "emily@example.com",
        "contact": "5551234567",
        "whatsapp": "5551234567",
        "city": "San Francisco",
        "state": "CA",
        "country": "USA",
        "language": "Spanish",
        "fluency": "Fluent",
        "writing": "Good",
        "intro": "Eager to contribute to social causes.",
        "source": "Referral",
        "motivation": "Making a difference.",
        "meeting-date": "2024-08-15",
        "meeting-time": "2:00 PM",
        "platform": "Zoom",
        "meetingRound": 1,
        "remarks": "Strong communication skills",
        "status": "Scheduled"
    },
    {
        "name": "Liam Johnson",
        "email": "liam@example.com",
        "contact": "5552345678",
        "whatsapp": "5552345678",
        "city": "Los Angeles",
        "state": "CA",
        "country": "USA",
        "language": "French",
        "fluency": "Intermediate",
        "writing": "Good",
        "intro": "Dedicated to community service.",
        "source": "Social Media",
        "motivation": "Volunteer experience.",
        "meeting-date": "2024-08-16",
        "meeting-time": "3:00 PM",
        "platform": "Microsoft Teams",
        "meetingRound": 2,
        "remarks": "Well-prepared",
        "status": "Inprocess"
    },
    {
        "name": "Olivia Smith",
        "email": "olivia@example.com",
        "contact": "5553456789",
        "whatsapp": "5553456789",
        "city": "New York",
        "state": "NY",
        "country": "USA",
        "language": "German",
        "fluency": "Basic",
        "writing": "Average",
        "intro": "Excited to learn and grow.",
        "source": "Website",
        "motivation": "Personal development.",
        "meeting-date": "2024-08-17",
        "meeting-time": "10:00 AM",
        "platform": "Google Meet",
        "meetingRound": 1,
        "remarks": "Enthusiastic",
        "status": "Completed"
    },
    {
        "name": "Noah Brown",
        "email": "noah@example.com",
        "contact": "5554567890",
        "whatsapp": "5554567890",
        "city": "Austin",
        "state": "TX",
        "country": "USA",
        "language": "Chinese",
        "fluency": "Fluent",
        "writing": "Excellent",
        "intro": "Committed to making a difference.",
        "source": "Newsletter",
        "motivation": "Community engagement.",
        "meeting-date": "2024-08-18",
        "meeting-time": "11:00 AM",
        "platform": "Zoom",
        "meetingRound": 3,
        "remarks": "Detail-oriented",
        "status": "Scheduled"
    },
    {
        "name": "Ava Davis",
        "email": "ava@example.com",
        "contact": "5555678901",
        "whatsapp": "5555678901",
        "city": "Boston",
        "state": "MA",
        "country": "USA",
        "language": "Japanese",
        "fluency": "Intermediate",
        "writing": "Good",
        "intro": "Passionate about education.",
        "source": "Referral",
        "motivation": "Teaching experience.",
        "meeting-date": "2024-08-19",
        "meeting-time": "12:00 PM",
        "platform": "Microsoft Teams",
        "meetingRound": 2,
        "remarks": "Strong organizational skills",
        "status": "Inprocess"
    },
    {
        "name": "Sophia Martinez",
        "email": "sophia@example.com",
        "contact": "5556789012",
        "whatsapp": "5556789012",
        "city": "Seattle",
        "state": "WA",
        "country": "USA",
        "language": "Korean",
        "fluency": "Basic",
        "writing": "Average",
        "intro": "Driven by a desire to help others.",
        "source": "Social Media",
        "motivation": "Social work.",
        "meeting-date": "2024-08-20",
        "meeting-time": "1:00 PM",
        "platform": "Google Meet",
        "meetingRound": 1,
        "remarks": "Creative thinker",
        "status": "Completed"
    },
    {
        "name": "William Garcia",
        "email": "william@example.com",
        "contact": "5557890123",
        "whatsapp": "5557890123",
        "city": "Chicago",
        "state": "IL",
        "country": "USA",
        "language": "Italian",
        "fluency": "Fluent",
        "writing": "Excellent",
        "intro": "Enthusiastic about cultural exchange.",
        "source": "Website",
        "motivation": "Cultural awareness.",
        "meeting-date": "2024-08-21",
        "meeting-time": "2:00 PM",
        "platform": "Zoom",
        "meetingRound": 2,
        "remarks": "Highly motivated",
        "status": "Inprocess"
    },
    {
        "name": "James Rodriguez",
        "email": "james@example.com",
        "contact": "5558901234",
        "whatsapp": "5558901234",
        "city": "Denver",
        "state": "CO",
        "country": "USA",
        "language": "Portuguese",
        "fluency": "Intermediate",
        "writing": "Good",
        "intro": "Aiming to contribute to environmental causes.",
        "source": "Referral",
        "motivation": "Environmental sustainability.",
        "meeting-date": "2024-08-22",
        "meeting-time": "3:00 PM",
        "platform": "Microsoft Teams",
        "meetingRound": 3,
        "remarks": "Resourceful",
        "status": "Scheduled"
    },
    {
        "name": "Mia Hernandez",
        "email": "mia@example.com",
        "contact": "5559012345",
        "whatsapp": "5559012345",
        "city": "Portland",
        "state": "OR",
        "country": "USA",
        "language": "Russian",
        "fluency": "Basic",
        "writing": "Average",
        "intro": "Inspired to help underprivileged communities.",
        "source": "Social Media",
        "motivation": "Community service.",
        "meeting-date": "2024-08-23",
        "meeting-time": "10:00 AM",
        "platform": "Google Meet",
        "meetingRound": 1,
        "remarks": "Proactive",
        "status": "Completed"
    },
    {
        "name": "Isabella Lee",
        "email": "isabella@example.com",
        "contact": "5550123456",
        "whatsapp": "5550123456",
        "city": "Miami",
        "state": "FL",
        "country": "USA",
        "language": "Arabic",
        "fluency": "Fluent",
        "writing": "Excellent",
        "intro": "Motivated by a desire to make a positive impact.",
        "source": "Newsletter",
        "motivation": "Social justice.",
        "meeting-date": "2024-08-24",
        "meeting-time": "11:00 AM",
        "platform": "Zoom",
        "meetingRound": 2,
        "remarks": "Thoughtful",
        "status": "Inprocess"
    },
    {
        "name": "Henry Perez",
        "email": "henry@example.com",
        "contact": "5551234560",
        "whatsapp": "5551234560",
        "city": "Atlanta",
        "state": "GA",
        "country": "USA",
        "language": "Spanish",
        "fluency": "Fluent",
        "writing": "Good",
        "intro": "Dedicated to improving education.",
        "source": "Referral",
        "motivation": "Educational outreach.",
        "meeting-date": "2024-08-25",
        "meeting-time": "12:00 PM",
        "platform": "Microsoft Teams",
        "meetingRound": 3,
        "remarks": "Organized",
        "status": "Scheduled"
    },
  ];

  localStorage.setItem("applications", JSON.stringify(applications));
  let filteredApplications = applications;
  let currentPage = 1;
  const rowsPerPage = 5;

  function displayTable(applications, page = 1) {
    responsesBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedApplications = applications.slice(start, end);

    paginatedApplications.forEach((application, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td><a href="#" class="name-link" data-index="${index}">${
        application.name
      }</a></td>
          <td>${application["meeting-date"]} ${application["meeting-time"]}</td>
          <td><a href="https://us06web.zoom.us/j/7300060335?pwd=aVVBSlViS2xBZDdkLzlDdUwzSERRdz09" class="meeting-link">${
            application.platform
          }</a></td>
          <td>${application.meetingRound || "N/A"}</td>
          
          <td id="status-${index}"> 
          
          <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Update
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update Status</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <div class="form-container">
          <h2>Status Form</h2>
          <form>
              <div class="form-group">
                  <label for="status">Status</label>
                  <select id="status" name="status" required>
                      <option value="approved">Approved</option>
                      <option value="disapproved">Disapproved</option>
                      <option value="inprogress">In Progress</option>
                  </select>
              </div>
              <div class="form-group">
                  <label for="leaderRemarks">Leader Remarks</label>
                  <textarea id="leaderRemarks" name="leaderRemarks" placeholder="Enter leader's remarks here..." required></textarea>
              </div>
              <div class="form-group">
                  <label for="adminRemarks">Admin Remarks</label>
                  <textarea id="adminRemarks" name="adminRemarks" placeholder="Enter admin's remarks here..." required></textarea>
              </div>
              <div class="form-group">
                  <button type="submit">Submit</button>
              </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
          ${application.status || "inprocess"}</td>
          <td>
            <button onclick="updateStatus(${index}, 'Approved')">Approve</button>
            <button onclick="updateStatus(${index}, 'Disapproved')">Disapprove</button>
          </td>
        `;
      responsesBody.appendChild(row);
    });

    pageInfo.innerText = `Page ${page} of ${Math.ceil(
      applications.length / rowsPerPage
    )}`;
  }

  function showPopup(index) {
    const application = filteredApplications[index];
    popupContent.innerHTML = `
        <p><strong>Name:</strong> ${application.name}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Contact Number:</strong> ${application.contact}</p>
        <p><strong>WhatsApp Number:</strong> ${application.whatsapp}</p>
        <p><strong>City:</strong> ${application.city}</p>
        <p><strong>State:</strong> ${application.state}</p>
        <p><strong>Country:</strong> ${application.country}</p>
        <p><strong>Language:</strong> ${application.language}</p>
        <p><strong>Fluency:</strong> ${application.fluency}</p>
        <p><strong>Writing:</strong> ${application.writing}</p>
        <p><strong>Introduction:</strong> ${application.intro}</p>
        <p><strong>Source:</strong> ${application.source}</p>
        <p><strong>Motivation:</strong> ${application.motivation}</p>
        <p><strong>Meeting Time:</strong> ${application["meeting-time"]}</p>
        <p><strong>Meeting Date:</strong> ${application["meeting-date"]}</p>
        <p><strong>Platform:</strong> ${application.platform}</p>
        <p><strong>Meeting Round:</strong> ${
          application.meetingRound || "N/A"
        }</p>
        <p><strong>Remarks:</strong> ${application.remarks || "N/A"}</p>
        <p><strong>Status:</strong> ${application.status || "inprocess"}</p>
      `;
    popup.classList.add("active");
    overlay.classList.add("active");
  }

  searchBox.addEventListener("input", function () {
    const searchTerm = searchBox.value.toLowerCase();
    filteredApplications = applications.filter((application) =>
      application.name.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    displayTable(filteredApplications, currentPage);
  });

  prevPageBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayTable(filteredApplications, currentPage);
    }
  });

  nextPageBtn.addEventListener("click", function () {
    if (currentPage < Math.ceil(filteredApplications.length / rowsPerPage)) {
      currentPage++;
      displayTable(filteredApplications, currentPage);
    }
  });

  responsesBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("name-link")) {
      const index = event.target.getAttribute("data-index");
      showPopup(index);
    }
  });

  popupClose.addEventListener("click", function () {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  window.updateStatus = function (index, status) {
    const actualIndex = (currentPage - 1) * rowsPerPage + index;
    applications[actualIndex].status = status;
    localStorage.setItem("applications", JSON.stringify(applications));
    displayTable(filteredApplications, currentPage);
  };

  displayTable(filteredApplications, currentPage);
});

// ---- Form Submission ---

document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const responsesTable = document
      .getElementById("responsesTable")
      .getElementsByTagName("tbody")[0];

    const newRow = responsesTable.insertRow();

    newRow.insertCell(0).innerText = formData.get("name");
    newRow.insertCell(1).innerText = "inprocess";
    newRow.insertCell(2).innerText = `${formData.get(
      "meeting-date"
    )} ${formData.get("meeting-time")}`;

    const actionCell = newRow.insertCell(3);
    const approveButton = document.createElement("button");
    approveButton.innerText = "Approve";
    approveButton.addEventListener("click", function () {
      newRow.cells[1].innerText = "Approved";
    });

    const rejectButton = document.createElement("button");
    rejectButton.innerText = "Reject";
    rejectButton.addEventListener("click", function () {
      newRow.cells[1].innerText = "Rejected";
    });

    actionCell.appendChild(approveButton);
    actionCell.appendChild(rejectButton);

    this.reset();
  });

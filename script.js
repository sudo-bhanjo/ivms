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

// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add('loaded');
});


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
      id: "48656",
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
      id: "21656",
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
      id: "48699",
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
      id: "96325",
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
      id: "44444",
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
      id: "22556",
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
      name: "Emily Watson",
      id: "78965",
      email: "emily@example.com",
      contact: "5551234567",
      whatsapp: "5551234567",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      language: "Spanish",
      fluency: "Fluent",
      writing: "Good",
      intro: "Eager to contribute to social causes.",
      source: "Referral",
      motivation: "Making a difference.",
      "meeting-date": "2024-08-15",
      "meeting-time": "2:00 PM",
      platform: "Zoom",
      meetingRound: 1,
      remarks: "Strong communication skills",
      status: "Scheduled",
    },
    {
      name: "Liam Johnson",
      id: "11102",
      email: "liam@example.com",
      contact: "5552345678",
      whatsapp: "5552345678",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      language: "French",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Dedicated to community service.",
      source: "Social Media",
      motivation: "Volunteer experience.",
      "meeting-date": "2024-08-16",
      "meeting-time": "3:00 PM",
      platform: "Microsoft Teams",
      meetingRound: 2,
      remarks: "Well-prepared",
      status: "Inprocess",
    },
    {
      name: "Olivia Smith",
      id: "33033",
      email: "olivia@example.com",
      contact: "5553456789",
      whatsapp: "5553456789",
      city: "New York",
      state: "NY",
      country: "USA",
      language: "German",
      fluency: "Basic",
      writing: "Average",
      intro: "Excited to learn and grow.",
      source: "Website",
      motivation: "Personal development.",
      "meeting-date": "2024-08-17",
      "meeting-time": "10:00 AM",
      platform: "Google Meet",
      meetingRound: 1,
      remarks: "Enthusiastic",
      status: "Completed",
    },
    {
      name: "Noah Brown",
      id: "44444",
      email: "noah@example.com",
      contact: "5554567890",
      whatsapp: "5554567890",
      city: "Austin",
      state: "TX",
      country: "USA",
      language: "Chinese",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Committed to making a difference.",
      source: "Newsletter",
      motivation: "Community engagement.",
      "meeting-date": "2024-08-18",
      "meeting-time": "11:00 AM",
      platform: "Zoom",
      meetingRound: 3,
      remarks: "Detail-oriented",
      status: "Scheduled",
    },
    {
      name: "Ava Davis",
      id: "84556",
      email: "ava@example.com",
      contact: "5555678901",
      whatsapp: "5555678901",
      city: "Boston",
      state: "MA",
      country: "USA",
      language: "Japanese",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Passionate about education.",
      source: "Referral",
      motivation: "Teaching experience.",
      "meeting-date": "2024-08-19",
      "meeting-time": "12:00 PM",
      platform: "Microsoft Teams",
      meetingRound: 2,
      remarks: "Strong organizational skills",
      status: "Inprocess",
    },
    {
      name: "Sophia Martinez",
      id: "456569",
      email: "sophia@example.com",
      contact: "5556789012",
      whatsapp: "5556789012",
      city: "Seattle",
      state: "WA",
      country: "USA",
      language: "Korean",
      fluency: "Basic",
      writing: "Average",
      intro: "Driven by a desire to help others.",
      source: "Social Media",
      motivation: "Social work.",
      "meeting-date": "2024-08-20",
      "meeting-time": "1:00 PM",
      platform: "Google Meet",
      meetingRound: 1,
      remarks: "Creative thinker",
      status: "Completed",
    },
    {
      name: "William Garcia",
      id: "11474",
      email: "william@example.com",
      contact: "5557890123",
      whatsapp: "5557890123",
      city: "Chicago",
      state: "IL",
      country: "USA",
      language: "Italian",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Enthusiastic about cultural exchange.",
      source: "Website",
      motivation: "Cultural awareness.",
      "meeting-date": "2024-08-21",
      "meeting-time": "2:00 PM",
      platform: "Zoom",
      meetingRound: 2,
      remarks: "Highly motivated",
      status: "Inprocess",
    },
    {
      name: "James Rodriguez",
      id: "96369",
      email: "james@example.com",
      contact: "5558901234",
      whatsapp: "5558901234",
      city: "Denver",
      state: "CO",
      country: "USA",
      language: "Portuguese",
      fluency: "Intermediate",
      writing: "Good",
      intro: "Aiming to contribute to environmental causes.",
      source: "Referral",
      motivation: "Environmental sustainability.",
      "meeting-date": "2024-08-22",
      "meeting-time": "3:00 PM",
      platform: "Microsoft Teams",
      meetingRound: 3,
      remarks: "Resourceful",
      status: "Scheduled",
    },
    {
      name: "Mia Hernandez",
      id: "191919",
      email: "mia@example.com",
      contact: "5559012345",
      whatsapp: "5559012345",
      city: "Portland",
      state: "OR",
      country: "USA",
      language: "Russian",
      fluency: "Basic",
      writing: "Average",
      intro: "Inspired to help underprivileged communities.",
      source: "Social Media",
      motivation: "Community service.",
      "meeting-date": "2024-08-23",
      "meeting-time": "10:00 AM",
      platform: "Google Meet",
      meetingRound: 1,
      remarks: "Proactive",
      status: "Completed",
    },
    {
      name: "Isabella Lee",
      id: "44567",
      email: "isabella@example.com",
      contact: "5550123456",
      whatsapp: "5550123456",
      city: "Miami",
      state: "FL",
      country: "USA",
      language: "Arabic",
      fluency: "Fluent",
      writing: "Excellent",
      intro: "Motivated by a desire to make a positive impact.",
      source: "Newsletter",
      motivation: "Social justice.",
      "meeting-date": "2024-08-24",
      "meeting-time": "11:00 AM",
      platform: "Zoom",
      meetingRound: 2,
      remarks: "Thoughtful",
      status: "Inprocess",
    },
    {
      name: "Henry Perez",
      id: "77777",
      email: "henry@example.com",
      contact: "5551234560",
      whatsapp: "5551234560",
      city: "Atlanta",
      state: "GA",
      country: "USA",
      language: "Spanish",
      fluency: "Fluent",
      writing: "Good",
      intro: "Dedicated to improving education.",
      source: "Referral",
      motivation: "Educational outreach.",
      "meeting-date": "2024-08-25",
      "meeting-time": "12:00 PM",
      platform: "Microsoft Teams",
      meetingRound: 3,
      remarks: "Organized",
      status: "Scheduled",
    },
  ];

  const tableData = [];
  for (let i = 1; i <= 100; i++) {
    tableData.push({ id: i, name: `Name ${i}` });
  }

  function loadTableData(entries) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    const rows = tableData
      .slice(0, entries)
      .map((data) => {
        return `<tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                </tr>`;
      })
      .join("");

    tableBody.innerHTML = rows;
  }

  function changeEntries() {
    const entries = document.getElementById("entries").value;
    loadTableData(parseInt(entries));
  }

  // Load initial data
  loadTableData(10);

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
          <td>

          <!-- Button to Open Modal 3 -->
          <button type="button" class="modal3" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal3">${application.meetingRound || "N/A"}</td>
          </button>
          
          <!-- Modal 3 -->
<div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="modal3Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal3Label">Meeting Rounds</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="meeting-round-form">
          <form action="#" method="post">
                <p class="name-link" data-index="${index}">Name : ${application.name}</p>
                <p>Meeting round: ${application.meetingRound || "N/A"}</p>
                <label for="meeting-rounds">Number of Meetings Conducted:</label>
                <select id="meeting-rounds" name="meeting-rounds">
                    <option value="1">1 (Apptitude)</option>
                    <option value="2">2 (Technical)</option>
                    <option value="3">3 (HR Interview)</option>
                </select>
                
                <label for="meeting-taken-by">Meeting Taken By:</label>
                <input type="text" id="meeting-taken-by" name="meeting-taken-by" placeholder="Enter the name">
                
                <label for="meeting-feedback">Meeting Feedback:</label>
                <textarea id="meeting-feedback" name="meeting-feedback" rows="4" placeholder="He needs improvement in communication skills and ......."></textarea>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>

          <td id="status-${index}"> 
          
          <!-- Button trigger modal -->
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Update
          </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Rendon Feedback</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <div class="form-container">
          <form>
              <div class="form-group1">
                  <label for="status">Status</label>
                  <select id="status" name="status" required>
                      <option value="approved">Approved</option>
                      <option value="disapproved">Disapproved</option>
                      <option value="inprogress">Inprocess</option>
                  </select>
              </div>
              <div class="form-group1">
                  <label for="leaderRemarks">Leader Remarks</label>
                  <textarea id="leaderRemarks" name="leaderRemarks" placeholder="Enter leader's remarks here..." required></textarea>
              </div>
              <div class="form-group1">
                  <label for="adminRemarks">Admin Remarks</label>
                  <textarea id="adminRemarks" name="adminRemarks" placeholder="Enter admin's remarks here..." required></textarea>
              </div>
              <div class="form-group1">
                  <button type="submit">Submit</button>
              </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </td>
          <td>${application.status || "inprocess"}</td>
          <td>

            <!-- Button to Open Modal 1 -->
<button type="button" id="id" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">
  <i class="fa-solid fa-id-card"></i>
</button>

<!-- Button to Open Modal 2 -->
<button type="button" id="schedule" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal2">
  <i class="fa-regular fa-clock"></i>
</button>

<!-- Modal 1 -->
<div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal1Label">Identification</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="name-link" data-index="${index}">Name : ${
        application.name
      }</p>
        <p>Id : ${application.id || N / A}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal 2 -->
<div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="modal2Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal2Label">Meeting Date and Time</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-container">
    <form>
        <div class="form-group">
            <label for="date" title="Format: YYYY-MM-DD">Date :</label>
            <input type="date" id="date" name="date" value="2024-08-24" required>
        </div>
        <div class="form-group">
            <label for="time" title="Format: HH:MM (24-hour)">Time :</label>
            <input type="time" id="time" name="time" value="16:45" required>
        </div>
        <div class="form-group">
            <label for="platform" id="platform">Platform :</label>
              <select id="platform-select">
                <option value="gmeet">Google meet</option>
                <option value="zoom">Zoom</option>
                <option value="skype">Skype</option>
              </select>
        </div>
        <div id="zoom-conferences">
              <label for="zoom-options">Select Zoom Room:</label>
                <select id="zoom-options">
                  <option value="conference1">Conference 1</option>
                  <option value="conference2">Conference 2</option>
                  <option value="conference3">Conference 3</option>
                  <option value="conference4">Conference 4</option>
                  <option value="conference5">Conference 5</option>
                  <option value="conference6">Conference 6</option>
                  <option value="conference7">Conference 7</option>
                  <option value="Intromeet">Intro meet</option>
                  <option value="interview1">Interview 1</option>
                  <option value="Interview2">Interview 2</option>
                  <option value="Intromeet">SomSir: Admin Coordinator</option>
                  <option value="Intromeet">Pradipta Sir: Operation Coordin</option>
                  <option value="Intromeet">Devika Ma'am: Workshop Coordinator</option>
                  <option value="Intromeet">Pinnacle 1 (HR Team)</option>
                  <option value="Intromeet">Pinnacle 2 (HR Team)</option>
                  <option value="Intromeet">Pinnacle 3 (HR Team)</option>
                  <option value="Intromeet">LSet</option>
                  <option value="Intromeet">Picasso 1 (GD)</option>
                  <option value="Intromeet">Picasso 2 (GD)</option>
                  <option value="Intromeet">Picasso 3 (GD)</option>
                  <option value="Intromeet">Echo</option>
                  <option value="Intromeet">NexS 1 (SM)</option>
                  <option value="Intromeet">NexS 2 (SM)</option> 
                  <option value="Intromeet">NexS 3 (SM)</option> 
                  <option value="Intromeet">NexS 4 (SM)</option>
                  <option value="CliMet">CliMet</option>
                  <option value="Simtrak">Simtrak</option>
                  <option value="Ascend">Ascend</option>
                  <option value="WeeHo">WeeHo</option>
                  <option value="Inseeds">Inseeds</option>
                  <option value="Initiators">Initiators</option>
                  <option value="InkSpire">InkSpire</option>
                  <option value="Fiesta">Fiesta</option>
                  <option value="Young Leaders-1">Young Leaders-1</option>
                  <option value="Young Leaders-2">Young Leaders-2</option>
                  <option value="Young Leaders-3">Young Leaders-3</option>
  <option value="VidyaKiran">VidyaKiran</option>
  <option value="Spearhead 1">Spearhead 1</option>
  <option value="Spearhead 2">Spearhead 2</option>
  <option value="Spearhead 3">Spearhead 3</option>
  <option value="Spearhead 4">Spearhead 4</option>
  <option value="Infovue Solutions">Infovue Solutions</option>
  <option value="Storewise">Storewise</option>
  <option value="Storewise Managers">Storewise Managers</option>
  <option value="Zeal">Zeal</option>
  <option value="Venus">Venus</option>
  <option value="Zenith">Zenith</option>
  <option value="Spark">Spark</option>
  <option value="Aurora">Aurora</option>
  <option value="Phoenix">Phoenix</option>
  <option value="Jupiter">Jupiter</option>
  <option value="Marvel Beta">Marvel Beta</option>
  <option value="Marvel Alpha">Marvel Alpha</option>
  <option value="Blaze">Blaze</option>
  <option value="Everest">Everest</option>
  <option value="Flame">Flame</option>
  <option value="K2">K2</option>
  <option value="Gladiator">Gladiator</option>
  <option value="SuperNova">SuperNova</option>
  <option value="Glory">Glory</option>
  <option value="Saturn">Saturn</option>
  <option value="Star">Star</option>
  <option value="Rays">Rays</option>
  <option value="Genius">Genius</option>
  <option value="Vision">Vision</option>
  <option value="Pluto">Pluto</option>
  <option value="Shinchan">Shinchan</option>
  <option value="Doraemon">Doraemon</option>
  <option value="Matrix">Matrix</option>
  <option value="Mars">Mars</option>
  <option value="Minions">Minions</option>
  <option value="Dumbledore">Dumbledore</option>
  <option value="Neptune">Neptune</option>
  <option value="TAC">TAC</option>
  <option value="International TAC">International TAC</option>
  <option value="Pyramid">Pyramid</option>
  <option value="Glowball">Glowball</option>
  <option value="Maverick">Maverick</option>
  <option value="Row">Row</option>
  <option value="Hakuna Matata">Hakuna Matata</option>
  <option value="Achievers">Achievers</option>
  <option value="Shravya Katiyar">Shravya Katiyar</option>
  <option value="Simtrak Coordinators">Simtrak Coordinators</option>
  <option value="Get2gether (Fun n learn)">Get2gether (Fun n learn)</option>
  <option value="Away">Away</option>
  <option value="Simran Sharma">Simran Sharma</option>
  <option value="Dinesh Agarwal">Dinesh Agarwal</option>                  
      </select>
      </div>
    </form>
    <h6>Feedback </h6>
    <textarea rows="4" placeholder="I think you did a great job when you..."></textarea>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</div>
          </td>
        `;
      responsesBody.appendChild(row);
    });

    pageInfo.innerText = `Page ${page} of ${Math.ceil(
      applications.length / rowsPerPage
    )}`;

    const platformSelect = document.getElementById("platform-select");
    const zoomConferences = document.getElementById("zoom-conferences");

    platformSelect.addEventListener("change", function () {
      if (this.value === "zoom") {
        zoomConferences.style.display = "block";
      } else {
        zoomConferences.style.display = "none";
      }
    });

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
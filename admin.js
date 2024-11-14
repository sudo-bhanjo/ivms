// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

// Sample volunteer data
const volunteers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Coordinator",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Volunteer",
    status: "Inactive",
  },
  {
    name: "Mike Lee",
    email: "mike@example.com",
    role: "Volunteer",
    status: "Active",
  },
];

// Render volunteer data in the table
const volunteerList = document.getElementById("volunteer-list");
volunteers.forEach((volunteer) => {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${volunteer.name}</td>
      <td>${volunteer.email}</td>
      <td>${volunteer.role}</td>
      <td>${volunteer.status}</td>
      <td class="actions">
        <i class="fas fa-edit"></i> Edit &nbsp;&nbsp; 
        <i class="fas fa-trash-alt"></i> Delete
      </td>
    `;
  volunteerList.appendChild(row);
});

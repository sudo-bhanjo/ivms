<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IVMS - All User Page</title>
    <link rel="shortcut icon" href="/Front-end/Styles/alluserpage.css" type="image/x-icon" />
    <link rel="stylesheet" href="/Front-end/Styles/alluserpage.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap"
      rel="stylesheet"
    />
    <!-- DataTables CSS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.datatables.net/1.13.5/css/jquery.dataTables.css"
    />

    <!-- jQuery and DataTables JS -->
    <script
      type="text/javascript"
      charset="utf8"
      src="https://code.jquery.com/jquery-3.6.0.min.js"
    ></script>
    <script
      type="text/javascript"
      charset="utf8"
      src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.js"
    ></script>
  </head>

  <body>
    <div class="sidebar">
      <div class="logo"></div>
      <ul class="menu">
        <li>
          <a href="index.html">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="profile.html">
            <i class="fas fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="oversight.html">
            <i class="fas fa-chart-bar"></i>
            <span>Oversight</span>
          </a>
        </li>
        <li>
          <a href="article.html">
            <i class="fas fa-briefcase"></i>
            <span>Article</span>
          </a>
        </li>
        <li class="active">
          <a href="Alluserpage.html">
            <i class="fas fa-user-circle"></i>
            <span>All User Page</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-star"></i>
            <span>Testimonials</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </li>
        <li class="logout">
          <a href="#">
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="main--content">
      <div class="header--wrapper">
        <div class="header--title">
          <div class="toggle">
            <button
              class="btn btn-primary"
              id="toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <i class="fa-solid fa-bars"></i>
            </button>

            <div
              class="offcanvas offcanvas-start"
              data-bs-backdrop="static"
              tabindex="-1"
              id="staticBackdrop"
              aria-labelledby="staticBackdropLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">IVMS</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div>
                  <ul class="menu">
                    <li>
                      <a href="index.html">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="profile.html">
                        <i class="fas fa-user"></i>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="oversight.html">
                        <i class="fas fa-chart-bar"></i>
                        <span>Oversight</span>
                      </a>
                    </li>
                    <li>
                      <a href="article.html">
                        <i class="fas fa-briefcase"></i>
                        <span>Article</span>
                      </a>
                    </li>
                    <li class="active">
                      <a href="Alluserpage.html">
                        <i class="fas fa-user-circle"></i>
                        <span>All User Page</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-star"></i>
                        <span>Testimonials</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-cog"></i>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li class="logout">
                      <a href="#">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="primary-dashboard">
            <h3>All User Page</h3>
          </div>
        </div>
      </div>
      <div class="card--container"></div>
      <div class="tabular--wrapper">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Type</th>
                <th>PCON ID</th>
                <th>Member Update</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <?php
              $servername = "localhost";
              $username = "root";
              $password = "";
              $database = "alluserpage";

              $connection = new mysqli($servername, $username, $password, $database);
              
              if ($connection->connect_error) {
                die("". $connection->connect_error);
              }
              
              $sql = "SELECT * FROM users";
              $result = $connection->query($sql);

              if (!$result) {
                die("Invalid query: ". $connection->error);
              }

              while( $row = $result->fetch_assoc() ) {
                echo "<tr>
                <td>" . $row["ID"] . "</td>
                <td>" . $row["NAME"] . "</td>
                <td>" . $row["UserType"] . "</td>
                <td>" . $row["PconID"] . "</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Update
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalForm1"
                  >
                    <i class="btn btn-primary btn btn-primary fas fa-edit"></i>
                    <!-- Icon for the first modal -->
                  </button>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalForm2"
                  >
                    <i
                      class="btn btn-primary btn btn-primary fas fa-message"
                    ></i>
                    <!-- Icon for the second modal -->
                  </button>
                </td>
              </tr>";
              }
              
              ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal Form for member update-->

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update Member</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="memberID" class="form-label">Member ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="memberID"
                  placeholder="Enter ID"
                />
              </div>
              <div class="mb-3">
                <label for="memberName" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="memberName"
                  placeholder="Enter Name"
                />
              </div>
              <div class="mb-3">
                <label for="userType" class="form-label">User Type</label>
                <select class="form-select" id="userType">
                  <option value="Admin">Admin</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="TAC">TAC</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="pconID" class="form-label">PCON ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="pconID"
                  placeholder="Enter PCON ID"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Forms 1 for action -->
    <div
      class="modal fade"
      id="modalForm1"
      tabindex="-1"
      aria-labelledby="modalForm1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalForm1Label">Edit Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="accountStatusForm">
              <!-- Name Field (for reference) -->
              <div class="mb-3">
                <label for="userName" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="userName"
                  placeholder="Enter Name"
                />
              </div>

              <!-- Dropdown for Active/Dormant status -->
              <div class="mb-3">
                <label for="accountStatus" class="form-label"
                  >Account Status</label
                >
                <select class="form-select" id="accountStatus">
                  <option value="active">Active</option>
                  <option value="dormant">Dormant</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Form 2 for action-->
    <div
      class="modal fade"
      id="modalForm2"
      tabindex="-1"
      aria-labelledby="modalForm2Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalForm2Label">Feedback</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="feedback" class="form-label">Feedback</label>
              <textarea
                class="form-control"
                id="feedback"
                rows="3"
                placeholder="Provide feedback"
              ></textarea>
            </div>

            <!-- Email option to notify the person -->
            <div class="mb-3">
              <label for="emailNotification" class="form-label"
                >Send email notification to:</label
              >
              <input
                type="email"
                class="form-control"
                id="emailNotification"
                placeholder="Enter the recipient's email address"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button type="button" class="btn btn-success">Send</button>
          </div>
        </div>
      </div>
    </div>

    <script src="/Front-end/Scripts/alluserpage.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

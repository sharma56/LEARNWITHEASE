import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo" style={{ color: "white" }} href="#">
            LearnWithEase
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav justify-content-end">
            {/* <li class="nav-item">
              <Link to="/Location" className="nav-link active nav-txt" aria-current="page">Location</Link>
            </li> */}
            <li class="nav-item">
              <Link
                to="/courses"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Course
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link active nav-txt">
                About
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link to="/Login" className="dropdown-item">
                    Student
                  </Link>
                </li>
                <li>
                  <Link to="/TeacherLogin" className="dropdown-item">
                    Teacher
                  </Link>
                </li>
                <li>
                  <Link to="/AdminLogin" className="dropdown-item">
                    Admin
                  </Link>
                </li>
              </ul>
            </li>
            {/* </li> */}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SignUp
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link to="/signup" className="dropdown-item">
                    Student
                  </Link>
                </li>
                <li>
                  <Link to="/teacherSignup" className="dropdown-item">
                    Teacher
                  </Link>
                </li>
                <li>
                  <Link to="/AdminRegister" className="dropdown-item">
                    Admin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

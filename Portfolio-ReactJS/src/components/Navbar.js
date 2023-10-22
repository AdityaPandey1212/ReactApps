import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div className="container-xxl">
                    <a href="#" className="navbar-brand">
                        <span className="fw-bold text-light">
                            {" ADITYA KR PANDEY 21BCI0280 "}
                        </span>
                    </a>
                    <div className="justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-2 mt-1 d-md-inline ">
                                <Link to="/projects" className="btn btn-md btn-primary fw-bold">
                                    <i className="bi bi-person-workspace d-none d-md-inline"></i>{" "}
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

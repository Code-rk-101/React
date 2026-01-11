import { Link } from "react-router-dom";

function Sidebar ({selectedBar,setSelectedBar}) {
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
            <a
                href="#"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
                <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-4">Sidebar</span>
            </a>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={`nav-link ${selectedBar === 'Home' ? 'text-white active' : 'link-body-emphasis'}`}
                        onClick={() => {
                            setSelectedBar('Home');
                        }}
                        aria-current="page"
                    >
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#home"></use>
                        </svg>
                        Home
                    </Link>
                </li>

                <li>
                    <a
                        href="#"
                        className={`nav-link ${selectedBar === 'Dashboard' ? 'text-white active' : 'link-body-emphasis'}`}
                        onClick={() => {
                            setSelectedBar('Dashboard');
                        }}
                    >
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#speedometer2"></use>
                        </svg>
                        Dashboard
                    </a>
                </li>

                <li>
                    <Link
                        to="/create-post"
                        className={`nav-link ${selectedBar === 'Create Post' ? 'text-white active' : 'link-body-emphasis'}`}
                        onClick={() => {
                            setSelectedBar('Create Post');
                        }}
                    >
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#table"></use>
                        </svg>
                        Create Post
                    </Link>
                </li>
            </ul>

            <hr />

            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                    <li>
                        <a className="dropdown-item" href="#">New project...</a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">Settings</a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">Profile</a>
                    </li>

                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
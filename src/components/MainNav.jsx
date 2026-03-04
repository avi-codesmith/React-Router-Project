import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"; // It is kind a marker where to put children

import "./MainNavModule.css";

export default function MainNav() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      {/*here is the marker to put children components */}
    </>
  );
}

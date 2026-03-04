import { NavLink } from "react-router-dom";

import "./MainNavModule.css";

export default function MainNav() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)} // its only work on <NavLink> bcz its contain such a className that return isActive key value pair thus we can use that for toggling class in component.
                end // to read the end value bcz, it is initially read the starting value which is "/" and thus all type of URL contain atleast that the "/" :)
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
